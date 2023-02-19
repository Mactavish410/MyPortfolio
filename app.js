$(function () {
  $(".my-skills__icon").mouseover(function(){
     this.children[0].src = `img/icon;hover/icon ${this.children[0].alt} -- hover.svg`  
   });
   
    $(".my-skills__icon").mouseout(function(){
        this.children[0].src = `img/icon/icon ${this.children[0].alt}.svg`
   });
});

$(function () {
  $(".my-work__block").mouseover(function(){
      let active =  this.children[0]
      active.classList.toggle('my-work__img-active')
   });
   
    $(".my-work__block").mouseout(function(){
      let active =  this.children[0]
      active.classList.toggle('my-work__img-active')
   });
});

// $(".my-work__block").click(function(event){
//      console.log(this)
//      let active =  this.children[0]
//      active.classList.toggle('my-work__img-active')
//    });

// $(".my-work__block").click(function(event){
//      console.log(this)
//      let active =  this.children[0]
//      active.classList.toggle('my-work__img-active')
//    });