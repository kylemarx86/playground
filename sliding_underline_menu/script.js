$(document).ready(function(){
    enableClickHandlers();
});

function enableClickHandlers(){
    $('.tab').click(function(){
        tabClicked(this)
    });
}

function tabClicked($elt){
    $elt = $($elt);
    // capture index of currently active tab
    var activeIndex = $elt.parent().find('.active').index();
    // check if index is that of currently active tab
    if($elt.index() !== activeIndex){
        // identify panel of tab that was clicked
        var $panel = $elt.parent().parent().parent();
        // unload content of currently active tab
        $panel.find('.content:not(.hidden)').addClass('hidden');
        // remove the class active from other tabs in descendents of the parent
        $elt.parent().find('.active').removeClass('active');
        // toggle the class active on this
        $elt.toggleClass('active');
        // load in content associated with respective tab
        $panel.find('.content').eq($elt.index()).toggleClass('hidden');
    }
}