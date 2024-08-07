const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
// Get the client

const cors = require('cors')
const session = require('express-session')
const login = require('./login');
const registro = require('./registro');
const { obtenerUsuarios, eliminarUsuario } = require('./usuario');
const validar = require('./validar');
const bcrypt = require ('bcrypt');
const saltRounds =10;
const md5 = require ('md5');
const connection = require('./conexion');
const MySQLStore = require('express-mysql-session')(session);

mysql://root:llTqPYiJaaoLYrcWpfDcyGYhXxgMvQpK@roundhouse.proxy.rlwy.net:f/railway

app.use(cors({
  origin: process.env.HOSTFRONTEND ||'http://localhost:5173',
  credentials: true
}))
const sessionStore = new MySQLStore({}/* session store options */, connection);
app.use(session({
  secret: process.env.SECRETSESSION || 'ljffflfffljffl',
  proxy: process.env.NODE_ENV === 'production',
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none'
  },
}))

app.get('/', (req, res) => {
  res.send('Bienvenido Humanoide!')
})
app.get('/login', login)

app.get('/registro', registro)

app.get('/usuarios', obtenerUsuarios )

app.delete('/usuarios', eliminarUsuario)

app.get('/validar', validar)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})