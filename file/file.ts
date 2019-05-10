let fs = require("fs");

export default class File {
    /** 异步获取 */
    static readFileAsync(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.readFile(name, (err: any, data: any) => {
                if(err){
                    reject(err);
                    return console.error(err);
                }
                console.log('异步读取', data.toString());
                resolve(data);
            });
        });
    }

    /** 同步读取 */
    static readFileSync(name: string){
        return fs.readFileSync(name);
    }

    /** 写入文件 */
    static writeFile(path: string, text: string): Promise<any>{
        return new Promise((resolve, reject) => {
            fs.writeFile(path, text, (err: any) => {
                if(err){
                    reject();
                    return console.error(err);
                }
                resolve();
                console.log("数据写入成功!", path);
                console.log("----------------");
            });
        });
    }

    /** 打开文件 */
    static open(path: string, flags: string, mode: number, callback: Function){
        fs.open(path, flags, (err: any, fd: any) => {
            if(err){
                return console.error(err);
            }
            callback(fd);
        });
    }

    static checkFileType(path: string): Promise<any> {
        return new Promise(() => {
            fs.stat(path, (err: any, stats: any) => {
                if(err){
                    return console.error(err);
                }
                console.log(stats);
                console.log("读取文件信息成功!");
                console.log("isFile?" + stats.isFile());
                console.log("isDirectory?" + stats.isDirectory());
            });
        });
    }
}