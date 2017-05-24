//选择省份下拉菜单
	var locaObj=document.getElementById('loginBox').getElementsByClassName('location')[0];
	var ulObj=locaObj.getElementsByTagName('ul')[0];
	var aObj=ulObj.getElementsByTagName('a');
	locaObj.onmouseover=function(){
		this.getElementsByTagName('p')[0].className='on';
		this.getElementsByTagName('ul')[0].style.display='block';
	}
	locaObj.onmouseout=function(){
		this.getElementsByTagName('p')[0].className='';
		this.getElementsByTagName('ul')[0].style.display='none';
	}
	for (var i = 0; i < aObj.length; i++) {
		aObj[i].onclick=function(){
			for (var j = 0; j< aObj.length;j++) {
				aObj[j].className='';
			}
		this.className='on';
		}
	}
//选择省份下拉菜单END
//京东首页登录注册下拉菜单
	var liObj=document.getElementById('myul').getElementsByTagName('li');
	var codeObj=document.getElementById('search').getElementsByClassName('qrcode')[0];
	for (var i = 0; i < liObj.length; i++) {
		liObj[i].onmouseover=function(){
			if(this.id=='myli'){
				this.getElementsByTagName('a')[0].className='b_menu';
				this.getElementsByTagName('div')[0].style.display='block';
			}
			else if(this.id=="myli2"){
				this.getElementsByTagName('a')[0].className='b_menu';
				this.getElementsByTagName('div')[0].style.display='block';
			}
			else if(this.id=="myli3"){
				this.getElementsByTagName('a')[0].className='b_menu';
				this.getElementsByTagName('div')[0].style.display='block';
			}
			else if(this.id=='myli4'){
				this.getElementsByTagName('div')[0].style.display='block';
			}
		}
		liObj[i].onmouseout=function(){
			if(this.id=='myli'){
				this.getElementsByTagName('a')[0].className='';
				this.getElementsByTagName('div')[0].style.display='none';
			}
			else if(this.id=="myli2"){
				this.getElementsByTagName('a')[0].className='';
				this.getElementsByTagName('div')[0].style.display='none';
			}
			else if(this.id=="myli3"){
				this.getElementsByTagName('a')[0].className='';
				this.getElementsByTagName('div')[0].style.display='none';
			}
			else if(this.id=="myli4"){
				this.getElementsByTagName('div')[0].style.display='none';
			}
		}		
	}
		codeObj.onmouseover=function(){
			document.getElementById('myli4').getElementsByTagName('div')[0].style.display='block';
		}
//京东首页登录注册下拉菜单END

//购物车下拉菜单
	var shopcarObj=document.getElementById('search').getElementsByClassName('shop')[0];
	shopcarObj.onmouseover=function(){
		this.setAttribute('style','border: 1px solid #CCCCCC;border-bottom: none;')
		document.getElementById('search').getElementsByClassName('shop_lists')[0].style.display='block';
	}
	shopcarObj.onmouseout=function(){
		this.style='';
		document.getElementById('search').getElementsByClassName('shop_lists')[0].style.display='none';
	}
//购物车下拉菜单END
//轮播图左边的二级菜单
	var liObj=document.getElementById('l_ul').getElementsByTagName('li');
	for (var i = 0; i < liObj.length; i++) {
		liObj[i].onmouseover=function(){
			this.getElementsByTagName('div')[0].style.display='block';
		}
		liObj[i].onmouseout=function(){
			this.getElementsByTagName('div')[0].style.display='none';
		}
	}
//轮播图左边的二级菜单END

//京东秒杀图片上下移动
//	var imgObj=document.getElementById('gds').getElementsByTagName('img');
//	for (var i = 0; i < imgObj.length; i++) {
//		imgObj[i].onmouseover=function(){
//		this.className='skill_sx';
//		}
//		imgObj[i].onmouseout=function(){
//		this.className='';
//		}
//	}
	
//京东秒杀图片上下移动END

//发现好货
//左边的框
//	var imgObj=document.getElementById('a1').getElementsByTagName('img');
//	for (var i = 0; i < imgObj.length; i++) {
//		imgObj[i].onmouseover=function(){
//		this.className='goods_zy';
//		}
//		imgObj[i].onmouseout=function(){
//		this.className='';
//		}
//	}
//中间的框
//	var b1_1Obj=document.getElementById('find').getElementsByClassName('b1_1');
//	for (var i = 0; i < b1_1Obj.length; i++) {
//		b1_1Obj[i].getElementsByTagName('img')[0].onmouseover=function(){
//			this.className='skill_sx';
//		}
//		b1_1Obj[i].getElementsByTagName('img')[0].onmouseout=function(){
//			this.className='';
//		}
//	}
//发现好货END
	
