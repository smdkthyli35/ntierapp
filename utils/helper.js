const md5 = require("md5");

const hashString = (str) => {
  return md5(str);
};

module.exports = {
  hashString: hashString,
};
