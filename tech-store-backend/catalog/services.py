from django.db import transaction

from .models import Product


@transaction.atomic
def product_create(validated_data):

    product = Product(
        **validated_data
    )

    product.save()

    return product


@transaction.atomic
def product_update(*, product, validated_data):
    for field, value in validated_data.items():
        setattr(product, field, value)

    product.save()

    return product