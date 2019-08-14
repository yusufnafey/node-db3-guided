const db = require("../data/db-config");

module.exports = {
  getUsers,
  getById,
  getPosts,
  addUser
};

function getUsers() {
  return db("users");
}

function getById(id) {
  return db("users").where({ id });
}

function getPosts(id) {
  return db("posts")
    .innerJoin("users as u", "p.user_id", "u.id")
    .select("p.id", "p.contents", "u.username as postedBy")
    .where({ user_id: id });
}

function addUser(user) {
  return db("posts").insert(user);
}

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
}
