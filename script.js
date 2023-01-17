
let evaluatedText = document.getElementById("evaluatedText") // initially string is empty so count is also empty
let letterCount = document.getElementById("letterCount")

evaluatedText.addEventListener("input",()=>{
		let count = evaluatedText.value.length;
		 letterCount.innerHTML = count;
})
