# Generated by Django 3.1.7 on 2021-03-03 00:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('MovieApp', '0003_auto_20210301_2358'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='towatch',
            name='PhotoFileName',
        ),
    ]
