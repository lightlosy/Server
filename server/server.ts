import Router from "../router/router";

let http = require("http");
let url = require("url");

export default class Server {
    private static _route: Router = new Router();

    static start(){
        let onRequest = (request: any, response: any) => {
            let pathName = url.parse(request.url).pathname;
            console.log("Request for" + pathName + "recv！");
    
            this._route.route(pathName);
    
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write("Hello");
            response.end();
        }
    
        http.createServer(onRequest).listen(8888);
        console.log("Server has started.");
    }
}