$(function(){
	
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);

    $.ajax({
    url:"http://jsonp.jit.su/?callback=?&url=http://www.reddit.com/r/historyporn.json",
    type:'GET',
    dataType:'JSON',
    success: function(data){

    	var lista = [];

    	for (var i = 0; i < data.data.children.length; i++) {

    		if (data.data.children[i].data.domain === 'imgur.com' || data.data.children[i].data.domain === 'i.imgur.com' ) {
    			var url = data.data.children[i].data.url;
    			var title = data.data.children[i].data.title;	

		    		if (url.match('jpg$')) {
		    			lista.push({url:url, title: title});
		    			console.log(data.data.children[i].data.domain + ' IMGUR ')
		    		}else{
		    			var urljpg = url.concat('.jpg');
		    			lista.push({url:urljpg, title: title});
    				}
    		} else{
    			console.log(data.data.children[i].data.domain + ' NO')
    		};
    	};
    	
    	var element = Math.floor(Math.random() * lista.length)
        $('#main').prepend(template(lista[element]));



    }
});
})
