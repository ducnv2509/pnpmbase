import { NextFunction, Request, Response, Router } from 'express'
import { CreateStudentReqBody } from '../../interfaces'
import { createStudent } from '../../controller'

export const router: Router = Router()

router.post('/', async (req: Request, _: Response, next: NextFunction) => {
    const body = req.body as CreateStudentReqBody
    const result = await createStudent({
        ...body
    })
    next(result)
})
