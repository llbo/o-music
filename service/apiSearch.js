import oRequest from "./index";

export function getSearchHot() {
  return oRequest.get("/search/hot")
}

export function getSearchSuggest(keywords) {
  return oRequest.get("/search/suggest", {
    keywords,
    type: "mobile"
  })
}

export function getSearchResult(keywords) {
  return oRequest.get("/search", {
    keywords
  })
}
