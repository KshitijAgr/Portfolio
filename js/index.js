function hy() {
			name=document.getElementById("skill1").src="image/html1.png";
			}
		function deft(){
			name=document.getElementById("skill1").src="image/html.png"
			}
		function hy1() {
			name=document.getElementById("skill2").src="image/css1.png";
			}
		function deft1(){
			name=document.getElementById("skill2").src="image/css.png"
			}
		function hy2() {
			name=document.getElementById("skill3").src="image/js1.png";
			}
		function deft2(){
			name=document.getElementById("skill3").src="image/js.png"
			}
		function hy3() {
			name=document.getElementById("skill4").src="image/bootstrap1.png";
			}
		function deft3(){
			name=document.getElementById("skill4").src="image/bootstrap.png"
			}
		function hy4() {
			name=document.getElementById("skill5").src="image/jquery1.png";
			}
		function deft4(){
			name=document.getElementById("skill5").src="image/jquery.png"
			}
		function hy5() {
			name=document.getElementById("skill6").src="image/php1.png";
			}
		function deft5(){
			name=document.getElementById("skill6").src="image/php.png";
			}
		function hy6() {
			name=document.getElementById("skill7").src="image/mysql1.png";
			}
		function deft6(){
			name=document.getElementById("skill7").src="image/mysql.png"
			}
		function hy7() {
			name=document.getElementById("skill8").src="image/wordpress1.png";
			}
		function deft7(){
			name=document.getElementById("skill8").src="image/wordpress.png"
			}
		function hy8() {
			name=document.getElementById("skill9").src="image/github1.png";
			}
		function deft8(){
			name=document.getElementById("skill9").src="image/github.png"
			}								
	
		img_count=1;		
				function slideImage() 
				{
					if(img_count>=3)	
						img_count=1;
					else
						img_count++;
					document.getElementById('img_slider').src="image/"+img_count+".jpg";
				setTimeout('slideImage()',2000);
				}
			