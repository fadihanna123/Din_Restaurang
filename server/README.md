## Din Restaurang Server

Via denna Rest webbtjänst kan man ha åtkomst till json data i själva webbsidan. Här byggde jag Din restaurang databas och gav tillgång till json data via en länk där man kan surfa, lägga till, ändra och data eller använda dessa funktioner i Postman. <br />
HTTP-metoder som kan användas: GET, POST, DELETE, PUT.

**Mappstruktur**<br />
src/
src/api/ <br />
src/api/index.ts <br />
src/api/routes.ts <br />
src/models/ <br />
src/models/index.ts <br />
src/models/model.ts <br />
src/typings/ <br />
src/typings/index.ts <br />
.gitignore <br />
src/server.ts <br />
package.json <br />
README.md <br />
tsconfig.json <br />
yarn.lock <br />

**Installation:**<br />
Du behöver skapa "restaurangdata" tabellen. <br />
Du behöver skapa dessa kolumner i denna tabell :<br />
**restaurangdata**<br />
`id` Number, <br />
`title` String, <br />
`sorts` String, <br />
`price` Number, <br />
`image` String, <br />
`included` String <br />

Du behöver redigera anslutningsuppgifter som finns i filen .env rad 13 i variablen DATABASE_URL från localhost till din egen.<br />
**Exempel efter redigering:**<br />
DATABASE_URL="postgresql://local:123@localhost:5432/xxx"
<br />

**Programmeringsspråk som används:**<br />
Typescript, Javascript och Node JS<br />
**Rmaverk/Tekniker som används:**<br />
JSON<br />

**Exempel för att visa data:**<br />
http://localhost:5000/food <br />
Den visar alla data.<br />
http://localhost:5000/food/[id] <br />
Den visar alla data beroende på den skickade id.<br />
**Exempel för att lägga till data:**<br />
http://localhost:5000/food/add <br />
Observera att du måste lägga i body vissa data för att de ska läggas till. <br />
**Exempel för att uppdatera data:**<br />
http://localhost:5000/food/[id]<br />
Du behöver skicka en id och bodyuppgifter för att resultatet ska lyckas.<br />
**Exempel för att radera data:**<br />
http://localhost:5000/food/[id] <br />
Den raderar data beroende på den skickade id. <br />
