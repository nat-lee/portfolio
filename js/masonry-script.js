$(document).ready(function(){
    //isotope
    var workSection = document.querySelector('.work-section');
    var msnry = new Masonry(workSection,{
        itemSelector:'.item',
        columnWidth: workSection.querySelector('.one-third')
    });
    imagesLoaded( container, function() {
        msnry = new Masonry( container );
    });
});