Ext.define('fashionJog.controller.MainController',{
	
	extend: 'Ext.app.Controller',
	
	index : function(){
		this.mainView = Ext.create('fashionJog.view.mainView');
		
		Ext.Viewport.add(this.mainView);
		Ext.Viewport.setActiveItem(this.mainView);
	},
	
	switchView : function(viewNo){
		/*if(viewNo==1){//news view
			if($('.newsViewCls .mainNewsSection .carousel-inner')[0].childElementCount==0){
				fashionJog.data.DataService.getNews(function(response){
					var responseArr = JSON.parse(response);
					for(var i=0;i<responseArr.length;i++){
						if(i<=3){
							$('.newsViewCls .mainNewsSection .carousel-inner').append('<div class="item '+(i==0?"active":"")+'">'+
		                            '<img src="'+responseArr[i].image+'" alt="">'+
		                            '<div class="filmgrain"></div>'+    
		                            '<div class="carousel-caption">'+
		                                '<h3>'+responseArr[i].title+'</h3>'+
		                                '<p class="by-line">By '+responseArr[i].source+'</p>'+
		                                '<p>'+responseArr[i].description+'</p>'+
		                            '</div>'+
		                        '</div>');
						}else{
							$('.newsViewCls .subNewsSection .row').append('<div class="col-xs-6 col-sm-6 col-md-4 features-col">'+
				                    '<div class="item-img">'+
			                        '<div class="dot-overlay"></div>'+
			                        '<a href="#">'+
			                            '<img src="'+responseArr[i].image+'" alt="">'+
			                        '</a>'+
			                    '</div>'+
			                    '<div class="feature-title">'+
			                        '<h3>'+responseArr[i].title+'</h3>'+
			                        '<p class="by-line">By '+responseArr[i].source+'</p>'+
			                    '</div>'+
			                    '<div class="feature-content">'+
			                        '<p>'+responseArr[i].description+'</p>'+
			                    '</div>'+  
			                    '<a href="#" class="btn btn-primary">Read more</a>'+
			                '</div>');
						}
					}
				},function(error){
					console.log(error);
				},this);
			}
			
		}*/
		this.mainView.setActiveItem(viewNo);
	},
	
});