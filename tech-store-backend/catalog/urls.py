from django.urls import path

from .views import (
    CategoryListView,
    CategoryDetailView,
    BrandListView,
    BrandDetailView,
    ProductListView,
    ProductDetailView,
)
from .views import (
    ProductImageDeleteView,
)

urlpatterns = [
    path("categories/", CategoryListView.as_view(), name="category-list"),
    path(
        "categories/<slug:slug>/",
        CategoryDetailView.as_view(),
        name="category-detail",
    ),

    path("brands/", BrandListView.as_view(), name="brand-list"),
    path(
        "brands/<slug:slug>/",
        BrandDetailView.as_view(),
        name="brand-detail",
    ),

    path("products/", ProductListView.as_view(), name="product-list"),
    path(
        "products/<slug:slug>/",
        ProductDetailView.as_view(),
        name="product-detail",
    ),
    path(
    "products/<slug:slug>/images/",
    ProductImageCreateView.as_view(),
    name="product-image-create",
),
    path(
    "product-images/<int:id>/",
    ProductImageDeleteView.as_view(),
    name="product-image-delete",
),
    path(
    "product-images/<int:id>/",
    ProductImageDeleteView.as_view(),
    name="product-image-delete",
),
    path(
    "product-images/<int:id>/primary/",
    ProductImagePrimaryView.as_view(),
    name="product-image-primary",
),
]