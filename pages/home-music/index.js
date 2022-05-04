// pages/home-music/index.js
import { rankingStore, rankingMap } from '../../store/index'
import {getBanners, getSongMenu} from '../../service/apiMusic'
import {queryRect} from '../../utils/queryRect'
import throttle from '../../utils/throttle'
const throttleQueryRect = throttle(queryRect)
Page({
    data: {
       banners: [],
       swiperHeight: 0,
       hotSongMenu: [],
       recommendSongMenu: [],
       recommendSongs: [],
       rankings: { 0: {}, 2: {}, 3: {} }
    },
    onLoad (options) {
        this.getPageData()
        // 发起共享数据的请求
        rankingStore.dispatch("getRankingDataAction")

        // 从store获取共享的数据
        rankingStore.onState("hotRanking", (res) => {
          if (!res.tracks) return
          const recommendSongs = res.tracks.slice(0, 6)
          this.setData({ recommendSongs })
        })
        rankingStore.onState("newRanking", this.getRankingHandler(0))
        rankingStore.onState("originRanking", this.getRankingHandler(2))
        rankingStore.onState("upRanking", this.getRankingHandler(3))
    },
    getPageData () {
        getBanners().then(res => {
            console.log(res)
            this.setData({banners: res.banners})
        })
        getSongMenu().then(res => {
          this.setData({ hotSongMenu: res.playlists })
        })
        getSongMenu("华语").then(res => {
          this.setData({ recommendSongMenu: res.playlists })
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
          url: '/pages/detail-search/index',
        })
    },
    handleMoreClick: function() {
      this.navigateToDetailSongsPage("hotRanking")
    },
    handleRankingItemClick: function(event) {
      const idx = event.currentTarget.dataset.idx
      console.log('rankingMap', rankingMap)
      const rankingName = rankingMap[idx]
      console.log('rankingName', rankingName)
      this.navigateToDetailSongsPage(rankingName)
    },
  
    navigateToDetailSongsPage: function(rankingName) {
      wx.navigateTo({
        url: `/pages/detail-songs/index?ranking=${rankingName}&type=rank`,
      })
    },
    getRankingHandler: function(idx) {
        return (res) => {
          if (Object.keys(res).length === 0) return
          console.log("idx:", idx)
          const name = res.name
          const coverImgUrl = res.coverImgUrl
          const playCount = res.playCount
          const songList = res.tracks.slice(0, 3)
          const rankingObj = {name, coverImgUrl, playCount, songList}
          const newRankings = { ...this.data.rankings, [idx]: rankingObj}
          this.setData({ 
            rankings: newRankings
          })
          console.log(this.data.rankings)
        }
      },
})