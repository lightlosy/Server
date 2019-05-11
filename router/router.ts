import User from "../controller/user";

const route = require("../node_modules/koa-router");
export default class Router {
    private _router = new route();
    init(){
        this._router.routes();
        console.log("about to route a request for");
        this._router.post('/user/login', User.login);
        this._router.get('/user/profile', User.profile);
    }

    allowedMethods(){
        this._router.allowedMethods();
    }
}