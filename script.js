/* script product-detail */
	/* Thay background-image cho idZoom */
	var link_img_zoom = document.getElementById("imgZoom").getAttribute('src');
	document.getElementById("overlay").style.backgroundImage = 'url('+link_img_zoom+')';
	/* Thay đổi hình anh khi click vào hình nhỏ */
	var img_items = document.querySelectorAll("#product-detail .describe .left .gallery-img .wrap ul li.item img");
	for (var i=0; i < img_items.length; i++) {
        img_items[i].addEventListener('click', changeImg, false);
    }
    function changeImg(){
    	let link_img_item = this.getAttribute('link-img');
    	let img_main =  document.querySelectorAll("#product-detail .describe .left .wrap-img-main img")[0];

    	img_main.setAttribute('src', link_img_item);
    	/* reove class active */
    	for (var i = 0; i < img_items.length; i++) {
   			img_items[i].parentElement.classList.remove('active');
		}
		/* thêm class active */
    	this.parentElement.classList.add("active");

    	/* Thay background-image cho idZoom */
    	var link_img_zoom = document.getElementById("imgZoom").getAttribute('src');
		document.getElementById("overlay").style.backgroundImage = 'url('+link_img_zoom+')';
    }
    /* end Thay đổi hình anh khi click vào hình nhỏ */

    /* Zoom */
    function zoomIn(event) {
	  var element = document.getElementById("overlay");
	  element.style.display = "inline-block";
	 
	  var img = document.getElementById("imgZoom");
	  var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
	  var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;

	  element.style.backgroundSize = "200% 200%";
	  element.style.backgroundPosition = (-posX * 0.8) + "px " + (-posY * 0.8) + "px";

	}
	function zoomOut() {
	  var element = document.getElementById("overlay");
	  element.style.display = "none";
	}
    /* end Zoom */

/* end script product-detail */