//爱生活
//样式1
//	var left_bObj=document.getElementById('life').getElementsByClassName('left_b');
//	for (var i = 0; i < left_bObj.length; i++) {
//		var imgObj=left_bObj[i].getElementsByTagName('img');
//		for (var j = 0; j < imgObj.length; j++) {
//			imgObj[j].onmouseover=function(){
//				this.className='enjoy_zy';
//			}
//			imgObj[j].onmouseout=function(){
//				this.className='';
//			}
//		}
//	}
//样式2
//	var left_bObj=document.getElementById('style').getElementsByClassName('left_b');
//	for (var i = 0; i < left_bObj.length; i++) {
//		var imgObj=left_bObj[i].getElementsByTagName('img');
//		for (var j = 0; j < imgObj.length; j++) {
//			imgObj[j].onmouseover=function(){
//				this.className='enjoy_zy';
//			}
//			imgObj[j].onmouseout=function(){
//				this.className='';
//			}
//		}
//	}
//样式3
//	var left_bObj=document.getElementById('game').getElementsByClassName('left_b');
//	for (var i = 0; i < left_bObj.length; i++) {
//		var imgObj=left_bObj[i].getElementsByTagName('img');
//		for (var j = 0; j < imgObj.length; j++) {
//			imgObj[j].onmouseover=function(){
//				this.className='enjoy_zy';
//			}
//			imgObj[j].onmouseout=function(){
//				this.className='';
//			}
//		}
//	}
	
//爱生活END
//领奖中心
//	var caseObj=document.getElementById('Togoo').getElementsByClassName('case');
//	for (var i = 0; i < caseObj.length; i++) {
//		caseObj[i].getElementsByTagName('img')[0].onmouseover=function(){
//			this.className='ticket_zy';
//		}
//		caseObj[i].getElementsByTagName('img')[0].onmouseout=function(){
//			this.className='';
//		}
//	}
//领奖中心END
	
//享品质
//	var caseObj=document.getElementById('enjoy').getElementsByClassName('case');
//	var box_bObj=document.getElementById('enjoy').getElementsByClassName('box_b');
//	for (var i = 0; i < caseObj.length; i++) {
//		caseObj[i].getElementsByTagName('img')[0].onmouseover=function(){
//			this.className='enjoy_zy';
//		}
//		caseObj[i].getElementsByTagName('img')[0].onmouseout=function(){
//			this.className='';
//		}
//	}
//	for (var i = 0; i < box_bObj.length; i++) {
//		box_bObj[i].getElementsByTagName('img')[0].onmouseover=function(){
//			this.className='enjoy_zy';
//		}
//		box_bObj[i].getElementsByTagName('img')[0].onmouseout=function(){
//			this.className='';
//		}
//	}
//享品质END
//轮播图
	var liObj=document.getElementById('lists').getElementsByTagName('li');
	var imgObj=document.getElementById('carousel').getElementsByTagName('img');
	var carouselObj=document.getElementById('carousel');
	var arrowObj=carouselObj.getElementsByTagName('div');
	var time='';
	var sum=0;
	for (var i = 0; i < liObj.length; i++) {
		liObj[i].setAttribute('index',i);		
		liObj[i].onmouseover=function(){
			var index = this.getAttribute('index');
			sum=index;
			for (var j = 0; j < liObj.length; j++) {
				liObj[j].className='';
				imgObj[j].className='';
			}
			this.className='on';
			imgObj[sum].className='show';
		}
	}
	
	carouselObj.onmouseover=function(){
		for (var k = 0; k < arrowObj.length; k++) {
			arrowObj[k].style.display='block';
			arrowObj[k].onclick=function(){
				if(this.id=='prev'){
					sum--;
					if(sum<0){
						sum=liObj.length-1;
					}
					for (var j = 0; j < liObj.length; j++) {
						liObj[j].className='';
						imgObj[j].className='';
					}
					liObj[sum].className='on';
					imgObj[sum].className='show';
				}
				else{
					clock();
				}
			}
		}
		
		clearInterval(time);
	}
	
	carouselObj.onmouseout=function(){
		for (var i = 0; i < arrowObj.length; i++) {
			arrowObj[i].style.display='none';
		}
		time=setInterval(function(){
		clock();
	},800)
	}
	
	
	time=setInterval(function(){
		clock();
	},800)
	
	function clock(){
		sum++;
		if(sum==liObj.length){
			sum=0;
		}
		for (var j = 0; j < liObj.length; j++) {
				liObj[j].className='';
				imgObj[j].className='';
			}
			liObj[sum].className='on';
			imgObj[sum].className='show';
	}
//轮播图END