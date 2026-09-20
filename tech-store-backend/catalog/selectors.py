
from django.db.models import Count, Prefetch, Q
from .models import Category, Brand, Product, ProductImage


def category_get_list():
    return (
        Category.objects.filter(
            is_active=True,
            parent__isnull=True,
        )
        .prefetch_related(
            Prefetch(
                "children",
                queryset=Category.objects.filter(is_active=True).annotate(
                    product_count=Count(
                        "products",
                        filter=Q(
                            products__status=Product.Status.ACTIVE,
                        ),
                    )
                ),
            )
        )
    )


def category_get_by_slug(*, slug):
    return (
        Category.objects.filter(
            slug=slug,
            is_active=True,
        )
        .prefetch_related(
            "children",
        )
        .annotate(
            product_count=Count(
                "products",
                filter=Q(
                    products__status=Product.Status.ACTIVE,
                ),
            )
        )
        .first()
    )


def brand_get_list():
    return Brand.objects.filter(is_active=True)


def brand_get_by_slug(*, slug):
    return Brand.objects.filter(
        slug=slug,
        is_active=True,
    ).first()


def _product_based_queryset():
    return Product.objects.select_related(
        "category",
        "brand",
    ).prefetch_related(
        Prefetch(
            "images",
            queryset=ProductImage.objects.order_by(
                "-is_primary",
                "order",
            ),
        ),
        "attributes",
    )


def product_get_list():
    return _product_based_queryset().filter(
        status=Product.Status.ACTIVE,
    )
    
def product_admin_get_list():

    return _product_based_queryset()

def product_get_by_slug(*, slug):
    return _product_based_queryset().filter(
        slug=slug,
        status=Product.Status.ACTIVE,
    ).first()