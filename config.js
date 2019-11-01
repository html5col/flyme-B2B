/**
 * config
 */

let path = require('path');
let dbUsername = process.env.dbUsername;
let dbPassword = process.env.dbPassword;
let mailPass = process.env.mailPass || '548331198';
let mongoPort = process.env.mongoPort || 27017;
console.log(dbUsername, dbPassword,mongoPort);

var config = {
  // debug 为 true 时，用于本地调试
  debug: false,

  get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader

  name: '135楼', // 社区名字 
  description: '135楼 英语学习平台，提供超省心的完整英语学习体系和路线图。并结合线下实体教学体验点进行教学和指导，是一个真正意义上的英语课程体系学习平台。', // 社区的描述
  keywords: '英语学习, 英语语法, 英语听力, 英语语法课, 在线英语课程, 线下语法课, 英语口语课程, 英语口语在线课程,英语外教课程,外教小班,外教一对一,英语学习路线图',

  // 添加到 html head 中的信息
  site_headers: [
    '<meta name="author" content="admin@135lou.com" />'
  ],
  site_logo: '', // default is `name` ' example: /public/images/cnodejs_light.svg'
  site_icon: '', // 默认没有 favicon, 这里填写网址,example: /public/images/cnode_icon_32.png
  // 右上角的导航区
  site_navs: [
    // 格式 [ path, title, [target=''] ]
    [ '/about', '关于' ],
  ],
  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: '', // 静态文件存储域名
  // 社区的域名
  host: 'localhost',
  // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  google_tracker_id: '',
  // 默认的cnzz tracker ID，自有站点请修改
  cnzz_tracker_id: '',

  // mongodb 配置
  db: {
    name: 'en',
    //uri: 'mongodb://127.0.0.1/',
    auth: {
      user: dbUsername || '',
      pass: dbPassword || '',
    },
    port: mongoPort
  }, 
  // redis 配置，默认是本地
  redis_host: '127.0.0.1',
  redis_port: 6379,
  redis_db: 0,
  redis_password: '',

  session_secret: 'leeenglish', // 务必修改
  auth_cookie_name: 'lee',

  // 程序运行的端口
  port: 3000,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // RSS配置
  rss: {
    title: '135楼 | 专业的英语学习社区',
    link: 'http://135lou.com',
    language: 'zh-cn',
    description: '135楼: 提供专业的英语学习课程，和学习社区。',
    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  log_dir: path.join(__dirname, 'logs'),

  // 邮箱配置
  mail_opts: {
    host: 'smtp.ym.163.com',
    port: 25,
    auth: {
      user: 'admin@135lou.com',
      pass: mailPass
    },
    // ignoreTLS: true
  },

  //weibo app key
  weibo_key: 10000000,
  weibo_id: 'your_weibo_id',

  // admin 可删除话题，编辑标签。把 user_login_name 换成你的登录名
  admins: { enthusiast: true },

  //github 登陆的配置
  GITHUB_OAUTH: {
    clientID: 'your GITHUB_CLIENT_ID',
    clientSecret: 'your GITHUB_CLIENT_SECRET',
    callbackURL: 'http://cnodejs.org/auth/github/callback'
  },

  // 是否允许直接注册（否则只能走 github 的方式）
  allow_sign_up: true,

  // oneapm 是个用来监控网站性能的服务
  oneapm_key: '',

  // 下面两个配置都是文件上传的配置

  // 7牛的access信息，用于文件上传
  qn_access: {
    accessKey: 'ts8Rm7sjjE-JhpgS5-LKceImWMOIV7ZRHXyFnq9_dd',
    secretKey: 'ts8Rm7sjjE-JhpgS5-LKceImWMOIV7ZRHXyFnq9_dd',
    bucket: 'your bucket name',
    origin: '',
    // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
    // 如果在国内，此项请留空
    uploadURL: 'http://xxxxxxxx',
  },

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  file_limit: '2MB',

  // 版块
  tabs: [
    ['grammar', '词汇&语法'],
    ['verbal', '听力&口语'],
    ['test', '历年真题'],
    ['feedback', '反馈']
  ],

  // 极光推送
  jpush: {
    appKey: 'YourAccessKeyyyyyyyyyyyy',
    masterSecret: 'YourSecretKeyyyyyyyyyyyyy',
    isDebug: false,
  },

  create_post_per_day: 10, // 每个用户一天可以发的主题数
  create_reply_per_day: 10, // 每个用户一天可以发的评论数
  create_user_per_ip: 10, // 每个 ip 每天可以注册账号的次数
  visit_per_day: 100, // 每个 ip 每天能访问的次数
};

if (process.env.NODE_ENV === 'test') {
  config.db = 'mongodb://127.0.0.1/node_club_test';
}

module.exports = config;
