import {writeFile} from "node:fs/promises"
import {createServer} from "node:http"

const server = createServer((request, reponse) => {
    reponse.write("hello world")
    reponse.end()
})
server.listen("8888")
