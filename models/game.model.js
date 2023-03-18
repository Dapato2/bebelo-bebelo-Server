const { Schema, model } = require("mongoose");

const gameCreatedSchema = new Schema(
  { 
    gameName:{
type: String,
require:[true],
    },
    questions:{
        type: [String],
    },
    _owner:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
  },    
  {
    timestamps: true,
  }
);

const GameCreated = model("GameCreated", gameCreatedSchema);

module.exports = GameCreated;