

git beallitasa:
# git telepítése:
````
apt install git
````
# git alap beállítása:
````
git config --global user.email "sajat@eamil.com"
git config --global user.name "sajatuser"
````
#git push config:
````
git config --global push.default matching
````
.gitignore file tartalmazza azokat a mappákat vagy fileokat amiker
a gint nem kell hogy figyelembe vegyen

# git használata
első lépés hogy csinálunk egy üres repository-t vagy clone-ozunk egy meglévőt.
új üres pero készítése:
````
git init
````
Meglevo clone-ozása:
````
git clone /path/to/repo
````
munka után a változásokat az alábbi parancsal tudjuk megnézni:
````
git status
````
Először hozzáadjuk a coomithoz azokat a fileokat amiket fel szeretnénk push-olni: pl a gitignore file-t:

````
    git add .gitignore
````
pl ha az egesz mappat hooza akarjuk adni tehat minden fajlt,
ehhez benne kell lennunk a mappaban amelyikben a repository találhato:
````
    git add .
````
Commit-oljuk azokat a file-okat melyeket hozzaadtuk az add parancsal:
````
git commit -m "commit üzenetem"
````
A commitot push-olni kell, ekkkor adódik hozzá a távoli repo-hoz
````
git push
````























