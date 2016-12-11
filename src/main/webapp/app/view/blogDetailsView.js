Ext.define('fashionJog.view.blogDetailsView',{
	
	extend: 'Ext.Panel',
	xtype: 'blogDetailsView',
	config:{
		cls: 'blogDetailsViewCls',
		listeners:{},
		
		items:[
		       {
				xtype: 'panel',
				html:'<div class="blogBox section section-no-margin-bottom entries bg-primary">'+//<!-- blog boxes section starts -->
				'<article class="entry style-grid style-hero hero-nav type-post col-xs-6 col-sm-6">'+
					'<a href="single.html">'+
						'<header class="entry-header">'+
							'<p class="small">Previous Story</p>'+
							'<h4 class="entry-title">Rumor: The long awaited update for Retina Display is ready to be annaunced on the next event held by them</h4>'+
						'</header>'+

						'<figure class="entry-thumbnail">'+

							'<div class="overlay overlay-primary"></div>'+
							'<img src="images/blogDetails/preStory.jpg" data-src="../uploads/480x280_1.jpg" data-src-retina="../uploads/720x420_1.jpg" width="480" height="280" alt="" style="opacity: 1;">'+
							'<noscript>&lt;img src="../uploads/480x280_1.jpg" alt=""&gt;'+
							'</noscript>'+

						'</figure>'+
					'</a> '+
				'</article>'+
				'<article class="entry style-grid style-hero hero-nav type-post col-xs-6 col-sm-6">'+
					'<a href="single-full.html">'+
						'<header class="entry-header">'+
							'<p class="small">Next Story</p>'+
							'<h4 class="entry-title">Click here to see single blog post in full mode sit voluptatem accusantium doloremque laudantium</h4>'+
						'</header>'+

						'<figure class="entry-thumbnail">'+
							'<div class="overlay overlay-primary"></div>'+
							'<img src="images/blogDetails/nextStory.jpg" data-src="../uploads/480x280_3.jpg" data-src-retina="../uploads/720x420_3.jpg" width="480" height="280" alt="" style="opacity: 1;">'+
							'<noscript>&lt;img src="../uploads/480x280_3.jpg" alt=""&gt;'+
							'</noscript>'+
						'</figure>'+
					'</a> '+
				'</article>'+
			'</div>'+ //<!-- blog boxes section starts -->
			
			//'<!-- blog main details section starts -->
		 '<header class="mainDetails page-header">'+
						'<h2 class="page-title">Postman will send notifications to your flashy smartphone about popular people and their latest shouts.'+
						'</h2>'+
		'</header>'+
		'<article class="mainDetailText entry style-single type-post">'+
			'<figure class="entry-thumbnail">'+
				'<img src="images/blogDetails/mainStory.jpg" data-src="../uploads/680x452_4.jpg" data-src-retina="../uploads/1024x680_4.jpg" width="680" height="452" alt="" style="opacity: 1;">'+
			'</figure>'+
			'<div class="entry-meta indented">'+
				'<span class="author">by <a href="blog.html">John Doe</a></span>'+
				'<span class="entry-date"><a href="blog.html">on <time datetime="2013-07-04T23:26:34+00:00">September 20 2013</time></a></span>'+
				'<span class="category">In <a href="blog.html">Social Media</a></span>'+
			'</div>'+
			'<div class="entry-content indented">'+
				'<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'+
				'</p>'+
			'</div>'+
		'</article>'+
		'<div id="comments" class="comments-area indented">'+
						'<h4 class="comments-title">Comments</h4>'+
						'<ol class="media-list comment-list">'+
							'<li class="media comment">'+
								'<img src="http://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=74" width="74" height="74" alt="" class="avatar media-object pull-left img-circle">'+
								'<div class="media-body">'+
									'<h4 class="media-heading author-vcard">'+
										'<cite class="fn"><a href="#" rel="external nofollow" class="url">Mr John Doe</a></cite>'+ 
										'<span class="comment-meta commentmetadata">on <a href="#">July 8, 2013 at 7:46 am</a></span>'+
									'</h4>'+
									'<p>Hi, this is a comment. enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>'+
								'</div>'+
								'<ol class="media-list">'+
									'<li class="media comment">'+
										'<img src="http://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=74" width="74" height="74" alt="" class="avatar media-object pull-left img-circle">'+
										'<div class="media-body">'+
											'<h4 class="media-heading author-vcard">'+
												'<cite class="fn"><a href="#" rel="external nofollow" class="url">Mr John Doe</a></cite>'+ 
												'<span class="comment-meta commentmetadata"> on <a href="#">July 8, 2013 at 7:46 am</a></span>'+
											'</h4>'+
											'<p>Hi, this is a comment. enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>'+
										'</div>'+
									'</li>'+
									'<li class="media comment">'+
										'<img src="http://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=74" width="74" height="74" alt="" class="avatar media-object pull-left img-circle">'+
										'<div class="media-body">'+
											'<h4 class="media-heading author-vcard">'+
												'<cite class="fn"><a href="#" rel="external nofollow" class="url">Mr John Doe</a></cite>'+ 
												'<span class="comment-meta commentmetadata"> on <a href="#">July 8, 2013 at 7:46 am</a></span>'+
											'</h4>'+
											'<p>Hi, this is a comment. enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>'+
										'</div>'+
										'<ol class="media-list">'+
											'<li class="media comment">'+
												'<img src="http://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=74" width="74" height="74" alt="" class="avatar media-object pull-left img-circle">'+
												'<div class="media-body">'+
													'<h4 class="media-heading author-vcard">'+
														'<cite class="fn"><a href="#" rel="external nofollow" class="url">Mr John Doe</a></cite>'+ 
														'<span class="comment-meta commentmetadata">on <a href="#">July 8, 2013 at 7:46 am</a></span>'+
													'</h4>'+
													'<p>Hi, this is a comment. enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>'+
												'</div>'+
											'</li>'+
											'<li class="media comment">'+
												'<img src="http://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=74" width="74" height="74" alt="" class="avatar media-object pull-left img-circle">'+
												'<div class="media-body">'+
													'<h4 class="media-heading author-vcard">'+
														'<cite class="fn"><a href="#" rel="external nofollow" class="url">Mr John Doe</a></cite>'+ 
														'<span class="comment-meta commentmetadata">on <a href="#">July 8, 2013 at 7:46 am</a></span>'+
													'</h4>'+
													'<p>Hi, this is a comment. enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>'+
												'</div>'+
											'</li>'+
										'</ol>'+
									'</li>'+
								'</ol>'+
							'</li>'+
							'<li class="media comment">'+
								'<img src="http://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=74" width="74" height="74" alt="" class="avatar media-object pull-left img-circle">'+
								'<div class="media-body">'+
									'<h4 class="media-heading author-vcard">'+
										'<cite class="fn"><a href="#" rel="external nofollow" class="url">Mr John Doe</a></cite>'+ 
										'<span class="comment-meta commentmetadata">on <a href="#">July 8, 2013 at 7:46 am</a></span>'+
									'</h4>'+
									'<p>Hi, this is a comment. enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>'+
								'</div>'+
							'</li>'+
							'<li class="media comment">'+
								'<img src="http://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=74" width="74" height="74" alt="" class="avatar media-object pull-left img-circle">'+
								'<div class="media-body">'+
									'<h4 class="media-heading author-vcard">'+
										'<cite class="fn"><a href="#" rel="external nofollow" class="url">Mr John Doe</a></cite>'+ 
										'<span class="comment-meta commentmetadata">on <a href="#">July 8, 2013 at 7:46 am</a></span>'+
									'</h4>'+
									'<p>Hi, this is a comment. enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>'+
								'</div>'+
							'</li>'+
						'</ol>'+
						'<div id="respond" class="comments-respond">'+
							'<h3 id="reply-title" class="comment-reply-title">Leave a Reply</h3>'+
							'<form action="#" class="form-inline row" method="post" id="commentform">'+
								'<div class="form-group col-lg-4 col-md-4 col-sm-4 col-xs-12">'+
									'<label class="sr-only" for="inputName">Name</label>'+
									'<input class="form-control" id="inputName" name="author" type="text" value="" aria-required="true" placeholder="Your Name">'+
								'</div>'+
								'<div class="form-group col-lg-4 col-md-4 col-sm-4 col-xs-12">'+
									'<label class="sr-only" for="inputEmail">Email</label>'+
									'<input class="form-control" id="inputEmail" name="author" type="text" value="" aria-required="true" placeholder="Your Email">'+
								'</div>'+
								'<div class="form-group col-lg-4 col-md-4 col-sm-4 col-xs-12">'+
									'<label class="sr-only" for="inputWebsite">Website</label>'+
									'<input class="form-control" id="inputWebsite" name="author" type="text" value="" aria-required="true" placeholder="Your Website">'+
								'</div>'+
								'<div class="form-group col-lg-12 col-md-12 col-sm-12">'+
									'<label class="sr-only" for="inputMessage">Message</label>'+
									'<textarea class="form-control" id="inputMessage" name="message" rows="8" aria-required="true" placeholder="Your Message"></textarea>'+
								'</div>'+
								'<div class="form-group col-lg-12 col-md-12 col-sm-12">'+
									'<button class="btn btn-primary" name="submit" id="submit">Send Message</button>'+
								'</div>'+
							'</form>'+
						'</div>'+ //<!-- #respond -->
					'</div>' //<!-- blog main details section ends -->

				
		       }
		      ]
	}
});