'use strict';

// require('dotenv').config();
// const mongoose = require('mongoose');

// const mongooseOptions = {
//   useNewUrlParser:true,
//   useCreateIndex: true,
// };
// mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

// require('./src/app.js').start(process.env.PORT);
'use strict';

const mongoose = require('mongoose');
const server = require('./lib/server.js');

const MONGO = 'mongodb://localhost:27017/class-08';
mongoose.connect(MONGO);

server.start(3000);
