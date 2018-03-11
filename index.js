function getFirstSelector(selector){
return document.querySelector(`${selector}`)
}
function nestedTarget(){
return document.querySelector(`#nested .target`)
}
function increaseRankBy(n){
   document.querySelectorAll('.ranked-list li');
  for(let i = 0; i < n.length; i++){
    n[i].innerHTML = (i + `${n}`)
  }
  return n
}
function deepestChild(){
  //use querySelector and querySelectorAll
  //Solution does not need to be generic
  //not expected to work in every case.
}
//use a similar technique to breadth-first search you were introduced to before
//Mission: find the nodes
