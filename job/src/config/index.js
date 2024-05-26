const dotenv = require('dotenv');
const path = require('path');

// Especifique o caminho para o arquivo .env
const envPath = path.resolve(__dirname, '../../job.env');
console.log(envPath);
// Carregue o arquivo .env no caminho especificado
dotenv.config({ path: envPath });
console.log('pK:'+ process.env.JWT_PRIVATE_KEY);
module.exports = {
  endpoint: process.env.API_URL,
  masterKey: process.env.API_KEY,
  port: process.env.PORT,
  authKey: process.env.JWT_PRIVATE_KEY,
  publicKey: process.env.JWT_PUBLIC_KEY,
  dbURI: process.env.MONGO_URL
};


