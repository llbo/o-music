import oRequest from './index'
export function getTopMV(offset, limit = 10) {
  return oRequest.get("/top/mv", {
    offset,
    limit
  })
}