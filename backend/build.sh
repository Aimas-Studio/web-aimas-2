#!/bin/bash

echo "Building project xd ..."
python pip install -r requirements.txt

echo "Make migrations ..."
python manage.py makemigrations --noinput
python manage.py migrate --noinput

echo "Collect static ... "
python3.9 manage.py collectstatic --noinput --clear
