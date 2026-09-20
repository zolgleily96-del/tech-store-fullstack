from django.shortcuts import render

from rest_framework import generics

from .models import Category, Brand, Product
from .selectors import (
    category_get_list,
    category_get_by_slug,
    brand_get_list,
    brand_get_by_slug,
    product_get_list,
    product_get_by_slug,
)
from .serializers import (
    CategorySerializer,
    BrandSerializer,
    ProductListSerializer,
    ProductDetailSerializer,
    ProductCreateUpdateSerializer,
)
from .services import (
    product_create,
    product_update,
)
from rest_framework.parsers import MultiPartParser, FormParser
from .models import ProductImage
from rest_framework.response import Response
from rest_framework.response import Response
from rest_framework.decorators import action

class ProductImagePrimaryView(generics.UpdateAPIView):

    queryset = ProductImage.objects.all()

    lookup_field = "id"


    def patch(self, request, id):

        image = self.get_object()


        ProductImage.objects.filter(
            product=image.product
        ).update(
            is_primary=False
        )


        image.is_primary = True
        image.save()


        return Response(
            {
                "message":
                "Primary image updated"
            }
        )
class CategoryListView(generics.ListAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        return category_get_list()


class CategoryDetailView(generics.RetrieveAPIView):
    serializer_class = CategorySerializer
    lookup_field = "slug"

    def get_object(self):
        return category_get_by_slug(slug=self.kwargs["slug"])


class BrandListView(generics.ListAPIView):
    serializer_class = BrandSerializer

    def get_queryset(self):
        return brand_get_list()


class BrandDetailView(generics.RetrieveAPIView):
    serializer_class = BrandSerializer
    lookup_field = "slug"

    def get_object(self):
        return brand_get_by_slug(slug=self.kwargs["slug"])


class ProductListView(generics.ListCreateAPIView):
    def get_queryset(self):
        return product_get_list()

    def get_serializer_class(self):
        if self.request.method == "POST":
            return ProductCreateUpdateSerializer

        return ProductListSerializer

    def perform_create(self, serializer):
        product = product_create(
            validated_data=serializer.validated_data
        )
        serializer.instance = product


class ProductDetailView(generics.RetrieveUpdateAPIView):
    lookup_field = "slug"

    def get_queryset(self):
        return product_get_list()

    def get_serializer_class(self):
        if self.request.method in ["PUT", "PATCH"]:
            return ProductCreateUpdateSerializer

        return ProductDetailSerializer

    def perform_update(self, serializer):
        product_update(
            product=self.get_object(),
            validated_data=serializer.validated_data,
        )

class ProductImageCreateView(generics.CreateAPIView):

    parser_classes = [
        MultiPartParser,
        FormParser,
    ]

    def post(self, request, slug):

        product = product_get_by_slug(
            slug=slug
        )

        image = request.FILES.get(
            "image"
        )

        product_image = ProductImage.objects.create(
            product=product,
            image=image,
            is_primary=True,
        )


        return Response(
            {
                "id": product_image.id,
                "image": product_image.image.url,
            }
        )
class ProductImageDeleteView(generics.DestroyAPIView):

    queryset = ProductImage.objects.all()

    lookup_field = "id"
    
class ProductImageDeleteView(generics.DestroyAPIView):

    queryset = ProductImage.objects.all()

    lookup_field = "id"