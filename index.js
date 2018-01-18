function getFirstSelector(selector){
   return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div#nested div.target');

}
function increaseRankBy(n){
  var list = document.querySelectorAll('.ranked-list');
  for (let i=0; i<list.length ;i++){
    var num = parseInt(list[i].innerHTML);
    list[i].innerHTML = num + n;
  }
}

function deepestChild(){
  var n = document.querySelector('div#grand-node');
  for (let i = 0; i < 4; i++) {
    n = n.querySelector('div');
  }
   return n;
}
