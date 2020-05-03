const User = require('../Model/User');
const Post = require('../Model/Post');
const Addresses = require('../Model/Addresses');

const bcrypt = require('bcrypt');
module.exports = {
  async create(req, res) {
    try {
      const { name, senha, email, addresses } = req.body;

      const password = await bcrypt.hash(senha, 10);

      const check = await User.findOne({ email });
      if (check) {
        return res.status(400).send({ error: 'Email ja existe' });
      }

      const user = await User.create({ name, email, password });

      await Promise.all(
        addresses.map(async (address) => {
          const userAddress = new Addresses({ ...address, user: user._id });
          await userAddress.save();
          user.addresses.push(userAddress);
        })
      );
      await user.save();
      user.password = undefined;

      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: 'Erro ao criar User' });
    }
  },
};
