/**
 * @swagger
 * paths:
 *  /api/v1/user/getAll:
 *    get:
 *      summary: Tüm Kullanıcıları Getirir
 *      tags:
 *        - User
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *           description: Tüm List
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 */
exports.getAll = (req, res, next) => {
  res.json("Users");
};

exports.getById = (req, res, next) => {
  res.send("Users With Id");
};
