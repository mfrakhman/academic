const UserModel = require("../model/user.model");

class UserService {
  constructor() {
    this.userModel = new UserModel();
  }

  async findByEmail(inEmail) {
    const email = await this.userModel.findByEmail(inEmail);
  }
}

module.exports = UserService;
