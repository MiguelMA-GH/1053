const schema = require('./schema')
const mng = require('mongoose')

const my_conn = "mongodb+srv://al269436:sandalia1994@cluster0-vkmlb.mongodb.net/test?retryWrites=true&w=majority"

mng.connect(my_conn)

var UserModel = mng.model('user', new mng.Schema(schema.user))
var ActivitiesModel = mng.model('activities', new mng.Schema(schema.activities))

exports.createActivitie = (data) => {

    var data = new ActivitiesModel ({
	"@id_act": data.id,
	name : data.name,
	level : data.level,
    })


    data.save()

}



//User   {id_usr: Number, name: String , passwd: String}
//Activities   {id_act: Number, name: String , level: String}
//Reservas  {'id_act':{'id_usr': .., 'id_usr': ...}}
