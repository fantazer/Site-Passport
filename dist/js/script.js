
new WOW().init();
$(document).ready(function(){
	$("#owl-example").owlCarousel({
	 	items : 1,
	 	autoHeight : true,
	 	pagination : false,
	 	autoPlay : true,
	 	singleItem:true
	 	}
	 ); 

 $(".modal-href").animatedModal({
 	animatedIn:'lightSpeedIn',
    animatedOut:'bounceOutDown',
    color:'white'
 });
 $(".modalcalc").animatedModal({
 	animatedIn:'lightSpeedIn',
    animatedOut:'bounceOutDown',
    color:'white',
    modalTarget:'modalcalc'
 });
})