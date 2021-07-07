const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
    //res.sendFile('index.html', { root: __dirname });
})

// app.get('*', (req, res) => {
//   res.sendFile('./index.html');
//   //res.sendFile('index.html', { root: __dirname });
// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})