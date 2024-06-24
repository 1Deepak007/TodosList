===============> POSTGRE RESTAPI <=================

TodosList\backend>  npm init ,  npm i express pg cors nodemon
create file  ->  database.sql (for schemas of table)
open pgadmin4 from pc
connect to server (from database section from vs code left side bar)
run queries from database.sql directly

db connection -> create db.js
CREATE ROUTES : in server.js    (rest api)

--> once all apis of server.js are working create frontend & connect with backend

TodosList\frontend> npx create-react-app frontend
create frontend code, UI and Posting data to server


RUN CODE :
TodosList\backend> nodemon server.js
TodosList\frontend> npm start