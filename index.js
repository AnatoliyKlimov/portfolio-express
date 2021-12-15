import express from 'express'

const port = 8000
const app = express();

app.get('/hello', (req, res) => {
    res.send('Ready')
})

app.listen(port, () => {
     console.log(`Запущен на http://localhost:${port}`)
})