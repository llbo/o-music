import { HYEventStore } from 'hy-event-store'

import { getRankings } from '../service/apiMusic'
// const rankingMap = { 0: "newRanking", 1: "hotRanking", 2: "originRanking", 3: "upRanking" }
const rankingMap = { 3779629: "newRanking", 3778678: "hotRanking", 2884035: "originRanking", 19723756: "upRanking" }
const rankingStore = new HYEventStore({
  state: {
    newRanking: {}, // 0: 新歌
    hotRanking: {}, // 1: 热门
    originRanking: {}, // 2: 原创
    upRanking: {} // 3: 飙升
  },
  actions: {
    getRankingDataAction(ctx) {
      // 0: 新歌榜 1: 热门榜 2: 原创榜 3: 飙升榜
      // for (let i = 0; i < 4; i++) {
      //   getRankings(i).then(res => {
      //     const rankingName = rankingMap[i]
      //     ctx[rankingName] = res.playlist
      //   })
      // }
      for (let v in rankingMap) {
        getRankings(v).then(res => {
          const rankingName = rankingMap[v]
          ctx[rankingName] = res.playlist
        })
      }
    }
  }
})

export {
  rankingStore,
  rankingMap
}
