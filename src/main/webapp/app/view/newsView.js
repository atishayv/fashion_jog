Ext.define('fashionJog.view.newsView',{
	
	extend: 'Ext.Panel',
	xtype: 'newsView',
	config:{
		cls: 'newsViewCls',
		listeners:{
			
		},
		
		items:[
		       {
				xtype: 'panel',
				html:'<section class="mainNewsSection">'+
		            '<div id="carousel" class="carousel slide carousel-fade">'+//<!-- CAROUSEL -->
	                '<div class="row"><div class="col-md-8 slide-col-1">'+
	                    '<div class="carousel-inner">'+
	                       // <!-- ITEM 1 -->
	                        '<div class="item active">'+
	                            '<img src="images/news/mainNews1.jpg" alt="">'+
	                            '<div class="filmgrain"></div>'+    
	                            '<div class="carousel-caption">'+
	                                '<h3>Pellentesque habitant morbi tristique senectus</h3>'+
	                                '<p class="by-line">By Arthur Daley</p>'+
	                                '<p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. </p>'+
	                            '</div>'+
	                        '</div>'+
	                        //<!-- ITEM 2 -->
	                        '<div class="item">'+
	                            '<img src="images/news/mainNews2.jpg" alt="">'+
	                            '<div class="filmgrain"></div>'+
	                            '<div class="carousel-caption">'+
	                                '<h3>Quisque sit amet est et sapien ullamcorper pharetra</h3>'+
	                                '<p class="by-line">By Arthur Daley</p>'+
	                                '<p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. </p>'+
	                            '</div>'+
	                        '</div>'+
	                        //<!-- ITEM 3 -->
	                        '<div class="item">'+
	                            '<img src="images/news/mainNews3.jpg" alt="">'+
	                            '<div class="filmgrain"></div>'+
	                            '<div class="carousel-caption">'+
	                                '<h3>Vestibulum tortor quam</h3>'+
	                                '<p class="by-line">By Arthur Daley</p>'+
	                                '<p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. </p>'+
	                            '</div>'+
	                        '</div>'+
	                        //<!-- ITEM 4 -->
	                        '<div class="item">'+
	                            '<img src="images/news/mainNews4.jpg" alt="">'+
	                            '<div class="filmgrain"></div>'+
	                            '<div class="carousel-caption">'+
	                                '<h3>Donec eu libero sit amet quam egestas semper</h3>'+
	                                '<p class="by-line">By Arthur Daley</p>'+
	                                '<p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. </p>'+
	                            '</div>'+
	                        '</div>'+
	                    '</div>'+
	                    //<!-- CAROUSEL CONTROLS -->
	                    '<a class="left carousel-control" href="#carousel" data-slide="prev">'+
	                        '<span class="icon-prev"><span class="icon-left-arrow"></span></span>'+
	                    '</a>'+
	                    '<a class="right carousel-control" href="#carousel" data-slide="next">'+
	                        '<span class="icon-next"><span class="icon-right-arrow"></span></span>'+
	                    '</a>'+
	                    '</div>'+
	                    '<div class="col-md-4 slide-col-2 hidden-sm hidden-xs">'+//<!-- CAROUSEL PREVIEW -->
	                        '<ul class="carousel-indicators">'+
	                            '<li data-target="#carousel" data-slide-to="0" class="active">'+
	                                '<div class="item-img">'+
	                                    '<div class="dot-overlay"></div>'+
	                                    '<img src="images/news/mainNewsSmall1.jpg" alt="">'+
	                                '</div>'+
	                                '<div class="slide-preview">'+
	                                    '<p>Pellentesque habitant morbi tristique senectus</p>'+
	                                    '<p class="by-line"><span>By Arthur Daley</span></p>'+
	                                '</div>'+
	                            '</li>'+
	                            '<li data-target="#carousel" data-slide-to="1">'+
	                                '<div class="item-img">'+
	                                    '<div class="dot-overlay"></div>'+
	                                    '<img src="images/news/mainNewsSmall2.jpg" alt="">'+
	                                '</div>'+
	                                '<div class="slide-preview">'+
	                                    '<p>Quisque sit amet est et sapien ullamcorper pharetra</p>'+
	                                    '<p class="by-line"><span>By Arthur Daley</span></p>'+
	                                '</div>'+
	                            '</li>'+
	                            '<li data-target="#carousel" data-slide-to="2">'+
	                                '<div class="item-img">'+
	                                    '<div class="dot-overlay"></div>'+
	                                    '<img src="images/news/mainNewsSmall3.jpg" alt="">'+
	                                '</div>'+
	                                '<div class="slide-preview">'+
	                                    '<p>Vestibulum tortor quam</p>'+
	                                    '<p class="by-line"><span>By Arthur Daley</span></p>'+
	                                '</div>'+
	                            '</li>'+
	                            '<li data-target="#carousel" data-slide-to="3">'+
	                                '<div class="item-img">'+
	                                    '<div class="dot-overlay"></div>'+
	                                    '<img src="images/news/mainNewsSmall4.jpg" alt="">'+
	                                '</div>'+
	                                '<div class="slide-preview">'+
	                                    '<p>Donec eu libero sit amet quam egestas semper</p>'+
	                                    '<p class="by-line"><span>By Arthur Daley</span></p>'+
	                                '</div>'+
	                            '</li>'+
	                        '</ul>'+
	                    '</div>'+//<!-- END CAROUSEL PREVIEW -->
	                '</div>'+ 
	            '</div>'+//<!-- END CAROUSEL -->
	        '</section>'+
	        
	        
	        
	        '<section id="features" class="subNewsSection">'+//<!-- FEATURE BLOCKS -->
            '<div class="row">'+
                '<div class="col-xs-6 col-sm-6 col-md-4 features-col">'+
                    '<div class="item-img">'+
                        '<div class="dot-overlay"></div>'+
                        '<a href="#">'+
                            '<img src="images/news/image-17.jpg" alt="">'+
                        '</a>'+
                    '</div>'+
                    '<div class="feature-title">'+
                        '<h3>Donec eu libero sit amet quam</h3>'+
                        '<p class="by-line">By Arthur Daley</p>'+
                    '</div>'+
                    '<div class="feature-content">'+
                        '<p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>'+
                    '</div>'+  
                    '<a href="#" class="btn btn-primary">Read more</a>'+
                '</div>'+
                '<div class="col-xs-6 col-sm-6 col-md-4 features-col">'+
                    '<div class="item-img">'+
                        '<div class="dot-overlay"></div>'+
                        '<a href="#">'+
                            '<img src="images/news/image-2.jpg" alt="">'+
                        '</a>'+
                    '</div>'+
                    '<div class="feature-title">'+
                        '<h3>Vestibulum tortor quam feugiat</h3>'+
                        '<p class="by-line">By Johnny B. Good</p>'+
                    '</div>'+
                    '<div class="feature-content">'+  
                        '<p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>'+
                    '</div>'+       
                    '<a href="#" class="btn btn-primary">Read more</a>'+
                '</div>'+
                '<div class="hidden-xs hidden-sm col-md-4 features-col">'+
                    '<div class="item-img">'+
                        '<div class="dot-overlay"></div>'+
                        '<a href="#">'+
                            '<img src="images/news/image-9.jpg" alt="">'+
                        '</a>'+
                    '</div>'+
                    '<div class="feature-title">'+
                        '<h3>Mauris placerat eleifend leo</h3>'+
                        '<p class="by-line">By Lucy Snodgrass</p>'+
                    '</div>'+
                    '<div class="feature-content">'+  
                        '<p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>'+
                    '</div>'+       
                    '<a href="#" class="btn btn-primary">Read more</a>'+
                '</div>'+
            '</div>'+
        '</section>',
	        
		       }
		      ]
	},
	
	initialize: function(){
		this.callParent(arguments);
		this.on('painted',function(){
			console.log('news View painted');
		});
	}
});