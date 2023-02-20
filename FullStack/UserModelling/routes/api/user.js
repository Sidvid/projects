const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../../models/user");
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Plese enter a valid email address").isEmail(),
    check("password"),
  ],
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.json({ error: errors.array() });
    }
    try {
      const { name, email, password } = request.body;

      let user = await User.findOne({ email });

      if (user) {
        return response.json({ error: [{ message: "User already exists" }] });
      }

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });
      user = new User({
        name,
        email,
        password,
        avatar,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtToken"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) {
            response.send({ error: [err] });
          } else {
            response.send({ token });
            response.send("user saved");
          }
        }
      );
    } catch (error) {
      response.status(500).json({ message: error });
    }
  }
);
module.exports = router;
