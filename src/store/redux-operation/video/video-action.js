export function filterSearchedVideos(search, ycVideoCase) {
  return search.length > 0
    ? ycVideoCase.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    : ycVideoCase;
}

export function isWatchLaterImage(_id, watchlaterCase) {
  return watchlaterCase.find((item) => item._id == _id)
}
