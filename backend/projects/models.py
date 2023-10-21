from django.db import models
from .upload_to_dropbox import upload_to_dropbox
import uuid

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    image = models.ImageField(upload_to='ruta/donde/subir', default='https://drive.google.com/file/d/1edRPGsRoz5yrgRSzelmtBdpR8Fs9wA-3/view?usp=share_link')

    def __str__(self):
        return f"Blog: {self.title}"

class Project(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    image = models.ImageField(upload_to='https://www.dropbox.com/home/Apps/Web%20Aimas%20Studio', default='https://www.dropbox.com/scl/fi/wu1xid6dtow5gtfxd3dn1/IDENTIDAD-BISNE-10.png?rlkey=1e41wybiozla8f3tenw0sbyip&dl=0')
    type = models.CharField(
        max_length=3,
        choices=[
            ('OP1', '-IMPLEMENTADO-'),
            ('OP2', '-PROXIMO A IMPLEMENTARSE-'),
            ('OP3', '-PROPUESTA-')],
        default='OP2',)
    site = models.BooleanField(default=False, help_text="Tiene sitio web")
    url = models.URLField(max_length=200, blank=True)
    
    def save(self, *args, **kwargs):
        unique_filename = str(uuid.uuid4()) + '.' + self.image.name.split('.')[-1]
        self.image = upload_to_dropbox('/Apps/Web Aimas Studio/' + unique_filename, self.image)
        super(Project, self).save(*args, **kwargs)
    
    def __str__(self):
        return f"Blog: {self.title}"