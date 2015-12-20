$(function(){
	$("body").on("click", ".js-issue-row input, .js-issue-row a",function(e) { e.stopPropagation(); });
	$("body").on("click", ".js-issue-row",function(){
		if(!$(this).is("input") && !$(this).is("a")){
			var $box = $(this).find('input:checkbox:first');
		    $box.trigger("click");
		}
	});
});