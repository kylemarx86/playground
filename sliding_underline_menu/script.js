$(document).ready(function(){
    enableClickHandlers();
});

function enableClickHandlers(){
    // $('.tab').click(function(){
    //     // check if index is 
    //     // remove the class active from other tabs in descendents of the parent
    //     $(this).parent().find('.active').removeClass('active');
    //     // toggle the class active on this
    //     $(this).toggleClass('active');
    //     // console.log('index', $(this).parent().index(this));
    //     console.log('index', $(this).index());
    // });
    $('.tab').click(function(){
        tabClicked(this)
    });
}

function tabClicked($elt){
    $elt = $($elt);
    // console.log('elt:', $elt);

    console.log('active:', $elt.parent().find('.active').index())
    console.log('index', $elt.index());
    // capture index of currently active tab
    var activeIndex = $elt.parent().find('.active').index();
    // check if index is that of currently active tab
    if($elt.index() !== activeIndex){

        $panel = $elt.parent().parent().parent();

        // unload content of currently active tab
            // take the content in the currently listed index and add the hidden class to it
        // $elt.parent().parent().parent().find('.content:not(.hidden)').addClass('hidden');
        $panel.find('.content:not(.hidden)').addClass('hidden');

        // remove the class active from other tabs in descendents of the parent
        $elt.parent().find('.active').removeClass('active');

        // toggle the class active on this
        $elt.toggleClass('active');

        // load in content associated with respective tab
        // $panel.find('.content').index($elt.index()).toggleClass('hidden');
        $panel.find('.content').eq($elt.index()).toggleClass('hidden');
        // $elt.parent().parent().parent().find('.content').index($elt.index()).toggleClass('hidden');
        // $elt.parent().parent().parent().find('.content').index($elt.index());
        // $elt.parent().parent().parent().find('.content');
    }
    
    
}