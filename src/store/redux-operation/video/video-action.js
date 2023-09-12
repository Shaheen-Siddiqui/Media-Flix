export function filterSearchedVideos(search, ycVideoCase) {
  return search.length > 0
    ? ycVideoCase.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    : ycVideoCase;
}

export function isWatchLaterImage(_id, watchlaterCase) {
  return watchlaterCase.find((item) => item._id == _id);
}

export function categoryWiseFilter(ycVideoCase, selectedCategory) {
  return ycVideoCase.filter(
    (item) => item.category === selectedCategory.category
  );
}