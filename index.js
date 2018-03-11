function getFirstSelector(selector){
return document.querySelector(`${selector}`)
}
function nestedTarget(){
return document.querySelector(`#nested .target`)
}
function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list');
  for(let i = 0; i < rankedLists.length; i++){
    rankedLists[i].innerHTML = (`${i + 3}`)
  }
  return rankedLists
}
function deepestChild(){
  return document.querySelector('#grand-node div div div div')
  //use querySelector and querySelectorAll
  //Solution does not need to be generic
  //not expected to work in every case.
}
//use a similar technique to breadth-first search you were introduced to before
//Mission: find the nodes
