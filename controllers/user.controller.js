const User = require("../models/User.model")
const mongoose = require("mongoose")
exports.editUserCtrl = async(req,res,next)=>{
    try {
        const {_id} = req.payload

        const {password,email,status,role ,...restUser } = req.body
        const updatedUser = await User.findByIdAndUpdate(_id,restUser,{new:true})

        res.status(200).json(updatedUser) // res.data = {....}
        // res.status(200).json({updatedUser}) => res.data.updateUser = {...}
        // res.status(200).json({ result: updatedUser}) => res.data.result = {...}

    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return res.status(400).json({ messageError: error.message });
          }
          if (error.code === 11000) {
            return res.status(400).json({
              messageError: "El correo electronico ya esta en uso",
            });
          }
          return res.status(500).json({ messageError: error.message });
        }
}