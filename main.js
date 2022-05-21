const express = require('express')
const overrides = require("./overrides.json");

const app = express()
const port = 3000

app.use(express.static('public'));
app.get("/", (req, res) => {
    res.sendFile('index.html', {root: '.'})
})

app.get('/search', (req, res) => {
    let query = req.query.q.toLowerCase()
    let keys = Object.keys(overrides)
    keys.forEach((key) => {
        if (query === key) return res.sendFile(overrides[key], {root: '.'})
    })

})

app.listen(process.env.port || port, () => {
    console.log(`Example app listening on port ${port}`)
})