# Generated by Django 4.0.4 on 2022-12-04 00:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0004_customer_product_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customer',
            old_name='product_id',
            new_name='product',
        ),
    ]
