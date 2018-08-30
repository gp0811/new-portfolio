var nam = document.querySelector('#name');
var change1 = document.querySelector('#change1');
var change2 = document.querySelector('#change2');
var cover = document.querySelector('.cover');
var cover1 = document.querySelector('#cover1');
var cover2 = document.querySelector('#cover2');
var cover3 = document.querySelector('#cover3');
var cover4 = document.querySelector('#cover4');

var p1 = 'a Website Designer';
var p2 = '&';
var p3 = ' a Freelancer';
var i=0,j=0,k=0;
function typeWriter1() {
    if (i < p1.length) {
      change1.innerHTML += p1.charAt(i);
      i++;
      setTimeout(typeWriter1, 100);
    }
  }

  function typeWriter2() {
    if (j < p2.length) {
      change2.innerHTML += p2.charAt(j);
      j++;
      setTimeout(typeWriter2, 100);
    }
  }
  function typeWriter3() {
    if (j < p3.length) {
      change3.innerHTML += p3.charAt(j);
      j++;
      setTimeout(typeWriter3, 100);
    }
  }

  setInterval(function(){
    typeWriter1();
},1000);

setInterval(function(){
    typeWriter2();
},3000);

setInterval(function(){
  typeWriter3();
},3500);




var button = document.querySelector('.button');
var btn = document.createElement("BUTTON");
var t = document.createTextNode("VIEW MORE");
btn.appendChild(t);
btn.classList = 'button';

cover1.addEventListener('mousemove',function(){
    cover1.style.backgroundColor = 'rgba(72, 72, 139, 0.671)';
    document.querySelector('#cover1').appendChild(btn);
});

cover1.addEventListener('mouseout',function(){
    cover1.style.backgroundColor = 'rgba(94, 94, 221, 0.39)';
    btn.remove();
});

cover2.addEventListener('mousemove',function(){
  cover2.style.backgroundColor = 'rgba(228, 155, 155, 0.611)';
  document.querySelector('#cover2').appendChild(btn);
});

cover2.addEventListener('mouseout',function(){
  cover2.style.backgroundColor = 'rgba(228, 155, 155, 0.411)';
  btn.remove();
});

cover3.addEventListener('mousemove',function(){
  cover3.style.backgroundColor = 'rgba(143, 143, 143, 0.725)';
  document.querySelector('#cover3').appendChild(btn);
});

cover3.addEventListener('mouseout',function(){
  cover3.style.backgroundColor = 'rgba(143, 143, 143, 0.425)';
  btn.remove();
});

cover4.addEventListener('mousemove',function(){
  cover4.style.backgroundColor = 'rgba(196, 163, 120, 0.645)';
  document.querySelector('#cover4').appendChild(btn);
});

cover4.addEventListener('mouseout',function(){
  cover4.style.backgroundColor = 'rgba(196, 163, 120, 0.445)';
  btn.remove();
});









function initMap() {
    var uluru = {lat: 23.2599, lng: 77.4126};
    var map = new google.maps.Map(
       document.getElementById('map'), {zoom: 6.55, center: uluru});
          var marker = new google.maps.Marker({position: uluru, map: map});
}

