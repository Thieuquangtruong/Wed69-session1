const express = require("express")
const app = express()
const PORT = 8000
const a = 20

app.listen(PORT, () => {
    console.log("Sever is listening on http://localhost:"+PORT)
})