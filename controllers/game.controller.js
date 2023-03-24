const GameCreated = require("../models/game.model")
const mongoose = require("mongoose")
const Players = require("../models/players.model")



exports.gameCreateCntrl = async (req, res, next) => {
    try {
        const {gameName,questions} = req.body;
        const {_id:_owner} = req.payload


        
        if(gameName === ""  || questions === "" ){
         return    res.status(400).json({message:"Favor de mandar datos para crear juego"});
        }
        const gameCreated = await GameCreated.create ({gameName,questions,_owner})

        res.status(201).json(gameCreated)
    } catch (error) {
        console.log("error",error)
        res.status(400).json({ messageError:"Error created" })
      
    }
}


exports.listOfCreatedCntrl  = async (req, res, next) => {
    try {
        const {_id:_owner} = req.payload

       const gamesList = await GameCreated.find({_owner}) // --> []
       res.status(200).json(gamesList)
   } catch (error) {
     next(error)
   } 


}

exports.gameDefault = async (req, res, next) => {
    try {
        const {id} = req.params;

        const {gameName,questions,_id} = await GameCreated.findById (id)

        const {playersName,_id:idPlayers} = await Players.findOne({_gameCreated:id})
        res.status(201).json({gameName,questions,_id,playersName,idPlayers})

    } catch (error) {
        console.log("error",error)
        res.status(400).json({ messageError:"Error created" })
      
    }
}