/**
 * Class provides data Service
 */

//Ext.namespace('SmartHub.app.data');

Ext.define('fashionJog.data.DataService',{
	singleton: true,

	
	
	getNews : function(successCallBk,failureCallBk,scope){
		var reqObj = {
				action:'getLatestNews'
		};
		fashionJog.data.Service.makeServerRequest(reqObj,'POST', successCallBk, failureCallBk, this);
	},
	

});
