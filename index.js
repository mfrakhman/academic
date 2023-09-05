const UserModel = require("./model/user.model");

async function main() {
  const user = new UserModel();
  console.log(await user.findByEmail("email@email.com"));
}

main();
