import express from "express";

const configViewEngine = (app) => {
    app.use(express.static('./src/public'));
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
}

//để share các function giữa nhưng file khác nhau
export default configViewEngine;