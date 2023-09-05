const fs = require("node:fs/promises");

class UserModel {
  constructor(id, email, password) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  async connect() {
    const file = await fs.readFile("./database/user.json", {
      encoding: "utf8",
    });
    return eval(file);
  }

  async findByEmail(inEmail) {
    try {
      const userArr = await this.connect();
      const userWithEmail = userArr.find(user => user.email === inEmail);
      return userWithEmail;
    } catch (error) {
      console.log(error);
    }
  }

  async save(body) {
    try {
      const data = await this.connect();
      data.push(body);
      await fs.writeFile("./database/user.json", JSON.stringify(data, null, 2));
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserModel;
