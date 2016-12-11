Ext.define('fashionJog.view.blogView',{
	
	extend: 'Ext.Panel',
	xtype: 'blogView',
	config:{
		cls: 'blogViewCls',
		listeners:{},
		
		items:[
		       {
				xtype: 'panel',
				html:'<div class="blog-section">'+//<!-- blog boxes section starts -->
				 
				'<div class="col-lg-6 col-xl-5">'+
					'<div class="row">'+
						'<article class="entry1 entries col-md-8 col-lg-12">'+
							'<div class="ribbon">'+
								'<a href"#">Category Name</a>'+
							'</div>'+
							'<header class="entry-header">'+
								'<h3 class="entry-title"><a href="#">This can be use for hand picked featured posts by staffs - sit voluptatem accusantium doloremque laudantium</a></h3>'+
							'</header>'+
							'<figure class="entry-thumbnail">'+
								'<a href="#"></a>'+
								'<img src="images/blog/entry1.jpg" data-src="images/blog/entry1.jpg" data-src-retina="images/blog/entry1.jpg" width="680" height="452" alt style="opacity: 1;"></img>'+
							'</figure>'+
						'</article>'+
						'<article class="entry2 entries col-md-4 col-lg-6">'+
							'<div class="ribbon">'+
								'<a href"#">Category Name</a>'+
							'</div>'+
							'<header class="entry-header">'+
								'<h3 class="entry-title"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit</a></h3>'+
							'</header>'+
							'<figure class="entry-thumbnail">'+
								'<a href="#"></a>'+
								'<img src="images/blog/entry2.jpg" data-src="images/blog/entry1.jpg" data-src-retina="images/blog/entry1.jpg" width="680" height="452" alt style="opacity: 1;"></img>'+
							'</figure>'+
						'</article>'+
						'<article class="entry2 entries col-md-4 col-lg-6">'+
							'<div class="ribbon">'+
								'<a href"#">Category Name</a>'+
							'</div>'+
							'<header class="entry-header">'+
								'<h3 class="entry-title"><a href="#">Postman will send notifications to your flashy smartphone about popular people and their latest shouts.</a></h3>'+
							'</header>'+
							'<figure class="entry-thumbnail">'+
								'<a href="#"></a>'+
								'<img src="images/blog/entry3.jpg" data-src="images/blog/entry1.jpg" data-src-retina="images/blog/entry1.jpg" width="680" height="452" alt style="opacity: 1;"></img>'+
							'</figure>'+
						'</article>'+
					'</div>'+
				'</div>'+
				
				'<div class="col-lg-6 col-xl-7">'+
					'<div class="row">'+
						'<article class="entry2 entries col-md-4 col-lg-6">'+
							'<div class="ribbon">'+
								'<a href"#">Category Name</a>'+
							'</div>'+
							'<header class="entry-header">'+
								'<h3 class="entry-title"><a href="#">Rumor: The long awaited update for Retina Display is ready to be annaunced on the next event held by them</a></h3>'+
							'</header>'+
							'<figure class="entry-thumbnail">'+
								'<a href="#"></a>'+
								'<img src="images/blog/entry4.jpg" data-src="images/blog/entry1.jpg" data-src-retina="images/blog/entry1.jpg" width="680" height="452" alt style="opacity: 1;"></img>'+
							'</figure>'+
						'</article>'+
						'<article class="entry2 entries col-md-4 col-lg-6">'+
							'<div class="ribbon">'+
								'<a href"#">Category Name</a>'+
							'</div>'+
							'<header class="entry-header">'+
								'<h3 class="entry-title"><a href="#">This can be use for hand picked featured posts by staffs - sit voluptatem accusantium doloremque laudantium</a></h3>'+
							'</header>'+
							'<figure class="entry-thumbnail">'+
								'<a href="#"></a>'+
								'<img src="images/blog/entry5.jpg" data-src="images/blog/entry1.jpg" data-src-retina="images/blog/entry1.jpg" width="680" height="452" alt style="opacity: 1;"></img>'+
							'</figure>'+
						'</article>'+
						'<article class="entry1 entries col-md-4 col-lg-6">'+
							'<div class="ribbon">'+
								'<a href"#">Category Name</a>'+
							'</div>'+
							'<header class="entry-header">'+
								'<h3 class="entry-title"><a href="#">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</a></h3>'+
							'</header>'+
							'<figure class="entry-thumbnail">'+
								'<a href="#"></a>'+
								'<img src="images/blog/entry6.jpg" data-src="images/blog/entry1.jpg" data-src-retina="images/blog/entry1.jpg" width="680" height="452" alt style="opacity: 1;"></img>'+
							'</figure>'+
						'</article>'+
						'<article class="entry2 entries col-md-4 col-lg-6">'+
							'<div class="ribbon">'+
								'<a href"#">Category Name</a>'+
							'</div>'+
							'<header class="entry-header">'+
								'<h3 class="entry-title"><a href="#">Rumor: The long awaited update for Retina Display is ready to be annaunced on the next event held by them</a></h3>'+
							'</header>'+
							'<figure class="entry-thumbnail">'+
								'<a href="#"></a>'+
								'<img src="images/blog/entry7.jpg" data-src="images/blog/entry1.jpg" data-src-retina="images/blog/entry1.jpg" width="680" height="452" alt style="opacity: 1;"></img>'+
							'</figure>'+
						'</article>'+
						'<article class="entry2 entries col-md-4 col-lg-6">'+
							'<div class="ribbon">'+
								'<a href"#">Category Name</a>'+
							'</div>'+
							'<header class="entry-header">'+
								'<h3 class="entry-title"><a href="#">Postman will send notifications to your flashy smartphone about popular people and their latest shouts.</a></h3>'+
							'</header>'+
							'<figure class="entry-thumbnail">'+
								'<a href="#"></a>'+
								'<img src="images/blog/entry8.jpg" data-src="images/blog/entry1.jpg" data-src-retina="images/blog/entry1.jpg" width="680" height="452" alt style="opacity: 1;"></img>'+
							'</figure>'+
						'</article>'+
					'</div>'+
				'</div>'+
			 
			 '</div>'+	 
			 //<!-- blog boxes section ends -->	'
			 
			 
			 //<!--- blog list section starts-->
				
				'<div class="col-md-12 articles-container">'+
					'<div class="row">'+
						'<div class="col-md-6 col-sm-6 timeline-left">'+
							'<article class="article yellow" style="visibility: visible; -webkit-animation: fadeInUpBig;">'+
								'<div class="article-media-container">'+
									'<img src="images/blog/post1.jpg" alt="post 1">'+
								'</div>'+//<!-- End .article-media-container -->
								'<div class="article-meta-container">'+
									'<h2><a href="#" title="Lorem ipsum dolor sit amet.">Lorem ipsum dolor sit amet.</a></h2>'+
									'<p>Omnis officia, quibusdam tempore. Aspernatur dolores quibusdam, illo fuga similique rem itaque molestiae labore omnis, rerum ullam debitis, alias adipisci corporis. Quidem, ea nemo aperiam minus! Qui, vero sed. Laborum. <a href="#" class="readmore" title="Lorem ipsum dolor sit amet.">Readmore</a></p>'+
									'<div class="article-meta-box">'+
										'<div class="article-author">by <a href="#">Eon Dean</a></div>'+
										'<div class="article-comments">'+
											'<a href="#" title="21 Comment(s)">21 Comment(s)</a>'+
										'</div>'+
									'</div>'+//<!-- End .article-meta -->
								'</div>'+//<!-- End .article-meta-container -->
							'</article>'+//<!-- End .article -->
		                '</div>'+
						
						
						'<div class="col-md-6 col-sm-6 timeline-left">'+
							'<article class="article yellow" style="visibility: visible; -webkit-animation: fadeInUpBig;">'+
								'<div class="article-media-container">'+
									'<img src="images/blog/post1.jpg" alt="post 1">'+
								'</div>'+//<!-- End .article-media-container -->
								'<div class="article-meta-container">'+
									'<h2><a href="#" title="Lorem ipsum dolor sit amet.">Lorem ipsum dolor sit amet.</a></h2>'+
									'<p>Omnis officia, quibusdam tempore. Aspernatur dolores quibusdam, illo fuga similique rem itaque molestiae labore omnis, rerum ullam debitis, alias adipisci corporis. Quidem, ea nemo aperiam minus! Qui, vero sed. Laborum. <a href="#" class="readmore" title="Lorem ipsum dolor sit amet.">Readmore</a></p>'+
									'<div class="article-meta-box">'+
										'<div class="article-author">by <a href="#">Eon Dean</a></div>'+
										'<div class="article-comments">'+
											'<a href="#" title="21 Comment(s)">21 Comment(s)</a>'+
										'</div>'+
									'</div>'+//<!-- End .article-meta -->
								'</div>'+//<!-- End .article-meta-container -->
							'</article>'+//<!-- End .article -->
		                '</div>'+
						
					'</div>'+
				
				'</div>'+
				
				
				
			//	<!--- blog list section ends-->		
					
					
					
				//<!--recent blogs scroller starts-->
				
				'<div id="coverageCarousel" class="section bg-primary carousel carousel slide">'+

						'<h2 class="section-title ribbon ribbon-highlight"><span>Recent Blogs</span></h2>'+
						'<div class="carousel-inner">'+
							'<div class="item">'+
								'<h2 class="section-title ribbon ribbon-highlight"><a href="#"> xPhone launch event</a></h2>'+

								'<div class="row entries">'+
									'<article class="entry style-grid type-post col-md-6 col-lg-3 colheight-sm-1">'+
										'<header class="entry-header">'+
											'<p class="small"><a href="#">Review</a></p>'+
											'<h3 class="entry-title"><a href="#">xPhone first hand: Check out, this might be the right phone for you</a> </h3>'+
											'<div class="entry-meta">'+
												'<span class="entry-date"><a href="#"><time datetime="2013-07-04T23:26:34+00:00">20 hours ago</time></a></span>'+
												'<span class="entry-author"> by <a href="#">John Doe</a></span>'+
											'</div>'+
										'</header>'+
										
										'<figure class="entry-thumbnail">'+
											'<a href="#" class="overlay overlay-primary"></a>'+
											//<!-- to disable lazy loading, remove data-src and data-src-retina -->
											'<img src="images/blog/entry1.jpg" data-src="../uploads/480x280_1.jpg" data-src-retina="../uploads/720x420_1.jpg" width="480" height="280" alt="" style="opacity: 1;">'+
										'</figure>'+
									'</article>'+

									'<article class="entry style-grid type-post col-md-6 col-lg-3 colheight-sm-1">'+
										'<header class="entry-header">'+
											'<p class="small"><a href="#">Event Report</a></p>'+
											'<h3 class="entry-title"><a href="#">The rumor was not a joke, lorem ispsum dolor sit amet constactetiour.</a> </h3>'+
											'<div class="entry-meta">'+
												'<span class="entry-date"><a href="#"><time datetime="2013-07-04T23:26:34+00:00">20 hours ago</time></a></span>'+
												'<span class="entry-author"> by <a href="#">John Doe</a></span>'+
											'</div>'+
										'</header>'+
										'<figure class="entry-thumbnail">'+

											'<a href="#" class="overlay overlay-primary"></a>'+

											//<!-- to disable lazy loading, remove data-src and data-src-retina -->
											'<img src="images/blog/entry2.jpg" data-src="../uploads/680x452_1.jpg" data-src-retina="../uploads/1024x680_1.jpg" width="680" height="452" alt="" style="opacity: 1;">'+

										'</figure>'+

									'</article>'+

									'<article class="entry style-grid type-post col-md-6 col-lg-3 colheight-sm-1">'+
										'<header class="entry-header">'+
											'<p class="small"><a href="#">Event Report</a></p>'+
											'<h3 class="entry-title"><a href="#">The Event is starting Now. Grab your popcorn, beer and notes.</a> </h3>'+
											'<div class="entry-meta">'+
												'<span class="entry-date"><a href="#"><time datetime="2013-07-04T23:26:34+00:00">20 hours ago</time></a></span>'+
												'<span class="entry-author"> by <a href="#">John Doe</a></span>'+
											'</div>'+
										'</header>'+
										
										'<figure class="entry-thumbnail">'+

											'<a href="#" class="overlay overlay-primary"></a>'+

											//<!-- to disable lazy loading, remove data-src and data-src-retina -->
											'<img src="images/blog/entry3.jpg" data-src="../uploads/480x280_3.jpg" data-src-retina="../uploads/720x420_3.jpg" width="480" height="280" alt="" style="opacity: 1;">'+
										'</figure>'+

									'</article>'+

									'<article class="entry style-grid type-post col-md-6 col-lg-3 colheight-sm-1">'+
										'<header class="entry-header">'+
											'<p class="small"><a href="#">Speculation</a></p>'+
											'<h3 class="entry-title"><a href="#">Rumor: The long awaited update for Retina Display is ready to be annaunced on the next event held by them</a> </h3>'+
											'<div class="entry-meta">'+
												'<span class="entry-date"><a href="#"><time datetime="2013-07-04T23:26:34+00:00">20 hours ago</time></a></span>'+
												'<span class="entry-author"> by <a href="#">John Doe</a></span>'+
											'</div>'+
										'</header>'+
										
										'<figure class="entry-thumbnail">'+

											'<a href="#" class="overlay overlay-primary"></a>'+

										//	<!-- to disable lazy loading, remove data-src and data-src-retina -->
											'<img src="images/blog/entry4.jpg" data-src="../uploads/480x280_4.jpg" data-src-retina="../uploads/720x420_4.jpg" width="480" height="280" alt="" style="opacity: 1;">'+


										'</figure>'+

									'</article>'+

								'</div>'+//<!--/.row.entries-->

							'</div>'+//<!--/.item-->
							'<div class="item active">'+
								'<h2 class="section-title ribbon ribbon-highlight"><a href="#"> #WCDC 2013</a></h2>'+
								
								'<div class="row entries">'+

									'<article class="entry style-grid type-post col-md-6 col-lg-3 colheight-sm-1">'+
										'<header class="entry-header">'+
											'<p class="small"><a href="#">Event Report</a></p>'+
											'<h3 class="entry-title"><a href="#">The Event is starting Now. Grab your popcorn, beer and notes.</a> </h3>'+
											'<div class="entry-meta">'+
												'<span class="entry-date"><a href="#"><time datetime="2013-07-04T23:26:34+00:00">20 hours ago</time></a></span>'+
												'<span class="entry-author"> by <a href="#">John Doe</a></span>'+
											'</div>'+
										'</header>'+
										
										'<figure class="entry-thumbnail">'+

											'<a href="#" class="overlay overlay-primary"></a>'+

											//<!-- to disable lazy loading, remove data-src and data-src-retina -->
											'<img src="images/blog/entry5.jpg" data-src="../uploads/480x280_3.jpg" data-src-retina="../uploads/720x420_3.jpg" width="480" height="280" alt="" style="opacity: 1;">'+


										'</figure>'+

									'</article>'+

									'<article class="entry style-grid type-post col-md-6 col-lg-3 colheight-sm-1">'+
										'<header class="entry-header">'+
											'<p class="small"><a href="#">Speculation</a></p>'+
											'<h3 class="entry-title"><a href="#">Rumor: The long awaited update for Retina Display is ready to be annaunced on the next event held by them</a> </h3>'+
											'<div class="entry-meta">'+
												'<span class="entry-date"><a href="#"><time datetime="2013-07-04T23:26:34+00:00">20 hours ago</time></a></span>'+
												'<span class="entry-author"> by <a href="#">John Doe</a></span>'+
											'</div>'+
										'</header>'+
										
										'<figure class="entry-thumbnail">'+

											'<a href="#" class="overlay overlay-primary"></a>'+

											//<!-- to disable lazy loading, remove data-src and data-src-retina -->
											'<img src="images/blog/entry6.jpg" data-src="../uploads/480x280_4.jpg" data-src-retina="../uploads/720x420_4.jpg" width="480" height="280" alt="" style="opacity: 1;">'+

										'</figure>'+

									'</article>'+

									'<article class="entry style-grid type-post col-md-6 col-lg-3 colheight-sm-1">'+
										
										'<header class="entry-header">'+
											'<p class="small"><a href="#">Review</a></p>'+
											'<h3 class="entry-title"><a href="#">xPhone first hand: Check out, this might be the right phone for you</a> </h3>'+
											'<div class="entry-meta">'+
												'<span class="entry-date"><a href="#"><time datetime="2013-07-04T23:26:34+00:00">20 hours ago</time></a></span>'+
												'<span class="entry-author"> by <a href="#">John Doe</a></span>'+
											'</div>'+
										'</header>'+
										
										'<figure class="entry-thumbnail">'+

											'<a href="#" class="overlay overlay-primary"></a>'+

											//<!-- to disable lazy loading, remove data-src and data-src-retina -->
											'<img src="images/blog/entry7.jpg" data-src="../uploads/480x280_1.jpg" data-src-retina="../uploads/720x420_1.jpg" width="480" height="280" alt="" style="opacity: 1;">'+

											//<!--fallback for no javascript browsers-->
											'<noscript>&lt;img src="../uploads/480x280_1.jpg" alt=""&gt;</noscript>'+

										'</figure>'+

									'</article>'+

									'<article class="entry style-grid type-post col-md-6 col-lg-3 colheight-sm-1">'+

										'<header class="entry-header">'+
											'<p class="small"><a href="#">Event Report</a></p>'+
											'<h3 class="entry-title"><a href="#">The rumor was not a joke, lorem ispsum dolor sit amet constactetiour.</a> </h3>'+
											'<div class="entry-meta">'+
												'<span class="entry-date"><a href="#"><time datetime="2013-07-04T23:26:34+00:00">20 hours ago</time></a></span>'+
												'<span class="entry-author"> by <a href="#">John Doe</a></span>'+
											'</div>'+
										'</header>'+
										
										'<figure class="entry-thumbnail">'+

											'<a href="#" class="overlay overlay-primary"></a>'+

											//<!-- to disable lazy loading, remove data-src and data-src-retina -->
											'<img src="images/blog/entry8.jpg" data-src="../uploads/680x452_1.jpg" data-src-retina="../uploads/1024x680_1.jpg" width="680" height="452" alt="" style="opacity: 1;">'+


										'</figure>'+

									'</article>'+

								'</div>'+//<!--/.row.entries-->

							'</div>'+//<!--/.item-->
						'</div>'+//<!--/.carousel-inner-->

						'<a class="left carousel-control" href="#coverageCarousel" data-slide="prev">'+
							'<span class="icon icon-angle-left fa fa-caret-left"></span>'+
						'</a>'+
						'<a class="right carousel-control" href="#coverageCarousel" data-slide="next">'+
							'<span class="icon icon-angle-right fa fa-caret-right"></span>'+
						'</a>'+

					'</div>'
				
				
				//<!--recent blogs scroller ends-->
		       }
		      ]
	}
});