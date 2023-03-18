const router = require("express").Router();
const { isAuthenticated } = require("../middleware/auth")
const {playersCntrl,playersEditCntrl} = require("../controllers/players.controller")




router.post("/add-players/:idGame",isAuthenticated,playersCntrl)

router.patch("/edit-players/:idGame/:idPlayers",isAuthenticated,playersEditCntrl)

module.exports = router;    