import { Request, Response, Router } from "express"

const router: Router = Router()

type TUser = {
    name: string,
    email: string
}

const users: TUser[] = []

router.post("/users", (req, res) => {
    const user: TUser = req.body
    users.push(user)
    console.log(users)
    res.json({
        message: "User successfully added"
    })
    
})

router.get("/hello", (req, res) => {
    res.json({
        msg: "Hello world!"
    })
})

router.get("/echo/:id", (req, res) => {
    res.json({
        id: req.params.id
    })

})

router.post("/sum", (req, res) => {
    const numbers = req.body.numbers

    res.json({
        sum: numbers.reduce((a:number, b:number) => a + b, 0)
    })
})

export default router