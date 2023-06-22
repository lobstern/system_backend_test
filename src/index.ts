import express, {Request, Response} from 'express'
const app = express()
const port = process.env.PORT || 80

const classes =[{id: 1, title: 'uniqueland'}, {id: 2, title: 'starland'}]

app.get('/', (req: Request, res: Response) => {
    let helloM = "Hello Bobus!"
  res.send(helloM)
  console.log(req.rawHeaders[11])
})

app.get('/classes', (req: Request, res: Response) => {
  if (req.query.title) {
    let searchString = req.query.title.toString()
    res.send(classes.filter(c => c.title.indexOf(searchString) > -1))
  } else {
    res.send(classes)
  }
})

app.get('/classes/:id', (req: Request, res: Response) => {
  let winlandClassId = classes.find(c => c.id === +req.params.id)
  if (winlandClassId) {
    res.send(winlandClassId)
  } else {
    res.send(404)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})