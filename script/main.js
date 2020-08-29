
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

$('#slideMenu').on('click',function(){
    $('#sidebar').show()

})

$('#search').on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#drag li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });})



