from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    username = models.CharField(max_length=64)
    firstname = models.CharField(max_length=64)
    lastname = models.CharField(max_length=64)
    email = models.EmailField(unique=True)
    REQUIRED_FIELDS = ['username', 'firstname', 'lastname']
    USERNAME_FIELD = 'email'
    #
    # def __str__(self):
    #     return self.email
