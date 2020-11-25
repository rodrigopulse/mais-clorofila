import User from '../schemas/UserSchema'

class UserController {

  async register (req, res) {
    try {
      const user = await User.create(req.body)
      return res.status(200).json({ messagem: 'Conta criada' })
    } catch (err) {
      if(err.code === 11000) {
        return res.status(400).json({message: 'E-mail já registrado', code: err.code})
      }
      return res.status(400).json({message: 'Ocorreu um erro e a conta não foi criada'})
    }
  }

}

export default new UserController()