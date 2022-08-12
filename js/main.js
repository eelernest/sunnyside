console.log(screen.width);
let gall = document.getElementById("gall");


if (screen.width < 600){
    gall.innerHTML= `<div id="gall" class="col-12 gall">
    <div id="img1" class="img1 p-0">
      <img class="imgss" src="images/mobile/image-gallery-milkbottles.jpg" alt="">
    </div>
    <div id="img2" class=" img2 p-0">
      <img class="imgss" src="images/mobile/image-gallery-orange.jpg" alt="">
    </div>
    <div id="img3" class=" img3 p-0">
      <img class="imgss" src="images/mobile/image-gallery-cone.jpg" alt="">
    </div>
    <div id="img4" class="img4 p-0">
      <img class="imgss" src="images/mobile/image-gallery-sugar-cubes.jpg" alt="">
    </div>
  </div>`;
}





