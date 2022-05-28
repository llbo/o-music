import oRequest from './index'

export function getSongDetail(ids) {
  return oRequest.get("/song/detail", {
    ids
  })
}

export function getSongLyric(id) {
  return oRequest.get("/lyric", {
    id
  })
}

