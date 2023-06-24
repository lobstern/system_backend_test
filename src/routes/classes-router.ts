import {Request, Response, Router} from "express"


const classes = [{ id: 1, title: 'uniqueland' }, { id: 2, title: 'starland' }];

export const classesRouter = Router()

classesRouter.get('/', (req: Request, res: Response) => {
    if (req.query.title) {
        let searchString = req.query.title.toString();
        res.send(classes.filter(c => c.title.indexOf(searchString) > -1));
    }
    else {
        res.send(classes);
    }
});
classesRouter.get('/:id', (req: Request, res: Response) => {
    let winlandClassId = classes.find(c => c.id === +req.params.id);
    if (winlandClassId) {
        res.send(winlandClassId);
    }
    else {
        res.send(404);
    }
});
classesRouter.delete('/:id', (req: Request, res: Response) => {
    for (let i = 0; i < classes.length; i++) {
        if (classes[i].id === +req.params.id) {
            classes.splice(i, 1);
            res.send(classes);
            return;
        }
        else {
            res.send(404);
        }
    }
});
classesRouter.post('/', (req: Request, res: Response) => {
    const newClass = {
        id: classes.length + 1,
        title: req.body.title
    };
    classes.push(newClass);
    res.status(201).send(classes);
});
classesRouter.put('/:id', (req: Request, res: Response) => {
    let winlandClass = classes.find(c => c.id === +req.params.id);
    if (winlandClass) {
        winlandClass.title = req.body.title;
        res.send(classes);
    }
    else {
        res.send(404);
    }
});