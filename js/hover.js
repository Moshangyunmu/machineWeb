function addEvent(o,evt,func){  /*不要window.onload=xxx，这样只有最后倒入的window.onload有效，
                                                    前面的会被覆盖，要使用attachEvent或者addEventListener来添加*/
  if(o.attachEvent)o.attachEvent('on'+evt,func);
    else if(o.addEventListener)o.addEventListener(evt,func,false);
}
addEvent(window,'load',hover);

function hover(){
  var nav = document.getElementsByTagName("nav")[0];
  var aLi = nav.getElementsByTagName("li");
  var oUl = nav.getElementsByTagName("ul")[0];
  var num = 0;
  var old = 0;

  for(var i=0; i<aLi.length-1; i++){
    aLi[i].index = i;
    if(aLi[i].className !== ''){
      num = i;
    }
    aLi[i].onmouseover = function(){
      aLi[num].className ='';
      aLi[this.index].className ='active';
      old = this.index;
    };
    aLi[i].onmouseout = function(){
      aLi[old].className = '';
      aLi[num].className = 'active';
    };
  }
}
