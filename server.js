const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 4000

const app = express()
app.use(express.static(path.join(__dirname, 'public')))

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})


app.listen(PORT,()=> console.log(`Server is run`))