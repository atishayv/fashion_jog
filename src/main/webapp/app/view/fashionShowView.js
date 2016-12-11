Ext.define('fashionJog.view.fashionShowView',{
	
	extend: 'Ext.Panel',
	xtype: 'fashionShowView',
	config:{
		cls: 'fashionShowViewCls',
		listeners:{
			show : function(){
				setTimeout(function(){
					//jQuery(document).ready(function () {
						$('.runway-module .fa-arrow-left').click(function(){
							var item=$('.runway_carousel_items');
							var move = item.position().left;
							if(move<0){
								move=move+280;
								item.css('-webkit-transform', 'translate3d('+move+'px,0px,0.001px)');
							}
						});

						
						$('.runway-module .fa-arrow-right').click(function(){
							var item=$('.runway_carousel_items');
							var move = item.position().left;
							if(move>-1400){
								move=move-280;
								item.css('-webkit-transform', 'translate3d('+move+'px,0px,0.001px)');
							}
						});
					//});
				},500);
				
			}
		},
		
		items:[
		       {
				xtype: 'panel',
				html:'<div class="top-title">'+// <!--  top title starts -->
				'<img src="http://www.vogue.com/wp-content/uploads/2014/12/01/FashionShows-Banner23.jpg">'+
				'<h1 class="top-title-text">Fashion Shows</h1>'+
			'</div>'+
			 //<!--  top title ends -->
				
				
			//<!--  top fashion show scroller starts -->	
			 '<section class="runway-module">'+
				'<header class="runway-module_header">'+
					'<h2 class="runway-module_title">Best Collections of Spring 2015</h2>'+
				'</header>'+

				'<div class="runway_carousel">'+
					'<div class="runway_carousel_track" style="touch-action: pan-y; -webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">'+
						'<ul class="runway_carousel_items" style="width: 2800px;">'+
									'<li class="runway_carousel_item">'+
						'<a href="http://www.vogue.com/fashion-week/1689207/louis-vuitton-spring-2015-rtw/">'+
													'<picture>'+
								'<video style="display: none;">'+//<!--[if IE 9]><![endif]-->
								'<source srcset="http://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F10%2F01%2Flouis-vuitton-pfw-rtw-spring-2015-runway-17.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=" media="(min-width: 760px)">'+
								'</video><!--[if IE 9]><![endif]-->'+
								'<img srcset="https://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F10%2F01%2Flouis-vuitton-pfw-rtw-spring-2015-runway-17.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=">'+
							'</picture>'+

							'<h3 class="runway-carousel--item-title">Louis Vuitton</h3>'+
						'</a>'+

										'</li>'+

									'<li class="runway_carousel_item">'+
						'<a href="http://www.vogue.com/fashion-week/1449589/prada-spring-2015-rtw/">'+
													'<picture>'+
								'<video style="display: none;">'+//<!--[if IE 9]><![endif]-->
								'<source srcset="http://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09_1%2F18%2Fprada-rtw-ss2015-runway-24.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=" media="(min-width: 760px)">'+
								'</video>//<!--[if IE 9]><![endif]-->'+
								'<img srcset="https://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09_1%2F18%2Fprada-rtw-ss2015-runway-24.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=">'+
							'</picture>'+

							'<h3 class="runway-carousel--item-title">Prada</h3>'+
						'</a>'+

										'</li>'+

									'<li class="runway_carousel_item">'+
						'<a href="http://www.vogue.com/fashion-week/1688315/celine-spring-2015-rtw/">'+
													'<picture>'+
								'<video style="display: none;">'+//<!--[if IE 9]><![endif]-->
								'<source srcset="http://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09_1%2F28%2Fceline-pfw-rtw-spring-2015-runway-281.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=" media="(min-width: 760px)">'+
								'</video>//<!--[if IE 9]><![endif]-->'+
								'<img srcset="https://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09_1%2F28%2Fceline-pfw-rtw-spring-2015-runway-281.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=">'+
							'</picture>'+

							'<h3 class="runway-carousel--item-title">Céline</h3>'+
						'</a>'+

										'</li>'+

									'<li class="runway_carousel_item">'+
						'<a href="http://www.vogue.com/fashion-week/1067639/altuzarra-spring-2015-rtw/">'+
													'<picture>'+
								'<video style="display: none;">'+//<!--[if IE 9]><![endif]-->
								'<source srcset="http://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09%2Faltuzarra-rtw-ss2015-runway-011.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=" media="(min-width: 760px)">'+
								'</video>//<!--[if IE 9]><![endif]-->'+
								'<img srcset="https://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09%2Faltuzarra-rtw-ss2015-runway-011.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=">'+
							'</picture>'+

							'<h3 class="runway-carousel--item-title">Altuzarra</h3>'+
						'</a>'+

										'</li>'+

									'<li class="runway_carousel_item">'+
						'<a href="http://www.vogue.com/fashion-week/1443209/erdem-spring-2015-rtw/">'+
													'<picture>'+
								'<video style="display: none;">'+//<!--[if IE 9]><![endif]-->
								'<source srcset="http://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09_1%2F15%2Ferdem-rtw-spring-2015-runway-27.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=" media="(min-width: 760px)">'+
								'</video>//<!--[if IE 9]><![endif]-->'+
								'<img srcset="https://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09_1%2F15%2Ferdem-rtw-spring-2015-runway-27.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=">'+
							'</picture>'+

							'<h3 class="runway-carousel--item-title">Erdem</h3>'+
						'</a>'+

										'</li>'+

									'<li class="runway_carousel_item">'+
						'<a href="http://www.vogue.com/fashion-week/1449625/bottega-veneta-spring-2015-rtw/">'+
													'<picture>'+
								'<video style="display: none;">'+//<!--[if IE 9]><![endif]-->
								'<source srcset="http://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09_1%2F20%2Fbottega-veneta-spring-2015-runway-30.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=" media="(min-width: 760px)">'+
								'</video>//<!--[if IE 9]><![endif]-->'+
								'<img srcset="https://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09_1%2F20%2Fbottega-veneta-spring-2015-runway-30.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=">'+
							'</picture>'+

							'<h3 class="runway-carousel--item-title">Bottega Veneta</h3>'+
						'</a>'+

										'</li>'+

									'<li class="runway_carousel_item">'+
						'<a href="http://www.vogue.com/fashion-week/1067765/rodarte-spring-2015-rtw/">'+
													'<picture>'+
								'<video style="display: none;">'+//<!--[if IE 9]><![endif]-->
								'<source srcset="http://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09_1%2F09%2Frodarte-rtw-ss2015-runway-35.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=" media="(min-width: 760px)">'+
								'</video>//<!--[if IE 9]><![endif]-->'+
								'<img srcset="https://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09_1%2F09%2Frodarte-rtw-ss2015-runway-35.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=">'+
							'</picture>'+

							'<h3 class="runway-carousel--item-title">Rodarte</h3>'+
						'</a>'+

										'</li>'+

									'<li class="runway_carousel_item">'+
						'<a href="http://www.vogue.com/fashion-week/1688983/valentino-spring-2015-rtw/">'+
													'<picture>'+
								'<video style="display: none;">'+//<!--[if IE 9]><![endif]-->
								'<source srcset="http://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09_1%2F30%2Fvalentino-pfw-rtw-spring-2015-runway-23.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=" media="(min-width: 760px)">'+
								'</video>//<!--[if IE 9]><![endif]-->'+
								'<img srcset="https://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09_1%2F30%2Fvalentino-pfw-rtw-spring-2015-runway-23.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=">'+
							'</picture>'+

							'<h3 class="runway-carousel--item-title">Valentino</h3>'+
						'</a>'+

										'</li>'+

									'<li class="runway_carousel_item">'+
						'<a href="http://www.vogue.com/fashion-week/1688565/givenchy-spring-2015-rtw/">'+
													'<picture>'+
								'<video style="display: none;">'+//<!--[if IE 9]><![endif]-->
								'<source srcset="http://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09_1%2F28%2Fgivenchy-spring-2015-runway-01.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=" media="(min-width: 760px)">'+
								'</video>//<!--[if IE 9]><![endif]-->'+
								'<img srcset="https://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09_1%2F28%2Fgivenchy-spring-2015-runway-01.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=">'+
							'</picture>'+

							'<h3 class="runway-carousel--item-title">Givenchy</h3>'+
						'</a>'+

										'</li>'+

									'<li class="runway_carousel_item">'+
						'<a href="http://www.vogue.com/fashion-week/1067879/michael-kors-spring-2015-rtw/">'+
													'<picture>'+
								'<video style="display: none;">'+//<!--[if IE 9]><![endif]-->
								'<source srcset="http://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09_1%2F10%2Fmichael-kors-rtw-spring-2015-161.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=" media="(min-width: 760px)">'+
								'</video>//<!--[if IE 9]><![endif]-->'+
								'<img srcset="https://www.vogue.com/aq_resizer/?url=http%3A%2F%2Fwww.vogue.com%2Fwp-content%2Fuploads%2F2014%2F09_1%2F10%2Fmichael-kors-rtw-spring-2015-161.jpg&amp;width=280&amp;height=480&amp;crop=1&amp;single=1&amp;upscale=">'+
							'</picture>'+

							'<h3 class="runway-carousel--item-title">Michael Kors</h3>'+
						'</a>'+

										'</li>'+

					
						'</ul>'+
					'</div>'+

					'<div class="runway_carousel_arrow left"><i class="fa fa-arrow-left"></i></div>'+
					'<div class="runway_carousel_arrow right"><i class="fa fa-arrow-right"></i></div>'+
				'</div>'+
			'</section>'+
			
			//<!--  top fashion show scroller ends -->	
			
			
			
			//<!-- fashion show news content starts-->
			'<section class="fashion-news mixed-news-row">'+
	                    '<article class="news-article large">'+
	                '<a target="_blank" href="http://www.covertrends.de/fashion/zuerich-fashion-days/9299">'+
	                    '<img src="images/fashion-show/news1.jpg" alt="">'+
	                    '<div class="article-title">Zürich Fashion Days 2014: MAX MARA on the Catwalk                    </div>'+
	                '</a>'+
	            '</article>'+
	                    '<article class="news-article small">'+
	                '<a target="_blank" href="/article/hm-pushes-growth-talks-sustainability">'+
	                    '<img src="images/fashion-show/news2.jpg" alt="">'+
	                    '<div class="article-title">H&amp;M Pushes Growth, Talks Sustainability                    </div>'+
	                '</a>'+
	            '</article>'+
	                    '<article class="news-article small">'+
	                '<a target="_blank" href="/article/naomi-campbell-to-stage-fashion-shows-for-ebola-funding">'+
	                    '<img src="images/fashion-show/news3.jpg" alt="">'+
	                    '<div class="article-title">Naomi Campbell To Stage Fashion Shows For Ebola Funding                    </div>'+
	                '</a>'+
	            '</article>'+
	                    '<article class="news-article small">'+
	                '<a target="_blank" href="http://www.aww.com.au/style/your-fashion/2014/10/carla-zampatti-named-ambassador-for-the-social-label">'+
	                    '<img src="images/fashion-show/news4.jpg" alt="">'+
	                    '<div class="article-title">Carla Zampatti named ambassador for label working with refugees                    </div>'+
	                '</a>'+
	            '</article>'+
	                    '<article class="news-article small">'+
	                '<a target="_blank" href="http://globalnews.ca/news/1625775/neigum-opens-toronto-fashion-week-wins-start-up-prize/">'+
	                    '<img src="images/fashion-show/news5.jpg" alt="">'+
	                    '<div class="article-title">Neigum Opens Toronto Fashion Week, Wins Start Up Prize                    </div>'+
	                '</a>'+
	            '</article>'+
	            '</section>'+
				
				'<section class="fashion-news mixed-news-row more-news">'+
	                                '<article class="news-article large">'+
	                        '<a target="_blank" href="http://www.dailysabah.com/fashion/2014/10/17/lights-gleam-as-the-stage-is-set-for-istanbul-fashion-week">'+
	                            '<img src="images/fashion-show/news6.jpg" alt="">'+
	                            '<div class="article-title">LIGHTS GLEAM AS THE STAGE IS SET FOR ISTANBUL FASHION WEEK                            </div>'+
	                        '</a>'+
	                    '</article>'+
	                                '<article class="news-article small">'+
	                        '<a target="_blank" href="http://www.fibre2fashion.com/news/fashion-news/newsdetails.aspx?news_id=168280">'+
	                            '<img src="images/fashion-show/news7.jpg" alt="">'+
	                            '<div class="article-title">Istanbul FW celebrates Ottoman adventurer Evliya Celebi                            </div>'+
	                        '</a>'+
	                    '</article>'+
	                                '<article class="news-article small">'+
	                        '<a target="_blank" href="http://www.modaturkiye.com/haber/asli-guler-2015-ilkbahar-yaz-koleksiyonu-mbfwi">'+
	                            '<img src="images/fashion-show/news8.jpg" alt="">'+
	                            '<div class="article-title">Asl Güler 2015 lkbahar-Yaz Defilesi, MBFWI                            </div>'+
	                        '</a>'+
	                    '</article>'+
	                                '<article class="news-article small">'+
	                        '<a target="_blank" href="https://ph.celebrity.yahoo.com/news/tokyo-fashion-week-highlights-day-two-152216017.html">'+
	                            '<img src="images/fashion-show/news9.jpg" alt="">'+
	                            '<div class="article-title">Tokyo Fashion Week: Highlights From Day Two                            </div>'+
	                        '</a>'+
	                    '</article>'+
	                                '<article class="news-article small">'+
	                        '<a target="_blank" href="http://fortune.com/2014/09/22/fashion-industry-big-data-analytics/?utm_source=feedburner&amp;utm_medium=feed&amp;utm_campaign=Feed%3A+fortunebrainstormtech+(Fortune+Brainstorm+Tech)">'+
	                            '<img src="images/fashion-show/news10.jpg" alt="">'+
	                            '<div class="article-title">Whats On Trend This Season For The Fashion Industry? Big Data.                            </div>'+
	                        '</a>'+
	                    '</article>'+
	                    '</section>'+
			
			//<!-- fashion show news content ends-->
			
			
			//<!-- fashion show gallery content starts -->
			'<div class="fashion-show-gallery section-div-header">'+
	                '<h2><a href="#">GALLERY</a></h2>'+
	        '</div>'+
			
			'<section class="fashion-show-gallery mixed-news-row">'+
	                '<article class="gallery-item  quad-gallery" data-url="tur-all-kapanis-partisi-mercedes-benz-fashion-week-istanbul-springsummer-2015">'+
	                '<a href="#">'+
	                    '<img src="http://cdn.mbfash.com/assets/galleries/gettyevent/517692259/_thumbs1000/457422034.jpg" alt="">'+

	                    '<div class="article-title">TUR: All Kapanis Partisi - Mercedes Benz Fashion Week Istanbul Spring/Summer 2015                    </div>'+
	                '</a>'+
	            '</article>'+
	                    '<article class="gallery-item  quad-gallery" data-url="tur-street-style-day-6-mercedes-benz-fashion-week-istanbul-springsummer-2015">'+
	                '<a href="#">'+
	                    '<img src="http://cdn.mbfash.com/assets/galleries/gettyevent/516931839/_thumbs1000/457428034.jpg" alt="">'+

	                    '<div class="article-title">TUR: Street Style: Day 6 - Mercedes Benz Fashion Week Istanbul Spring/Summer 2015                    </div>'+
	                '</a>'+
	            '</article>'+
	                    '<article class="gallery-item  quad-gallery" data-url="tur-best-of-mercedes-benz-fashion-week-istanbul-springsummer-2015">'+
	                '<a href="#">'+
	                    '<img src="http://cdn.mbfash.com/assets/galleries/gettyevent/516932061/_thumbs1000/457431570.jpg" alt="">'+

	                    '<div class="article-title">TUR: Best Of Mercedes Benz Fashion Week Istanbul Spring/Summer 2015                    </div>'+
	                '</a>'+
	            '</article>'+
	                    '<article class="gallery-item  quad-gallery" data-url="tur-idea4id-presentation-mercedes-benz-fashion-week-istanbul-springsummer-2015">'+
	                '<a href="#">'+
	                    '<img src="http://cdn.mbfash.com/assets/galleries/gallery/2766/_thumbs1000/photo_1413637696_396.jpg" alt="">'+

	                    '<div class="article-title">TUR: Idea4id: Presentation - Mercedes Benz Fashion Week Istanbul Spring/Summer 2015                    </div>'+
	                '</a>'+
	            '</article>'+
	                    '<article class="gallery-item  quad-gallery" data-url="tur-seyma-subasi-runway-mercedes-benz-fashion-week-istanbul-springsummer-2015">'+
	                '<a href="#">'+
	                    '<img src="http://cdn.mbfash.com/assets/galleries/gallery/2767/_thumbs1000/photo_1414437098_975.jpg" alt="">'+

	                    '<div class="article-title">TUR: Seyma Subasi: Runway - Mercedes Benz Fashion Week Istanbul Spring/Summer 2015                    </div>'+
	                '</a>'+
	            '</article>'+
	                    '<article class="gallery-item  quad-gallery" data-url="tur-seyma-subasi-backstage-mercedes-benz-fashion-week-istanbul-springsummer-2015">'+
	                '<a href="#">'+
	                    '<img src="http://cdn.mbfash.com/assets/galleries/gallery/2768/_thumbs1000/photo_1414442108_245.jpg" alt="">'+

	                    '<div class="article-title">TUR: Seyma Subasi: Backstage - Mercedes Benz Fashion Week Istanbul Spring/Summer 2015                    </div>'+
	                '</a>'+
	            '</article>'+
	                    '<article class="gallery-item  quad-gallery" data-url="tur-vip-guests-day-4-mercedes-benz-fashion-week-istanbul-springsummer-2015">'+
	                '<a href="#">'+
	                    '<img src="http://cdn.mbfash.com/assets/galleries/gettyevent/516931405/_thumbs1000/457298058.jpg" alt="">'+

	                    '<div class="article-title">TUR: VIP Guests: Day 4 - Mercedes Benz Fashion Week Istanbul Spring/Summer 2015                    </div>'+
	                '</a>'+
	            '</article>'+
	                    '<article class="gallery-item  quad-gallery" data-url="tur-best-of-day-4-mercedes-benz-fashion-week-istanbul-springsummer-2015">'+
	                '<a href="#">'+
	                    '<img src="http://cdn.mbfash.com/assets/galleries/gettyevent/516932041/_thumbs1000/457309770.jpg" alt="">'+

	                    '<div class="article-title">TUR: Best Of Day 4  - Mercedes Benz Fashion Week Istanbul Spring/Summer 2015                    </div>'+
	                '</a>'+
	            '</article>'+
	        '</section>'
			
			//<!-- fashion show gallery content ends -->'
		       }
		      ]
	}
});
