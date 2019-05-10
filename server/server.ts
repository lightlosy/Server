import Router from "../router/router";

let http = require("http");
let url = require("url");

export default class Server {
    private static _route: Router = new Router();
    private static _head: Object = {"Content-Type": "text/plain"};

    static createServer(){
        return new Promise((resolve, reject) => {
            let _self = this;
            let onRequest = (req: any, res: any) => {
                res.writeHead(200, _self._head);
                let params = url.parse(req.url, true).query;
                console.log(params.name)
                res.write("网站名:" + params.name);
                res.write("\n网站URL:" + params.url);
                res.end();
                resolve();
            }
            http.createServer(onRequest).listen(8888);
        });
    }
}