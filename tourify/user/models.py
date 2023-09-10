from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django.urls import reverse
from django.utils.text import slugify
from django.utils.translation import gettext_lazy as _


class CustomUserManager(BaseUserManager):

    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_('Email Address'), max_length=50, unique=True)
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, default="", editable=False)
    email_is_verified = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    objects = CustomUserManager()

    def __str__(self):
        return self.email

    def get_absolute_url(self):
        kwargs = {
            'slug': self.slug,
        }
        return reverse('user', kwargs=kwargs)

    def save(self, *args, **kwargs):
        if not self.id:
            slug = slugify(self.name, allow_unicode=True)
            user = CustomUser.objects.filter(slug=slug)
            if user.exists():
                number = user.count()
                value = f'{slug}-{number}'
                self.slug = value
            else:
                self.slug = slug
        super().save(*args, **kwargs)