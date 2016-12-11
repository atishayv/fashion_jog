Ext.define('fashionJog.view.homeView',{
	
	extend: 'Ext.Panel',
	xtype: 'homeView',
	config:{
		cls: 'homeViewCls',
		listeners:{
			show : function(){
				setTimeout(function(){
					$(".homeViewCls .recent-news").hover(
							  function() {
								  jQuery(".animate_afc, .animate_afl, .animate_afr, .animate_aft, .animate_afb, .animate_wfc, .animate_hfc, .animate_rfc, .animate_rfl, .animate_rfr").each(function () {
							            if (!jQuery(this).hasClass("animate_start")) {
							                var e = jQuery(this);
							               // setTimeout(function () {
							                    e.addClass("animate_start");
							                //}, 10);
							            }
							        
							        });
								  
								  jQuery('.portfolio-item').hover(function () {
										jQuery(this).find( '.portfolio-item-hover' ).animate({
											"opacity": 0.8
										}, 100, 'easeInOutCubic');
										
										
									}, function () {
										jQuery(this).find( '.portfolio-item-hover' ).animate({
											"opacity": 0
										}, 100, 'easeInOutCubic');
										
								});
								
								jQuery('.portfolio-item').hover(function () {
							       jQuery(this).find(".fullscreen").stop().animate({'top' : '60%', 'opacity' : 1}, 250, 'easeOutBack');
								   jQuery(this).find(".portfolio-item-title").addClass('bg-color');
							        
							    }, function () {
							        jQuery(this).find(".fullscreen").stop().animate({'top' : '65%', 'opacity' : 0}, 150, 'easeOutBack');
									jQuery(this).find(".portfolio-item-title").removeClass('bg-color');
							        
							    });
								  }, function() {
									  $( ".homeViewCls .recent-news" ).off( "mouseenter mouseleave" );
								  }
					);
				},500);
				
			}
		},
		
		items:[
		       {
				xtype: 'panel',
				html:'<div class="front-screen">'+ //front screen image starts
						'<div class="front-screen_poster">'+
					'<div class="front-screen_poster-inner" data-behavior="homepage_poster_fit">'+
						'<img sizes="(min-width:980px) 1600px, (max-width:640px) 320px" src="http://31.media.tumblr.com/b05152b18e9c5d7423dc7d7b468db3bf/tumblr_msk52c0bNC1qz8q0ho1_1280.jpg"></img>'+
					'</div>'+
				'</div>'+
				
				'<div class="front-screen_caption">'+
					'<div class="grid-container">'+
						'<div class="grid-row">'+
							'<hgroup class="home-hero-caption">'+
								'<h1>The Tip Off</h1>'+
								'<h2>NBA Season Starts Today - Check Out the Most Stylish B-Ball Moments From the League and Beyond</h2>'+
							'</hgroup>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>' +  //front screen image ends
			
			
			
	            '<div class="recent-news bottom-pad">'+ //Recent news start
	               '<div class="container">'+
	                  '<div class="row">'+
	                     '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 animate_afl d1">'+
	                        '<h3 class="title">Recent News</h3>'+
	                     '</div>'+
	                  '</div>'+
	                  '<div class="row">'+
	                     '<div class="col-lg-12 col-md-12 col-xs-12">'+
	                        '<div class="row portfolio-pad">'+
	                           '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item animate_afc d2">'+
	                              '<div class="portfolio-item">'+
	                                 '<a href="#" class="portfolio-item-link" data-rel="prettyPhoto" >'+
	                                    '<span class="portfolio-item-hover"></span>'+
	                                    '<span class="fullscreen"><i class="fa fa-search"></i></span><img src="images/home/recent-news/1.jpg" alt=" "/>'+
	                                 '</a>'+
	                                 '<div class="portfolio-item-title">'+
	                                    '<a href="#">BEAUTY CORNER</a>'+
	                                       '<p>Get Emma Stones Boho Bangs and Copy Her Effortless Blow-Out</p>'+
	                                 '</div>'+
	                                 '<div class="clearfix"></div>'+
	                              '</div>'+
	                           '</div>'+
	                           '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item animate_afc d3">'+
	                               '<div class="portfolio-item">'+
	                                  '<a href="#" class="portfolio-item-link" data-rel="prettyPhoto" >'+
	                                  '<span class="portfolio-item-hover"></span><span class="fullscreen"><i class="fa fa-search"></i></span><img src="images/home/recent-news/2.jpg" alt=" "/>'+
	                                  '</a>'+
	                                  '<div class="portfolio-item-title">'+
	                                     '<a href="#">STYLE FILE</a>'+
	                                     '<p>Emerging Talents Give Dover Street Market New York a New Beginning</p>'+
	                                  '</div>'+
	                                  '<div class="clearfix"></div>'+
	                               '</div>'+
	                           '</div>'+
	                           '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item animate_afc d4">'+
	                               '<div class="portfolio-item">'+
	                                  '<a href="#" class="portfolio-item-link" data-rel="prettyPhoto" >'+
	                                  '<span class="portfolio-item-hover"></span><span class="fullscreen"><i class="fa fa-search"></i></span><img src="images/home/recent-news/3.jpg" alt=" "/>'+
	                                  '</a>'+
	                                  '<div class="portfolio-item-title">'+
	                                     '<a href="#">BEAUTY CORNER</a>'+
	                                     '<p>The Hottest Beauty Trends to Pair With Your Bikini</p>'+
	                                  '</div>'+
	                                  '<div class="clearfix"></div>'+
	                               '</div>'+
	                           '</div>'+
	                        '</div>'+
	                        '<div class="row">'+
	                           '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item animate_afc d5">'+
	                               '<div class="portfolio-item">'+
	                                  '<a href="#" class="portfolio-item-link" data-rel="prettyPhoto" >'+
	                                  '<span class="portfolio-item-hover"></span><span class="fullscreen"><i class="fa fa-search"></i></span><img src="images/home/recent-news/4.jpg" alt=" "/>'+
	                                  '</a>'+
	                                  '<div class="portfolio-item-title">'+
	                                     '<a href="#">AMSTERDAM</a>'+
	                                     '<p>AFW Report: Three Dutch Designers You Need to Know</p>'+
	                                  '</div>'+
	                                  '<div class="clearfix"></div>'+
	                               '</div>'+
	                           '</div>'+
	                           '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item animate_afc d6">'+
	                               '<div class="portfolio-item">'+
	                                  '<a href="#" class="portfolio-item-link" data-rel="prettyPhoto" >'+
	                                  '<span class="portfolio-item-hover"></span><span class="fullscreen"><i class="fa fa-search"></i></span><img src="images/home/recent-news/5.jpeg" alt=" "/>'+
	                                  '</a>'+
	                                  '<div class="portfolio-item-title">'+
	                                     '<a href="#">PARIS</a>'+
	                                     '<p>Sarah Andelman Shares Her Top Ten from the New Collections</p>'+
	                                  '</div>'+
	                                  '<div class="clearfix"></div>'+
	                               '</div>'+
	                           '</div>'+
	                           '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item animate_afc d7">'+
	                               '<div class="portfolio-item">'+
	                                  '<a href="#" class="portfolio-item-link" data-rel="prettyPhoto" >'+
	                                  '<span class="portfolio-item-hover"></span><span class="fullscreen"><i class="fa fa-search"></i></span><img src="images/home/recent-news/6.jpg" alt=" "/>'+
	                                  '</a>'+
	                                  '<div class="portfolio-item-title">'+
	                                     '<a href="#">STYLE FILE</a>'+
	                                     '<p>The 15 Stylish Looks You Loved Most This Week</p>'+
	                                  '</div>'+
	                                  '<div class="clearfix"></div>'+
	                               '</div>'+
	                           '</div>'+
	                        '</div>'+
	                           '<div class="clearfix"></div>'+
	                     '</div>'+
	                  '</div>'+
	               '</div>'+
	            '</div>'+      // Recent news end
	            
	            //<!-- video fashion week  start-->
				'<div class="video-container">'+
					'<div class="overlay">'+
						'<div class="overlay-content">'+
							'<h1> Fashion Week 2014</h1>'+
						'</div>'+
					'</div>'+
					
					'<video autoplay="autoplay" loop="loop" preload="auto" poster="/img/home-page-poster.jpeg" data-video-name="home">'+
						'<source src="images/home/fashionVideo.mp4" type="video/mp4">'+
					'</video>'+
				'</div>'+
				//<!-- video fashion week ends -->
				
				
				//<!---folksverona start-->
				'<div style="overflow:hidden">'+
					'<div class="container">'+
						'<div class="row" id="instagram_cont">'+
							'<h2>#folksverona</h2>'+
							'<div class="col-md-4 col-md-offset-4">'+
								'<div id="instagram" class="clearfix">'+
									'<div class="sliderCont"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div></div>'//<!---folksverona end-->
		       
		       }
		       
		      ]
	},
	
	initialize: function(){
		this.callParent(arguments);
	},
	
});