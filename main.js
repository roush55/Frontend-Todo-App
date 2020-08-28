
$(document).ready(function(){
    console.log('ready');
    
});
$('#closebtn').click(function(){
       $('#sidebar').hide()})


$(".task ul").on('click','li',function(){
    $(this).toggleClass('done')
})



$(document).ready(function(){
 console.log('ready')   
});

// hide the  side navbar 
$('#closebtn').on('click','#siderbar',function(){
   $(this).hide();
    
})
//toggle to checked list 


$('.drag').sortable({axis:"y"});

