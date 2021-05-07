$(function(){

 $("select").on("change",function(){
console.log("someone changed the fiter")
  $("img").hide();
  $("."+this.value).show();

 });

});
