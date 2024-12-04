function highlight() {
    //Write your code here
let strongs = document.querySelectorAll("strong");
// strongs.style.background = "green"
										
strongs.forEach((str) => {
		str.style.color = "green"
	})

}


function return_normal() {
    //Write your code here
	let strongs = document.querySelectorAll("strong");
										
strongs.forEach((str) => {
		str.style.color = "black"
	})

    
}
