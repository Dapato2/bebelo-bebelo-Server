const { Schema, model } = require("mongoose");

const playersSchema = new Schema(
  { 
    playersName:{
type:[String],
require:[true,"At least 2 names required"],
min: 2,
    },
    _gameCreated:{
        type: Schema.Types.ObjectId,
        ref: 'GameCreated'
    }
  },    
  {
    timestamps: true,
  }
);

const Players = model("Players", playersSchema);

module.exports = Players;