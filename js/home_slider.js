window.onload = function(){
  var oIntro = document.getElementsByTagName('div')[0];
  var oSlider = oIntro.getElementsByTagName('ul')[0];
  var aLi = oSlider.getElementsByTagName('li');
  var oImg = oIntro.getElementsByTagName('img')[0];
  var aImgURL = ['images/slider_bg1.png', 'images/slider_bg2.png', 'images/slider_bg3.png'];
  var count = 1;
 /* alert(oImg.offsetHeight);*/

 /* for(var i=0; i<aLi.length; i++){
    aLi[i].style.height = parseInt(oImg.offsetHeight/3) + 'px';
    alert(aLi[0].offsetHeight);
  }*/

  oImg.src = aImgURL[0];
  oSlider.timer = setInterval(move,1000);

  for(var i=0; i<aLi.length; i++){
    aLi[i].index = i;
    aLi[i].onmouseover = function(){
      for(var j=0; j<aLi.length; j++){
        aLi[j].className = '';
      }
      clearInterval(oSlider.timer);
      aLi[this.index].className = 'on';
      oImg.src = aImgURL[this.index];
    };
    aLi[i].onmouseout = function(){
      count = setCount(this.index);
      oSlider.timer = setInterval(move,1000);
    };
  }

  function move(){
    cancelClassName(count);
    aLi[count].className = 'on';
    oImg.src = aImgURL[count];
    count = setCount(count);
  }
  function setTimer(){
    setInterval(function(){
      cancelClassName(count);
      aLi[count].className = 'on';
      oImg.src = aImgURL[count];
      count = setCount(count);
    },2000);
  }
  function setCount(count){
      if(count<2){
        count++;
      } else{
        count = 0;
      }
      return count;
  }
  function cancelClassName(num){
    if((num-1)<0){
      num = 2;
    } else {
      num = num-1;
    }
    aLi[num].className = '';
  }
};
