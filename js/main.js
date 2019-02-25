$(function() {
  $.scrollify({
	section:".panel",
    sectionName:false,
    easing: "easeOutExpo",
    scrollSpeed: 1000,
    offset : 0,
    interstitialSection : ".foot",
    setHeights: false,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
        after:function() {},
    afterResize:function() {},
    afterRender:function() {}
	});
    $(".scroll").on("click",function(e) {
    $.scrollify.next();
   });
});
