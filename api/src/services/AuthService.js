import jwt from 'jwt-simple'
import dotenv from 'dotenv'

dotenv.config()

class AuthService {

  async tokenAuth (req, res, next) {
    try {
      const token = req.headers['x-access-token']
      if (token === undefined) {
        return res.status(401).json({ mensagem: 'Não existe token no header' })
      } else {
        const decoded = await jwt.decode(token.toString(), process.env.SECRET_JWT || '')
        console.log(decoded)
        //return next()
      }
    } catch (err) {
      return res.status(401).json({ mensagem: 'Token invalido' })
    }
  }

}
export default AuthService
