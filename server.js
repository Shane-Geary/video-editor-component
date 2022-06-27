const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/express_backend', (req, res) => {
    res.send({express: 'Express backend is connected to React'})
})

app.use((req, res, next) => {
    res.header("Cross-Origin-Embedder-Policy", "require-corp")
    res.header("Cross-Origin-Opener-Policy", "same-origin")
    console.log('Headers Set')
    next()
  })

//   app.use(express.static())