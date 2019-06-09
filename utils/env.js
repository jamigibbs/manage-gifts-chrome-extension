// tiny wrapper with default env vars
module.exports = {
  NODE_ENV: (process.env.NODE_ENV || 'development'),
  API_URL: (process.env.API_URL || 'http://localhost:8080'),
  PORT: (process.env.PORT || 3000)
};
