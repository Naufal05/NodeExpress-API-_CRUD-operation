import express from "express";
import { createUsers } from "../controllers/users.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router(); //initialise router

let users = [];

//all rooutes here are startng with /users
router.get("/", (req, res) => {
  res.send(users);
});

//send data to the server/ or adding users to database
router.post("/", createUsers);

//` /users/2 => req.params (id:2)

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

//delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);

  res.send(`USer with the Id ${id} deleted from the database`);
});

//update
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body; //what can we receive

  const user = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }
  res.send(`User with the ${id} has been updated`);
});

export default router;
