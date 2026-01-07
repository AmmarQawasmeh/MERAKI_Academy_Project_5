const express = require("express");
const { addFavourite, removeFavourite, getUserFavourites } = require("../Controllers/favourites");
const authentication = require("../middleware/authentication");


const favouritesRouter = express.Router();


favouritesRouter.post("/",authentication,addFavourite)
favouritesRouter.get("/",authentication,getUserFavourites)
favouritesRouter.delete("/:courseId",authentication, removeFavourite)




module.exports = favouritesRouter