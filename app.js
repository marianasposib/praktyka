
$(function(){
	
//Sliders

let slider=$("#slider");

	slider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: false,
	  arrows: false,
	  dots: true
	});

	
let reviews_slider=$("#reviews_slider");
	reviews_slider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  arrows: false,
	  dots: true
	});
	
	$(".slickPrev").on("click", function(){
		
		reviews_slider.slick("slickPrev");
	});
	
	
	$(".slickNext").on("click", function(){
		
		reviews_slider.slick("slickNext");
	});
	
//Fixed Header
	
	let header=$("#header");
	let intro=$("#intro");
	let introH;
	let scrollPos=$(window).scrollTop();
	
	$(window).on("scroll load resize", function(){
		introH=intro.innerHeight();
		scrollPos=$(this).scrollTop();
		
		if(scrollPos + 10>introH){
			header.addClass("fixed");
		}
		
		else{
			header.removeClass("fixed");
		}
	});
	
	
//Contact us
	
	let btn=$("#btn");
	
	btn.on("click", function(){
		
	let contactOffset=$("#contact").offset().top;
	
	$("html, body").animate({
		scrollTop: contactOffset
		},1);
		
	});
	

//Smooth scroll
	
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();
		
		$("#burger_list").removeClass("show");
		
		let elementId=$(this).data("scroll");
		let elementOffset=$(elementId).offset().top;
		
		$("html, body").animate({
			scrollTop: elementOffset
		},800);
	});
	
//Nav Toggle
	
	$("#burger").on("click", function(){
		
		$("#burger_list").toggleClass("show");
					
	});
	

});
