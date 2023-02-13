export const createUsers = (req, res) => {
  const user = req.body; //req.body

  const userId = uuidv4();

  const userWithId = { ...user, id: userId };

  users.push(userWithId);
  res.send(`User with the name ${user.firstName} added to the database`);
};
