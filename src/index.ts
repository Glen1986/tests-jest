// import { app } from './app'
// const port = '5000'
// app.listen(5000, () => {
  // console.log(`Server on \nhttp://localhost:${port}`)
// })
//
import 'reflect-metadata'
import { app } from './app'


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server on port ${process.env.PORT} \nhttp://localhost:${process.env.PORT}`)
})
