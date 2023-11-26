import { Router } from 'express'
import { router as studentRoute } from './externel/student.route'
import { configs } from '../configs'

export const router: Router = Router()

router.use(`${configs.app.prefix}/students`, studentRoute)
