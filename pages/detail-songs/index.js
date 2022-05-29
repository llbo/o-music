// pages/detail-songs/index.js
import { rankingStore, playerStore } from '../../store/index'
import { getSongMenuDetail } from '../../service/apiMusic'

Page({
  data: {
    type: "",
    ranking: "",
    songInfo: {}
  },
  onLoad: function (options) {
    const type = options.type
    this.setData({ type })

    if (type === "menu") {
      const id = options.id
      getSongMenuDetail(id).then(res => {
        console.log('songInfo', res.playlist)
        this.setData({ songInfo: res.playlist })
      })
    } else if (type === "rank") {
      const ranking = options.ranking
      this.setData({ ranking })

      // 1.获取数据
      rankingStore.onState(ranking, this.getRankingDataHanlder)
    }
  },

  handleSongItemClick: function(event) {
    const index = event.currentTarget.dataset.index
    console.log('this.data.songInfo', this.data.songInfo)
    playerStore.setState("playListSongs", this.data.songInfo.tracks)
    playerStore.setState("playListIndex", index)
  },


  onUnload: function () {
    if (this.data.ranking) {
      rankingStore.offState(this.data.ranking, this.getRankingDataHanlder)
    }
  },

  getRankingDataHanlder: function(res) {
    this.setData({ songInfo: res })
  } 
})