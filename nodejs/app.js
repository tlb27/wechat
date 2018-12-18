//1.加载模块
const express = require("express")
const pool = require("./pool")

//2.创建express对象
var app = express();

//服务器node.js 允许跨域访问的配置项
//引入模块
const cors = require("cors")
//配置允许的哪个程序跨域访问 脚手架
app.use(cors({
    origin:["http://127.0.0.1:3001","http://localhost:3001"],
    credentials:true
}))

//3.指定静态目录
app.use(express.static(__dirname+"/public"));
//4.绑定监听端口
app.listen(3000);

//功能一：轮播
//GET /imagelist json
app.get("/imagelist",(req,res)=>{
    var obj = [
        {id:1,img_url:"http://localhost:3000/img/banner1.png"},
        {id:2,img_url:"http://localhost:3000/img/banner2.png"},
        {id:3,img_url:"http://localhost:3000/img/banner3.png"},
        {id:4,img_url:"http://localhost:3000/img/banner4.png"}
    ];
    res.send(obj)
})

//功能二分页：新闻
app.get("/newslist",(req,res)=>{
    //页码 页大小 
    var pno = req.query.pno;
    var pageSize = req.query.pageSize;
    //查询总记录-》转换总页数
    var sql1 = "SELECT count(id) as c FROM weixin_news"

    var obj = {}; //发给客户端的数据
    var progress = 0; //进度

    pool.query(sql1,(err,result)=>{
        if(err) console.log(err);
        var c = Math.ceil(result[0].c/pageSize);
        obj.pageCount = c;
        progress += 50;
        if(progress==100){
            res.send(obj);
        }
    })
    var sql2 = "SELECT id,title,img_url,ctime,point,price";
        sql2 += " FROM weixin_news";
        sql2 += " LIMIT ?,?";
    var offset = (pno-1)*pageSize;//计算分页偏移量
    pageSize = parseInt(pageSize)
    pool.query(sql2,[offset,pageSize],(err,result)=>{
        if(err) console.log(err)
        //console.log(result);
        obj.data = result;
        progress += 50;
        if(progress==100){
            res.send(obj)
        }
    })
    
    //res.send({code:"ok"})
});

app.get("/newslist1",(req,res)=>{
    var obj=[{id:1,ctime:"2018-012-17",title:"美食1",img_url:"http://localhost:3000/img/qixintian01.jpg",desc:"七欣天品蟹轩"},
    {id:2,ctime:"2018-09-10",title:"美食2",img_url:"http://localhost:3000/img/haidilao01.jpg",desc:"海底捞火锅"},
    {id:3,ctime:"2018-09-10",title:"美食3",img_url:"http://localhost:3000/img/hangzhoubaoji01.jpg",desc:"杭州爆鸡"},
];
res.send(obj)
})

