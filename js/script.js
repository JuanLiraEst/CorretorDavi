var slider_img = document.querySelector('.slider-img');
var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', 
'6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg',
 '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', 
 '20.jpg', '21.jpg', '22.jpg', '23.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "imgs1/"+images[i]);
	
}


var slider_img2 = document.querySelector('.slider2-img');
var images2 = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', 
'6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg', '10.jpeg', '11.jpeg', '12.jpeg',
 '13.jpeg', '14.jpeg', '15.jpeg', '16.jpeg', '17.jpeg', '18.jpeg'];
var j = 0;

function prev2(){
	if(j <= 0) j = images2.length;	
	j--;
	return setImg2();			 
}

function next2(){
	if(j >= images2.length-1) j = -1;
	j++;
	return setImg2();			 
}

function setImg2(){
	return slider_img2.setAttribute('src', "imgs2/"+images2[j]);
	
}