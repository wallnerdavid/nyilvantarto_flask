# nyilvantarto_flask
school assignment, watch out its gonna be dangerous!!!

# Telepítés:
Python3 környezet:
````
sudo apt install python3, sudo apt install python3-pip
````
Virtualenv környezet:
````
sudo pip install virtualenv
````
# Használat:
Clone-ozzuk ezt a repot:
````
git clone https://github.com/wallnerdavid/nyilvantarto_flask.git
````
Készítsünk virtualenv-et:
````
virtualenv -p python3 ~/virtualenv/nyilvantarto_flask
````
Aktiváljuk a virtualenv-et:
````
source ~/virtualenv/nyilvantarto_flask/bin/activate
````
Telepítsük a python csomagokat:
````
pip install -r requriments.txt
````
A clone-ozott nyilvantarto_flask mappán belül telepítsük a bower csomagokat:
````
bower install
````


# Futtatás
A nyilvantarto_flask mappán belül futtassuk az appot:
````
python app.py
````





