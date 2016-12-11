Ext.define('fashionJog.view.aboutView',{
	
	extend: 'Ext.Panel',
	xtype: 'aboutView',
	config:{
		cls: 'aboutViewCls',
		listeners:{},
		
		items:[
		       {
				xtype: 'panel',
				html:'<section id="contact" class="contact-module">'+//<!-- Contact starts-->
				'<div class="container">'+

				'<div class="row">'+
					'<div class="col-sm-6 col-sm-offset-3">'+
						'<div class="module-header wow fadeInUp animated" style="visibility: visible; -webkit-animation: fadeInUp;">'+
							'<h2 class="module-title">Contact us</h2>'+
							'<h3 class="module-subtitle">Drop us a line<span class="point">.</span></h3>'+
						'</div>'+
					'</div>'+
				'</div>'+//<!-- .row -->

				'<div class="row">'+

					'<div class="col-sm-6 col-sm-offset-3">'+
						'<form id="contact-form" role="form" novalidate="">'+

							'<div class="form-group">'+
								'<label class="sr-only" for="cname">Name</label>'+
								'<input type="text" id="cname" class="form-control" name="cname" placeholder="Name" required="" data-validation-required-message="Please enter your name.">'+
								'<p class="help-block text-danger"></p>'+
							'</div>'+

							'<div class="form-group">'+
								'<label class="sr-only" for="cemail">Your Email</label>'+
								'<input type="email" id="cemail" name="cemail" class="form-control" placeholder="Your Email" required="" data-validation-required-message="Please enter your email address.">'+
								'<p class="help-block text-danger"></p>'+
							'</div>'+

							'<div class="form-group">'+
								'<textarea class="form-control" id="cmessage" name="cmessage" rows="4" placeholder="Message" required="" data-validation-required-message="Please enter your message."></textarea>'+
								'<p class="help-block text-danger"></p>'+
							'</div>'+

							'<div class="text-center">'+
								'<button type="submit" class="btn btn-block btn-custom-2">Submit</button>'+
							'</div>'+

						'</form>'+

						

					'</div>'+//<!-- .col -->

				'</div>'+//<!-- .row -->

				'</div>'+//<!-- .container -->
			'</section>'
			//<!-- Contact ends -->'
		       }
		      ]
	}
});