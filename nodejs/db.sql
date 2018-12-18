SET NAMES UTF8;

DROP DATABASE IF EXISTS weixin;

CREATE DATABASE weixin CHARSET=UTF8;

#1:进入weixin库中
USE weixin;
#2:创建新闻表
CREATE TABLE weixin_news(
 id    INT PRIMARY KEY AUTO_INCREMENT, 
 title VARCHAR(128),
 ctime DATETIME,
 img_url VARCHAR(255),
 price int,
 point INT
);
#now() 当前数据库时间 年月日时分秒
INSERT INTO weixin_news VALUES(null,'..1',now(),
"http://127.0.0.1:3000/img/man01.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..2',now(),
"http://127.0.0.1:3000/img/man02.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..3',now(),
"http://127.0.0.1:3000/img/man03.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..4',now(),
"http://127.0.0.1:3000/img/man04.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..5',now(),
"http://127.0.0.1:3000/img/man05.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..6',now(),
"http://127.0.0.1:3000/img/man06.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..1',now(),
"http://127.0.0.1:3000/img/man01.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..2',now(),
"http://127.0.0.1:3000/img/man02.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..3',now(),
"http://127.0.0.1:3000/img/man03.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..4',now(),
"http://127.0.0.1:3000/img/man04.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..5',now(),
"http://127.0.0.1:3000/img/man05.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..6',now(),
"http://127.0.0.1:3000/img/man06.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..1',now(),
"http://127.0.0.1:3000/img/man01.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..2',now(),
"http://127.0.0.1:3000/img/man02.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..3',now(),
"http://127.0.0.1:3000/img/man03.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..4',now(),
"http://127.0.0.1:3000/img/man04.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..5',now(),
"http://127.0.0.1:3000/img/man05.jpg",230,0);
INSERT INTO weixin_news VALUES(null,'..6',now(),
"http://127.0.0.1:3000/img/man06.jpg",230,0);

