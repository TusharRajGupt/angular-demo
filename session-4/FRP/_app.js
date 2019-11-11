$(document).ready(function () {
    $('code').text(window.globalVariable);
	
	
	
//	const toggleBulb = () => {
//		//find bulb
//		let bulb = $('.bulb');
//		//update its value
//		bulb.prop('checked', !bulb.prop('checked'))
//	}
	
	
	//proactive way
//	$('.proactive .switch').click(toggleBulb);
	
	//reactive way
//	$('.reactive .switch').click(function(){
//		$('.bulb', '.reactive').trigger('switched')
//	});
//	
//	$('.bulb').on('switched', toggleBulb)
	
});