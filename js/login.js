var aObj=document.getElementById('login').getElementsByClassName('a')[0];
var aObja=aObj.getElementsByTagName('a');
var formObj=document.getElementsByTagName('form')[0];
var scanObj=document.getElementsByClassName('scan')[0];
var qrcodeObj=scanObj.getElementsByClassName('qrcode')[0];
var imgObja=scanObj.getElementsByTagName('img')[0];
var imgObjb=scanObj.getElementsByTagName('img')[1];
//点击扫码登录
	aObja[0].onclick=function(){
		scanObj.style.display='block';
		formObj.style.display='none';
		this.className='on';
		aObja[1].className='';
	}
//点击账号登陆
	aObja[1].onclick=function(){		
		scanObj.style.display='none';
		formObj.style.display='block';
		aObja[0].className='';
		this.className='on';
	}
//鼠标放在二维码上面
	qrcodeObj.onmouseover=function(){
		imgObja.className='login_z';
		imgObjb.style.display='block';
	}
	qrcodeObj.onmouseout=function(){
		imgObja.className='';
		imgObjb.style.display='none';		
	}
