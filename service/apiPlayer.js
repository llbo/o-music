import oRequest from './index'

export function getSongDetail(ids) {
  return oRequest.get("/song/detail", {
    ids
  })
}

