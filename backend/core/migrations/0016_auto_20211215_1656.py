# Generated by Django 3.0.8 on 2021-12-15 16:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0015_contact'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contact',
            old_name='memmber',
            new_name='member',
        ),
    ]
