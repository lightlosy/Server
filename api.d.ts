declare namespace Module {
    namespace types {
        interface File {
            flag: 'r' | "r+" | "rs" | "rs+" | "w" | "wx" | "w+" | "wx+" | "a" | " ax" | "a+" | "ax+";
        }
    }
}