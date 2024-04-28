$(function(){
	'use-strict';

	$(".side-nav-left").sideNav({

		edge: 'right',
		closeOnClick: false

	});

	$("#cart-menu").animatedModal();
	
	$("#nav-menu").animatedModal({
		modalTarget: 'animatedModal2'
	});


	// slider
	$(".slider").slider({full_width: true});


	// screenshot
	$(".screenshot-content").owlCarousel({

		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,


	})

	// testimonial
	$("#owl-testimonial").owlCarousel({

		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,

	})

	// latest-news
	$(".latest-news-owl").owlCarousel({

		autoPlay : false,
		singleItem: true

	})

	// loader
    $("#fakeLoader").fakeLoader({
      
      zIndex: 999,
      spinner: 'spinner4',
      bgColor: '#fff'

    });

    $('.collapsible').collapsible({
		accordion: false
	});

    $('select').material_select();
    
});