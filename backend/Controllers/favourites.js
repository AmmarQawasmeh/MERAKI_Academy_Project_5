const express = require("express");
const { pool } = require("../models/db");


const addFavourite = (req, res) => {
  const userId = req.token.userId;
  const { courseId } = req.body;

  const query = `
    INSERT INTO favourites (user_id, course_id)
    VALUES ($1, $2)
    RETURNING *
  `;

  pool.query(query, [userId, courseId])
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      res.status(409).json({ message: "Already in favourites" });
    });
};


const removeFavourite = (req, res) => {
  const userId = req.token.userId;
  const { courseId } = req.params;

  const query = `
    DELETE FROM favourites
    WHERE user_id = $1 AND course_id = $2
  `;

  pool.query(query, [userId, courseId])
    .then((result) => {
      if (result.rowCount === 0) {
        return res.status(404).json({
          message: "Favourite not found"
        });
      }

      res.status(200).json({
        message: "Removed from favourites"
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        message: "Server error while removing favourite"
      });
    });
};



const getUserFavourites = (req, res) => {
  const userId = req.token.userId;

  const query = `
    SELECT c.*
    FROM courses c
    JOIN favourites f ON c.id = f.course_id
    WHERE f.user_id = $1
  `;

  pool.query(query, [userId])
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        message: "Server error while fetching favourites"
      });
    });
};




module.exports={
    addFavourite,
    removeFavourite,
    getUserFavourites
}