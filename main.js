$(document).ready(function(){
	$(".sectionO").on('click', function(){
		$(".content").removeClass("active")
		$(this).find("+ .content").addClass('active')
	})
})