import Server from "../server/server";
import File from "../file/file";
import { Path } from "../path/path";

// Server.start();
File.writeFile(Path.User, "aa").then(() => {
    File.readFileAsync(Path.User);
});