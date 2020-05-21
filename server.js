const bodyparser = require('body-parser')
const express    = require('express')

const control = require('./controllers')

const app = express() //API Main object

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use(control.middleware) //Done

app.use('/web', express.static('public'))

//app.get('/news', control.eventStream) //Stream of Server-side events

app.get('/user/', control.getUsers)

//app.get('/user/:id', control.getUserData ) //Done

app.post('/user', control.updateUser ) //Done

app.get('/activities', control.getActivities ) //Done

app.post('/activities', control.createActivitie ) //Done

app.get('/activities/:id_act', control.getActivitieData ) //Done

app.get('/reservas/:id_act/:id_usr', control.getReserva ) //Done

//etc ...

const PORT = 8000
app.listen(PORT, _ => console.log(`Servidor web escuchando en puerto ${PORT}`))
