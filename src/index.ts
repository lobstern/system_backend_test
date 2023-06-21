import express, {Request, Response} from 'express'
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req: Request, res: Response) => {
    let helloM = "Hello Bob"
  res.send(helloM)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})