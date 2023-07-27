### Project manager

## Feladathoz

A céges projekteket megjelenítő oldal kialakítása:

Kártyás megjelenítés, amin látszik a projekt neve, leirása, és a kezdőbetűiből
generált kép (Erre a célra használd valamelyik online image placeholder
szolgáltatást).

- Én itt a https://betterplaceholder.com/ használtam

A listázás async módon történjen, ami a backend hívást szimulálja (Ténylegesen
nincs backend hívás, a lényeg, az aszinkronitás).

Legyen egy Új projekt gomb a felületen, amelyre kattintva a Projekt
hozzáadása felület-re jutunk.

Projekt hozzáadása felület kialakítása:

A felületnek wizard alapú megjelenítése legyen.
A wizard három oldalból álljon:
Első oldal: Itt legyen lehetőségünk megadni a projekt nevét és leirását. A
név egy kötelező mező, ami max 255 karaktert tartalmazhat. A leírás nem
kötelező, viszont amennyiben van benne tartalom, úgy minium 50
karakter és maximum 500 karakter hosszú lehet.

- Itt jeleztem is a usernek, hogy hány karakter van még hátra és segítem azzal, hogy piros a számláló, amíg nem validak a bevitt adatok

Második oldal: Itt legyen lehetőségünk megadni az adott projekten
dolgozó kollégák neveit és a projektben betöltött pozícióikat.

- Gondoltam itt meghatározom, hogy hány hozzáadható ember lehet, de ezt is jelzem a gombon egy visszaszámlálóval

Harmadik oldal: Itt legyen lehetőségünk felsorolni a projekthez
kapcsolódó linkeket. Link alatt érthetünk egy drive-os dokumentációt vagy
akár a különböző rendszerek elérését.

- Regexet használtam, hogy elkerüljem azt, hogy link helyett valami teljesen más adat kerüljön be

Legyen valamilyen fajta progress megjelenítés, hogy éppen hol tartunk a
létrehozásban

- Szimpla Bootstrapet használtam itt, kicsit a környezethez igazítva

Új projekt hozzáadása után a listázó felület automatikusan frissüljön.

Extra feladat:
Egy céges projekt részletes információinak a megjelenítése.

- A "More info" gombra kattintva mindegyik projectnek meg lehet nézni részletesen az adatait

A listázó oldalon tudjunk szűrni a céges projektekre keresési kifejezés alapján.

- Én ezt beépítettem a "csempés" elrendezésű oldalba, ami egy külön komponens, független attól, hogy milyen a projektek elrendezése, de ha kell, akkor csinálhatok egy gombot a ProjectList-ben, hogy lehessen váltogatni a nézetek között

## Kiegészítés

Az oldal teljesen responsive. Elkészítéséehez Bootstrapet használtam, de csak a CDN-t. Ha szükséges átírhatom a projectet a react-bootstrapel.

Nincs buildelve az oldal, tehát a repo letöltése után csak ki kell adni az npm i parancsot és utána megtekinthető az npm run start paranccsal. Ha szükséges, buildelhetem Firebase-ra akár.

## Fontos!

Ezt a részt:

"A listázás async módon történjen, ami a backend hívást szimulálja (Ténylegesen
nincs backend hívás, a lényeg, az aszinkronitás)."

nem teljesne értettem.

A ProjectListben egy setTimeoutal próbáltam aszinkronitást belevinni, de nem biztos, hogy jól értelmeztem a dolgokat.

Ha szeretnétek gyorsan összerakhatok egy NodeJS API-t, hozzá Mongo Atalasban csinálok egy adatbázist, ha nem jó ez a setTimeout-os megoldás.
