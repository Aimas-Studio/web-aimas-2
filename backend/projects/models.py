from django.db import models

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    image = models.ImageField(upload_to='Blogs')

    def __str__(self):
        return f"Blog: {self.title}"

class Project(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    image = models.ImageField(upload_to='Project', )
    type = models.CharField(
        max_length=3,
        choices=[
            ('OP1', '-IMPLEMENTADO-'),
            ('OP2', '-PROXIMO A IMPLEMENTARSE-'),
            ('OP3', '-PROPUESTA-')],
        default='OP2',)
    site = models.BooleanField(default=False, help_text="Tiene sitio web")
    url = models.URLField(max_length=200, blank=True)
    
    def __str__(self):
        return f"Blog: {self.title}"