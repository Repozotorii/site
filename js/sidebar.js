// function clicked() {
// 	document.getElementById('content').innerHTML= '<object type="text/html" data="info/license.html"></object>'; 
// }
// function clicked(){
// 	document.getElementById('content').load('info/license.html');
// }
// $(document).ready(function() {
//     $('nav ul li a').on('click', function( e ) {
//         e.preventDefault();
//         let url = $(this).attr('href');
//         $('#content').load(url);
//     });
// });
var li_elements=document.querySelectorAll(".wrapper_left ul li");
var item_elements=document.querySelectorAll(".item");
for(var i = 0; i < li_elements.length;i++){
	li_elements[i].addEventListener("click",function(){
		li_elements.forEach(function(li){
			li.classList.remove("active");
		})
		this.classList.add("active");
		var li_value = this.getAttribute("data-li");
		item_elements.forEach(function(item){
			item.style.display = "none";
		})
		if (li_value=="license") {
				document.querySelector("." + li_value).style.display = "block";
		}
		else if (li_value=="company"){
				document.querySelector("." + li_value).style.display = "block";	
		}
		else if (li_value=="more"){
				document.querySelector("." + li_value).style.display = "block";
		}
		else if (li_value=="partners"){
				document.querySelector("." + li_value).style.display = "block";
		}
		else{
			console.log('');
		}
	});
}