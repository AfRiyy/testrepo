# Vizsgaremek
## FogadjÖrökbe App
Ez az applikáció menhelyi állatok adatbázisban való tárolását, és az örökbefogadási folyamat elindítását teszi lehetővé.


### Készítők
* [Lehoczki Patrícia](https://github.com/lehoczkipatricia)
* [Madarász Dávid](https://github.com/afriyy)


### Back-endhez szükséges parancsok

A back-endkénk szolgáló Laravel project az api/shelter könyvtárban található. Ha ebben a mappában állunk a következő parancsok kiadása szükséges a működéshez:

* composer install

Ezzel a paranccsal telepítjük a szükséges Laravel függőségeket.

A következő lépésben létre kell hoznunk egy shelter nevű adatbázist, hogy migrálni tudjunk. Az env fájlban találhatóak az adatbázis részletei, a project alapértelmezetten root felhasználó, jelszó nélkül próbál kommunikálni. Ha ezt változtatni szeretnék, itt tudjuk átírni. Fejlesztés közben a project XAMPP nevű program segítségével működött, az Apache szerver a 80 és 443-as porton, valamint a MySql szerver a 3306-os porton. Ha létrehoztuk az adatbázist, a következő parancsot kell kiadnunk:

* php artisan migrate

Ez a parancs létrehozza a szükséges táblákat. Beimportálhatunk egy minta adatbázist, amit az api/draft/shelter.sql fájl tartalmaz, vagy Seeder segítségével generálhatunk véletlenszerű adatokat (ezekhez nem fognak képek tartozni!).

Seeder parancsok, a szükséges táblával ellátva:

* php artisan db:seed --class=SpecieSeeder
* php artisan db:seed --class=BreedSeeder
* php artisan db:seed --class=ShelterSeeder
* php artisan db:seed --class=PetSeeder
* php artisan db:seed --class=AdoptionSeeder

Ha végeztünk az adatbázis adatokkal való feltöltésével, a következő paranccsal indíthatjuk el a REST API-t:

* php artisan serve

Ezzel a paranccsal alapértelmezetten a http://127.0.0.1:8000 címen indul el. Ha szerver sikeresen elindult, elkezdhetjük a Front-endhez szükséges lépéseket.

### Front-endhez szükséges parancsok

A Front-end fájlok a web/fogadj-orokbe mappában találhatóak. Ha ebben a mappában állunk a következő parancsot kell kiadnunk:

* npm install

Ezzel a paranccsal telepítjük a projekthez szükséges függőségeket. Ha ezek települtek, megy a REST API és az XAMPP, akkor a következő parancsot kell kiadnunk:

* ng serve --o

Ez a parancs alapértelmezetten a 4200-as porton indítja el az alkalmazást. 
