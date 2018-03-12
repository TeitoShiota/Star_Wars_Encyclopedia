console.log("script loaded");
//var banner[] = 

/*if (screenwidth < 1080){
    document.getElementById("bannerImage").src='assets/images/mheaderjpeg';
}*/

/*if(Modernizr.mq('(max-width: 768)')){
    $('#bannerImage').src='assets/images/mheader.jg'
}*/
$(window).resize(function(){
    if ($(window).width() < 737){
        document.getElementById('bannerImage').src="Assets/Images/mBanner.jpg";
        console.log("Banner Changed");
    }
});