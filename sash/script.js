
function start() {
$('.start').css("display","none");
$('.navigation').css("display","flex");
}
var HashivJisht = 0 ;var gumareli1;
var HashivSxal = 0;var gumareli2;var b;
function navig(a,d){
	if (a==1) {
		$('#filter-1').css("display","flex");
	}
	if (a==11) {
		$('#filter--1').css("display","flex");
	}
	if (a==111) {
	$('.hashiv').css("display","flex");
$('.Tablo').css("background-color","silver");
 $('#patasxan').val('');
 if (d==1) {
 		b=d;
		 gumareli1 = 1 + Math.floor(Math.random() * 10);
		 gumareli2 = 1+Math.floor(Math.random() * (12-gumareli1));
 };
  if (d==2) {
 	b=d;
		 gumareli1 = 1 + Math.floor(Math.random() * 15);
		 gumareli2 = 1+Math.floor(Math.random() * (15-gumareli1));
 };
 if (d==3) {
 	b=d;
		 gumareli1 = 1 + Math.floor(Math.random() * 20);
		 gumareli2 = 1+Math.floor(Math.random() * (20-gumareli1));
 };
 if (d==4) {
 	b=d;
		 gumareli1 = 1 + Math.floor(Math.random() * 25);
		 gumareli2 = 1+Math.floor(Math.random() * (25-gumareli1));
 };
		$('.Tablo').css("display","flex");
		$('#gumareli1').text(gumareli1);
		$('#gumareli2').text(gumareli2);
		var a=gumareli2+gumareli1;
			 $('#taqnvac').val(a);

		
	}
}
var c;
			
			document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  var KeyID = event.keyCode;
  var val = $('#patasxan').val();
  var vol = $('#taqnvac').val()
  if (keyName === 'Enter') {
       if(val.length >= 1 ){
       	if (c=='kanach') {navig(111,b);c=''}
       		else{
  	if (vol==val) {
  			c='kanach';
  		$('.Tablo').css("background-color","green");
  		HashivJisht++;
  		 	}
  	else{ c='karmir';HashivSxal++;
  	$('#patasxan').val('');
  			$('.Tablo').css("background-color","red")
  	};
  	}
  	$(".jisht").text(HashivJisht);	
  	$(".sxal").text(HashivSxal);

  }
   // navig(111)
  }
  	if (KeyID == 32) {
  		start();
  		navig(1);
  		navig(11);
  		navig(111,b);
  	}
  	console.log(HashivJisht,HashivSxal);
})

	

$(document).click(function(e) {
$("[name=fname]").focus();
});