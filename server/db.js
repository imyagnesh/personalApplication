const mongoose = require('mongoose');

const mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL || 'mongodb://localhost/personal_app';


// if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
//   const mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase();
//   const mongoHost = process.env[`${mongoServiceName}_SERVICE_HOST`];
//   const mongoPort = process.env[`${mongoServiceName}_SERVICE_PORT`];
//   const mongoDatabase = process.env[`${mongoServiceName}_DATABASE`];
//   const mongoPassword = process.env[`${mongoServiceName}_PASSWORD`];
//   const mongoUser = process.env[`${mongoServiceName}_USER`];

//   if (mongoHost && mongoPort && mongoDatabase) {
//     mongoURLLabel = mongoURL = 'mongodb://';
//     if (mongoUser && mongoPassword) {
//       mongoURL += `${mongoUser}:${mongoPassword}@`;
//     }
//     // Provide UI label that excludes user id and pw
//     mongoURLLabel += `${mongoHost}:${mongoPort}/${mongoDatabase}`;
//     mongoURL += `${mongoHost}:${mongoPort}/${mongoDatabase}`;
//   }
// }

// let dbURI = 'mongodb://localhost/personal_app';
// if (process.env.NODE_ENV === 'production') {
//   dbURI = process.env.MONGOLAB_URI;
// }

mongoose.connect(mongoURL);

// CONNECTION EVENTS
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${mongoURL}`);
});
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ' ${err}`);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};
// For nodemon restarts
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app termination', () => {
    process.exit(0);
  });
});

// require('./models/blog');
require('./models/users');
