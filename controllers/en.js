var User         = require('../proxy').User;
var Topic        = require('../proxy').Topic;
var config       = require('../config');
var eventproxy   = require('eventproxy');
var cache        = require('../common/cache');
var xmlbuilder   = require('xmlbuilder');
var renderHelper = require('../common/render_helper');
var _            = require('lodash');
var moment = require('moment');

exports.grammar = function (req, res, next){
    res.render('en/grammar', {
  
      // topics: topics,
      // list_topic_count: limit,
      // tops: tops,
      // no_reply_topics: no_reply_topics,
      // tab: tab,
       pageTitle: '英语语法课程',
     // isMobile: util.isMobile
    });
}
  