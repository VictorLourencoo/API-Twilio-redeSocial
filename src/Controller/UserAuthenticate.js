const User = require('../Model/User');
const bcrypt = require('bcrypt');
module.exports = {
  async Authenticate(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        return res.status(400).send({ error: 'email nao existe' });
      }

      const authe = await bcrypt.compare(password, user.password);
      if (!authe) {
        return res.status(400).send({ error: 'senha incorreta' });
      }

      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: 'Erro ao entrar' });
    }
  },
};
