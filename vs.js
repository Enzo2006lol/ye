import {writeFile} from "node:fs/promises"

writeFile("demo.txt", "fezofizeofze", {flag: "a"})