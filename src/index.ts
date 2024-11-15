import { Request, Response, Router } from "express"

const router: Router = Router()

type TUser = {
    name: string,
    email: string
}

let users: TUser[] = []

router.post("/users", (req: Request, res: Response) => {
    let user: TUser = req.body
    users.push(user)
    console.log(users)
    res.json({
        message: "User successfully added"
    })
    
})

router.get("/users", (req: Request, res: Response) => {
    res.status(201).json({
        users: users
    })
    
})

router.get("/hello", (req: Request, res: Response) => {
    res.json({
        msg: "Hello world!"
    })
})

router.get("/echo/:id", (req: Request, res: Response) => {
    res.json({
        id: req.params.id
    })

})

router.post("/sum", (req: Request, res: Response) => {
    const numbers = req.body.numbers

    res.json({
        sum: numbers.reduce((a:number, b:number) => a + b, 0)
    })
})

export default router