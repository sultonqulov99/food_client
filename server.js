const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 4545

const app = express()
app.use(express.static(path.join(__dirname,'client', 'public')))

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname,'client', 'index.html'))
})


app.listen(PORT,()=> console.log(`Server is run`))