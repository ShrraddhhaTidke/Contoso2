const express = require("express")
const app=express()
app.get("/",(req,resp) => {
    console.log("Here")
    resp.send("Welcom to Contoso")
})

app.listen(3000)
console.log("server is running on port 3000")