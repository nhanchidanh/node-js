import express from "express";
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);//getHomePage kh co () thì mặc định những tham số mà express có sẽ truyền vào

    app.get('/about', (req, res) =>{
        res.send('toi la Danh')
    })

    //web bắt đầu bằng dấu /
    return app.use('/', router)
}

// module.export = initWebRouter;
export default initWebRouter;
