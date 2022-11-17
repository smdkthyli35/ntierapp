const User = require("../../models/User/User");
const utils = require("../../utils/utils");
const userDal = require("../../dal/User/userDal");

const userService = {
  async create(request) {
    const { name, surname, age, email, gender, password, activity_areas } = request.body;

    const user = new User({
      name,
      surname,
      full_name: `${name} ${surname}`,
      age,
      email,
      password: utils.helper.hashString(password),
      gender,
      profile_picture: "",
      activity_areas,
      blogs: [],
    });

    console.log("user", user);
    const data = await userDal.create(user);
    console.log("data", data);

    return data;
  },
};

module.exports = userService;
