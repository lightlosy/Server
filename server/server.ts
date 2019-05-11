const Koa = require('koa');
const app = new Koa();

const bodyParser = require("../node_modules/body-parser");
import Router from "../router/router";


export default class Server {
    private static _route: Router = new Router();
    private static _head: Object = {"Content-Type": "text/plain"};

    static createServer(){
        app.use(bodyParser());
        app.use(this._route.init());
        app.use(this._route.allowedMethods());
        app.listen(3000);
        console.log('server is running at port 3000');
    }
}