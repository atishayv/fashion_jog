Ext.define('fashionJog.view.mainView',{
	
	extend: 'Ext.Panel',
	xtype: 'mainView',
	
	config:{
		cls: 'mainViewCls',
		layout: 'card',
		listeners:{},
		
		items:[
		       {
		    	   docked: 'top',
	               xtype: 'titlebar',
	               html:'<div class="top-bar">'+ // Header Top Bar Start 
						  '<div class="container">'+
							 '<div class="follow-us pull-right">'+
								'<ul class="social pull-left">'+
								   '<li class="facebook"><a target="_blank" href="https://www.facebook.com/fashionjog?ref=br_tf"><i class="fa fa-facebook"></i></a></li>'+
								   '<li class="twitter"><a target="_blank" href="https://twitter.com/UrvashiVerma19"><i class="fa fa-twitter"></i></a></li>'+
								   '<li class="linkedin"><a target="_blank" href="http://in.linkedin.com/in/uverma"><i class="fa fa-linkedin"></i></a></li>'+
								'</ul>'+
							 '</div>'+
			               '</div>'+
			            '</div>'+ // Header Top Bar End
			            
			            '<nav class="bottom-bar" role="navigation primary" data-behavior="sticky_header">'+  // Header bottom bar start
							'<ul>'+
								'<li class="bottom-bar__logo"><div class="pull-left" style="height:100%;width:100%"><h1 style="color:white;margin: 35px 0px 30px 40px;">FashionJog</h1></div></li>'+
								'<li onclick="fashionJog.app.getController(\'MainController\').switchView(0)"><a href="#">Home</a></li>'+
								'<li onclick="fashionJog.app.getController(\'MainController\').switchView(1)"><a href="#">News</a></li>'+
								'<li onclick="fashionJog.app.getController(\'MainController\').switchView(2)"><a href="#">Blogs</a></li>'+
								'<li onclick="fashionJog.app.getController(\'MainController\').switchView(3)"><a href="#">Fashion Shows</a></li>'+
								'<li onclick="fashionJog.app.getController(\'MainController\').switchView(4)"><a href="#">About</a></li>'+
							'</ul>'+
						'</nav>' // Header bottom bar end
		       },
		       {
		    	xtype:'homeView',
		    	xclass:'fashionJog.view.homeView'
		       },
		       {
			    xtype:'newsView',
			    xclass:'fashionJog.view.newsView'
			   },
			   {
				xtype:'blogView',
				xclass:'fashionJog.view.blogView'
			   },
			   {
				xtype:'fashionShowView',
				xclass:'fashionJog.view.fashionShowView'
			   },
			   {
				xtype:'aboutView',
				xclass:'fashionJog.view.aboutView'
			   },
			   {
				xtype:'blogDetailsView',
				xclass:'fashionJog.view.blogDetailsView'
			   },
			   {
		    	   docked: 'bottom',
	               xtype: 'titlebar',
	               html:'<footer id="footer">'+ //<!-- Footer Start -->
	            //<!-- Footer Top Start -->
	            '<div class="footer-top">'+
	               '<div class="container">'+
	                  '<div class="row">'+
	                     '<section class="col-lg-3 col-md-3 col-xs-12 col-sm-3 footer-one">'+
	                        '<h3>About</h3>'+
	                        '<p>We are an online womens fashion store that sells accessories, jewelry, purses and beauty products. The items are inexpensive and cute.</p>'+
	                     '</section>'+
	                     '<section class="col-lg-3 col-md-3 col-xs-12 col-sm-3 footer-two">'+
	                        '<h3>Twitter Stream</h3>'+
	                        '<ul id="tweets">'+
							'<li style="opacity:1">'+
							'<p class="content">"Million dollar ideas are a dime a dozen. The determination to see the idea through is whats priceless." #startups</p>'+
							'</li>'+
	                        '</ul>'+
	                     '</section>'+
	                     '<section class="col-lg-3 col-md-3 col-xs-12 col-sm-3 footer-three">'+
	                        '<h3>Contact Us</h3>'+
	                        '<ul class="contact-us">'+
	                           '<li>'+
	                              '<i class="fa fa-map-marker"></i>'+
	                              '<p>'+ 
	                                 '<strong class="contact-pad">Address:</strong> House: 325, Road: 2,<br> BTM 2nd stage <br>Karnataka, India</p>'+
	                           '</li>'+
	                           '<li>'+
	                              '<i class="fa fa-phone"></i>'+
	                              '<p><strong>Phone:</strong> +91 7829464101</p>'+
	                           '</li>'+
	                           '<li>'+
	                              '<i class="fa fa-envelope"></i>'+
	                              '<p><strong>Email:</strong><a href="mailto:support@fifothemes.com">atishayv@gmail.com</a></p>'+
	                           '</li>'+
	                        '</ul>'+
	                     '</section>'+
	                     '<section class="col-lg-3 col-md-3 col-xs-12 col-sm-3 footer-four">'+
	                        '<h3>Flickr Photostream</h3>'+
	                        '<ul id="flickrfeed" class="thumbs"></ul>'+
	                     '</section>'+
	                  '</div>'+
	               '</div>'+
	            '</div>'+
	            //<!-- Footer Top End --> 
	            //<!-- Footer Bottom Start -->
	            '<div class="footer-bottom">'+
	               '<div class="container">'+
	                  '<div class="row">'+
	                     '<div class="col-lg-6 col-md-6 col-xs-12 col-sm-6 "> &copy; Copyright 2014 by <a href="#">FashionJog</a>. All Rights Reserved. </div>'+
	                     '<div class="col-lg-6 col-md-6 col-xs-12 col-sm-6 ">'+
	                        '<ul class="social social-icons-footer-bottom">'+
	                           '<li class="facebook"><a href="#" data-toggle="tooltip" title="Facebook"><i class="fa fa-facebook"></i></a></li>'+
	                           '<li class="twitter"><a href="#" data-toggle="tooltip" title="Twitter"><i class="fa fa-twitter"></i></a></li>'+
	                           '<li class="linkedin"><a href="#" data-toggle="tooltip" title="LinkedIn"><i class="fa fa-linkedin"></i></a></li>'+
	                        '</ul>'+
	                     '</div>'+
	                  '</div>'+
	               '</div>'+
	            '</div>'+
	            //<!-- Footer Bottom End --> 
	         '</footer>'
			   }
		       ]
		
	},
	
	initialize: function(){
		this.callParent(arguments);
		/*jQuery().waypoint && jQuery("body").imagesLoaded(function () {
	        jQuery(".animate_afc, .animate_afl, .animate_afr, .animate_aft, .animate_afb, .animate_wfc, .animate_hfc, .animate_rfc, .animate_rfl, .animate_rfr").waypoint(function () {
	            if (!jQuery(this).hasClass("animate_start")) {
	                var e = jQuery(this);
	                setTimeout(function () {
	                    e.addClass("animate_start")
	                }, 20)
	            }
	        }, {
	            offset: "85%",
	            triggerOnce: !0
	        })
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
	        
	    });*/
	},
	
});