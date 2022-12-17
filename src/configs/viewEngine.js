import { Express } from "express";

const configViewEngine = (app) => {
    app.set("vew engine", "ejs");
    app.set("views", "./src/views");
}

//để share các function giữa nhưng file khác nhau
export default configViewEngine;