import express from "express"
import authRoutes from "./routes/authRouter.js"

const app = express()
const port = process.env.PORT || 8000

app.use('/api', authRoutes)

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})