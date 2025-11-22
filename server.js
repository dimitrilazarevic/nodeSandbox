const express = require('express')
const app = express()
app.use(express.json())
const port = 3000
 
app.get('/', (req, res) => {
    res.send("Mes hommages.")
})

app.listen(port, () => console.log("Connecté au port 3000 capitaine !"));
