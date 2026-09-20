from django.contrib import admin

from django.contrib import admin

from .models import (
    Category,
    Brand,
    Product,
    ProductImage,
    ProductAttribute,
)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["name", "parent", "is_active", "created_at"]
    list_filter = ["is_active"]
    search_fields = ["name"]


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ["name", "is_active", "created_at"]
    list_filter = ["is_active"]
    search_fields = ["name"]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = [
        "name",
        "brand",
        "category",
        "price",
        "stock",
        "status",
        "is_featured",
    ]
    list_filter = ["status", "is_featured", "category", "brand"]
    search_fields = ["name", "sku"]


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ["product", "is_primary", "order"]
    list_filter = ["is_primary"]


@admin.register(ProductAttribute)
class ProductAttributeAdmin(admin.ModelAdmin):
    list_display = ["product", "key", "value"]
    search_fields = ["key", "value"]
