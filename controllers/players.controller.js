
const Players = require("../models/players.model")
const mongoose = require("mongoose")



exports.playersCntrl = async (req, res, next) => {

  try {
    const {playersName} = req.body;
    const {idGame} = req.params 
    const {_id:_owner} = req.payload

    const gameCreated = await Players.create ({playersName,_gameCreated:idGame})

    res.status(201).json(gameCreated)


} catch (error) {
    console.log("error",error)
    res.status(400).json({ messageError:"Error created" })
  
}

}

exports.playersEditCntrl = async (req, res, next) => {

  try {
    const {playersName} = req.body;
    const {idGame,idPlayers} = req.params 
    const {_id:_owner} = req.payload

    const gameCreated = await Players.findOneAndUpdate ({_id:idPlayers,_gameCreated:idGame},{playersName}, {new:true} )

    res.status(201).json(gameCreated)


} catch (error) {
    console.log("error",error)
    res.status(400).json({ messageError:"Error created" })

}

}