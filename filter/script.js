//$ is a shorthand for jQuery
//calling a function
$(function(){
//calling function for 'select' box to know when a filter is pressed to 'change' image
 $("select").on("change",function(){
console.log("someone changed the fiter")
//hide the other images which were not selected
  $("img").hide();
//show what is selected 
  $("."+this.value).show();

 });

});
