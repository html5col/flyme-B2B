var mongoose = require('mongoose');
var config   = require('../config');
var logger = require('../common/logger');
let db = config.db;



//mongoose.connect(config.db, {
mongoose.connect(`mongodb://${db.auth.user}:${db.auth.pass}@localhost:${db.port}/${db.name}`, {
  poolSize: 20,
  useCreateIndex: true,
  useNewUrlParser: true
}, function (err) {
  if (err) {
    logger.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

// models
require('./user');
require('./topic');
require('./reply');
require('./topic_collect');
require('./message');

exports.User         = mongoose.model('User');
exports.Topic        = mongoose.model('Topic');
exports.Reply        = mongoose.model('Reply');
exports.TopicCollect = mongoose.model('TopicCollect');
exports.Message      = mongoose.model('Message');
