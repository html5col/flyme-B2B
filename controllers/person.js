var User         = require('../proxy').User;
var Topic        = require('../proxy').Topic;
var config       = require('../config');
var eventproxy   = require('eventproxy');
var cache        = require('../common/cache');
var xmlbuilder   = require('xmlbuilder');
var renderHelper = require('../common/render_helper');
var _            = require('lodash');
var moment = require('moment');

exports.intro = function (req, res, next){
    console.log('enter..')
    let name = req.params.name;
    console.log('enter..222')
    res.render('en/lee', {
  
      // topics: topics,
      // list_topic_count: limit,
      // tops: tops,
      // no_reply_topics: no_reply_topics,
      // tab: tab,
       pageTitle: `${name} 导师详情`,
     // isMobile: util.isMobile
    });
}

  