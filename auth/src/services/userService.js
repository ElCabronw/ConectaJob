const db = require("../helpers/db");
const User = db.User;
const Role = require("../helpers/role");

async function getAllUsers(currentUser){
    console.log(currentUser);   
    if (currentUser.role !== Role.Admin) {
        throw 'Only Admin is Authorized!';
    }
    const users = await User.find();
    return users;
}
async function getUserById(userId){
        const user = await User.findById(userId);
        return user;
}

async function updateUser(id, userParam) {
    console.log(id, userParam);
    const user = await User.findById(id);
    console.log(user.email, userParam.email);
    
    if (!user) throw "User not found.";
    if (
      user.email !== userParam.email &&
      (await User.findOne({ email: userParam.email }))
    ) {
      throw `User with email ${userParam.email} already exist.`;
    }
    if (userParam.password) {
      userParam.password = bcrypt.hashSync(userParam.password, 10);
    }
    user.updated_at = Date.now();
    Object.assign(user, userParam);
    await user.save();
  }

  async function deleteUser(id) {
    await User.findByIdAndDelete(id);
  }

module.exports = { getAllUsers, getUserById, updateUser, deleteUser};