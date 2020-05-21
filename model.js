const BD = require('./database')


//User   {id_usr: Number, name: String , passwd: String}
//Activities   {id_act: Number, name: String , level: String}
//Reservas  {'id_act':{'id_usr': .., 'id_usr': ...}}

let Users = {}
let Activities = {}
let Reservas = {}

//Most of the methods will be asynch when using a true DB

exports.createUser = async (data) => {
    //check if data is valid
	if (!data.id_usr || !data.name || !data.passwd)
		return 'KO'

  if (Users[data.id_usr])
	    Users[data.id_usr] = Object.assign(Users[data.id_usr], data)
	else
		Users[data.id_usr] = data

	return 'OK'

}

exports.getUsers = () => Object.keys(Users).map(k => ({id_usr: Users[k].id_usr, name: Users[k].name, passwd: Users[k].passwd}) )

//exports.getUserData = id => Users[id] || null

exports.createActivitie = async (data) => {
	 //check if data is valid
	if (!data.id_act || !data.name || !data.level)
		return 'KO'

       if (Activities[data.id_act])
		await BD.createActivitie(data)
		Activities[data.id_act] = data

	return 'OK'
}

exports.getActivities = () => Object.keys(Activities).map(k => ({id_act: Activities[k].id_act, name: Activities[k].name, level: Activities[k].level}) )

exports.getActivitieData = activitiesId => Activities[activitiesId] || null

exports.getReserva = async (userId, activitiesId) => {

	if(!Activities[activitiesId] || !Users[userId])
		return 'KO'

	if(Reservas[activitiesId])
		Reservas[activitiesId] = Object.assign(Reservas[activitiesId], userId)
	else
		Reservas[activitiesId] = userId

	return 'OK'
}
