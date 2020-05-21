exports.user = {
	"@id_usr": Number,
	name:	String,
	passwd: String,
}

exports.activities = {
	"@id_act": Number,
	name: String,
	level:	String,

}

exports.reservas = {
	"@id_act": ["@id_usr"],

}



//User   {id_usr: Number, name: String , passwd: String}
//Activities   {id_act: Number, name: String , level: String}
//Reservas  {'id_act':{'id_usr': .., 'id_usr': ...}}
