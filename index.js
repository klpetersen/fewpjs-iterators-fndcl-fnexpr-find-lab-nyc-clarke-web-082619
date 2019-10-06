const testVar = {}

function superbowlWin(array) {
    let find_w = array.find(function(s) { return s.result === "W" } ); 
      if (find_w !== undefined){ 
        return find_w.year 
      }
      else {
  return find_w 
}
}
