$(function(){
	$(".js-issue-row input, .js-issue-row a").click(function(e) { e.stopPropagation(); });
	$(".js-issue-row").click(function(){
		if(!$(this).is("input") && !$(this).is("a")){
			var $box = $(this).find('input:checkbox:first');
		    $box.trigger("click");
		}
	});
});