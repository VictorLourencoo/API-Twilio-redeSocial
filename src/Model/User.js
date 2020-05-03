const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
    //ao fazer um select nao retornar a senha
    select: false,
  },
  addresses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
  ],
});
//Criptografia da senha
/*UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});
*/
const user = mongoose.model('user', UserSchema);
module.exports = user;
