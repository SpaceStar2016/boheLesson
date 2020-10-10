// 0 引入 用来发送请求的 方法 一定要把路径补全
// import { request } from "../../request/index.js";
Page({
  data: {
    // 轮播图数组
    swiperList: [ {'image_src':'../../src/bohe00.jpeg'},
                {'image_src':'../../src/bohe01.jpeg'},
                {'image_src':'../../src/bohe02.jpeg'},
                {'image_src':'../../src/bohe03.jpeg'},
                {'image_src':'../../src/bohe04.jpeg'},
                ],
    // 导航 数组
    catesList:[],
    // 楼层数据
    floorList:[]
  },
  // 页面开始加载 就会触发
  onLoad: function (options) {
 
      
  },

  teacherTap(e){
    wx.navigateTo({
      url: '../teacherModule/teacherVerifyPage/teacherVerifyPage',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  studentTap(e){

  },

  // 获取轮播图数据
  getSwiperList(){
    request({ url: "/home/swiperdata" })
    .then(result => {
      this.setData({
        swiperList: result
      })
    })
  },
  // 获取 分类导航数据
  getCateList(){
    request({ url: "/home/catitems" })
    .then(result => {
      this.setData({
        catesList: result
      })
    })
  },
  // 获取 楼层数据
  getFloorList(){
    request({ url: "/home/floordata" })
    .then(result => {
      this.setData({
        floorList: result
      })
    })
  },
})
