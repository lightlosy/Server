import Server from "../server/server";
import File from "../file/file";
import { Path } from "../path/path";

// Server.start();
// File.writeFile(Path.User, "aa").then(() => {
//     File.readFileAsync(Path.User);
// });
Server.createServer();
console.log("当前目录:", __dirname);
console.log("当前版本:", process.version);