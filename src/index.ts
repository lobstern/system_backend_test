import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import {classesRouter} from './routes/classes-router'

//Create Express app
const app = express()
const port = process.env.PORT || 80



const parserMiddleware = bodyParser()
app.use(parserMiddleware)

app.get('/', (req: Request, res: Response) => {
    let helloM = "Hello Bobus!"
  res.send(helloM)
  console.log(req.rawHeaders)
})

app.use('/classes', classesRouter)

// start app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})