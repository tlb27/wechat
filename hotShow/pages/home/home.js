// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     navitems:[
       {id:1,img_url:"http://127.0.0.1:3000/assets/icons/grid-01.png",title:"美食"},
       {id:2,img_url:"http://127.0.0.1:3000/assets/icons/gouwu-08.png",title:"购物"},
       { id: 9, img_url:"http://127.0.0.1:3000/assets/icons/grid-04.png",title:"卡拉OK"},
       {id:3,img_url:"http://127.0.0.1:3000/assets/icons/grid-03.png",title:"找工作"},                     
       { id: 4, img_url:"http://127.0.0.1:3000/assets/icons/zufang-07.png",title:"租房"},
       { id: 5, img_url: "http://127.0.0.1:3000/assets/icons/grid-02.png", title: "更多" }],
       
     list:[]
  },

  //1:创建方法  getImageList 获取服务器上数据
  //2:在onload调用,将数据保存list
  getImageList:function(){
      wx.request({
        url:"http://127.0.0.1:3000/imagelist",
        success:(res)=>{
           this.setData({list:res.data}) 
        }
      })
  },
  onLoad: function (options) {
    this.getImageList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  //为九宫格中内容绑定点击事件
  handleJumpNews:function(event){
    //自定义属性
    var id = event.target.dataset.id;
    if(id == 1){
      wx.navigateTo({
        url:"/pages/news/news"
      });
    }else if(id==2){
      wx.navigateTo({
        url: '/pages/shoplist/shoplist',
      })
    }
  }
})