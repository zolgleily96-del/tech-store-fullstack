from rest_framework import serializers

from .models import (
    Category,
    Brand,
    Product,
    ProductAttribute,
    ProductImage,
)


class CategorySerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()
    product_count = serializers.IntegerField(read_only=True)

    class Meta:
        model = Category
        fields = [
            "id",
            "name",
            "slug",
            "description",
            "parent",
            "children",
            "product_count",
            "is_active",
        ]

    def get_children(self, obj):
        children = obj.children.filter(is_active=True)
        return CategorySerializer(children, many=True).data


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = [
            "id",
            "name",
            "slug",
            "logo",
            "description",
            "is_active",
        ]


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = [
            "id",
            "image",
            "alt_text",
            "is_primary",
            "order",
        ]


class ProductAttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductAttribute
        fields = [
            "id",
            "key",
            "value",
        ]


class ProductListSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(
        source="category.name",
        read_only=True,
    )
    brand_name = serializers.CharField(
        source="brand.name",
        read_only=True,
    )
    primary_image = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "slug",
            "category_name",
            "brand_name",
            "short_description",
            "price",
            "discount_price",
            "stock",
            "is_featured",
            "primary_image",
            "created_at",
        ]

    def get_primary_image(self, obj):
        primary = obj.images.filter(is_primary=True).first()

        if not primary:
            primary = obj.images.first()

        if primary:
            return ProductImageSerializer(primary).data

        return None


class ProductDetailSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.filter(is_active=True),
        source="category",
        write_only=True,
    )

    brand = BrandSerializer(read_only=True)
    brand_id = serializers.PrimaryKeyRelatedField(
        queryset=Brand.objects.filter(is_active=True),
        source="brand",
        write_only=True,
        required=False,
        allow_null=True,
    )

    images = ProductImageSerializer(
        many=True,
        read_only=True,
    )
    attributes = ProductAttributeSerializer(
        many=True,
        read_only=True,
    )

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "slug",
            "description",
            "short_description",
            "category",
            "category_id",
            "brand",
            "brand_id",
            "price",
            "discount_price",
            "stock",
            "sku",
            "status",
            "is_featured",
            "images",
            "attributes",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "slug",
            "created_at",
            "updated_at",
        ]


class ProductCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "name",
            "description",
            "short_description",
            "category",
            "brand",
            "price",
            "discount_price",
            "stock",
            "sku",
            "status",
            "is_featured",
        ]