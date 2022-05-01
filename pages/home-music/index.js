// pages/home-music/index.js
import {getBanners} from '../../service/apiMusic'
import {queryRect} from '../../utils/queryRect'
import throttle from '../../utils/throttle'
const throttleQueryRect = throttle(queryRect)
Page({
    data: {
       banners: [],
       swiperHeight: 0
    },
    onLoad (options) {
        this.getPageData()
    },
    getPageData () {
        getBanners().then(res => {
            console.log(res)
            this.setData({banners: res.banners})
        })
    },
    /**
     * 监听图片加载完成
     */
    imageLoad () {
        throttleQueryRect('.swiper-image').then(res => {
            this.setData({swiperHeight:  res[0].height})
        })
    },
    handleSearchClick () {
        wx.navigateTo({
          url: '/pages/search-detail/index',
        })
    }
})