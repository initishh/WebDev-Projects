$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});	
	event.stopPropagation();
});

$("input[type = 'text']").on("keypress",function(event){
	if(event.which === 13){
		var inpText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + inpText + "</li>");
	}
});

$(".fa-plus").on("click",function(){

	$("input[type = 'text']").fadeToggle();

});