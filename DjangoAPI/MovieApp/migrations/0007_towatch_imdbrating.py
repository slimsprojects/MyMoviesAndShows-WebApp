# Generated by Django 3.1.7 on 2021-03-03 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MovieApp', '0006_auto_20210303_0200'),
    ]

    operations = [
        migrations.AddField(
            model_name='towatch',
            name='IMDBRating',
            field=models.CharField(default=0, max_length=100),
            preserve_default=False,
        ),
    ]
