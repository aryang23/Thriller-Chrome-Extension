let input = document.querySelector('.dict-input');
let searchBtn = document.querySelector('.dict-button');
let dictApiKey = 'Your-API-Key';
let notFound = document.querySelector('.not__found');
let defBox = document.querySelector('.def');
let audioBox = document.querySelector('.audio');
let loading = document.querySelector('.loading');

let opened = false;
searchBtn.addEventListener("click", function(e) {
	opened = !opened;

	if(opened)
	{
		document.querySelector(".data.dict-container").style.display="block";
		e.preventDefault();

		// clear data
		audioBox.innerHTML = '';
		notFound.innerText = '';
		defBox.innerText = '';
		//Get Input Data
		let word = input.value;
		if (word === '') {
			alert("Word is required");
			return;
		}
		getData(word);


	}
	else
	{
		document.querySelector(".data.dict-container").style.display="none";
	}
})
// searchBtn.addEventListener("click", function (e) {
// 	e.preventDefault();

// 	// clear data
// 	audioBox.innerHTML = '';
// 	notFound.innerText = '';
// 	defBox.innerText = '';
// 	//Get Input Data
// 	let word = input.value;
// 	if (word === '') {
// 		alert("Word is required");
// 		return;
// 	}

// 	getData(word);
// })

async function getData(word) {


	loading.style.display = "block";

	//AJAX Call 
	const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?
	key=${dictApiKey}`);
	const data = await response.json();

	//If empty result 
	if(!data.length){
		loading.style.display = "none";
		notFound.innerText = "No Result Found!!";
		return;
	}

	//If result is suggestions 
	if(typeof data[0] === 'string'){
		loading.style.display = "none";
		let heading = document.createElement("h3");
		heading.innerText = 'Did You mean?';
		notFound.appendChild(heading);

		data.forEach(element =>{
			let suggestion = document.createElement("span");
			suggestion.classList.add("suggested");
			suggestion.innerText = element;

			notFound.appendChild(suggestion);
		})

		return;
	}

	//Result Found
	loading.style.display = "none";
	let defination =  data[0].shortdef[0];
	defBox.innerText = defination;
	console.log(data);

	//Sound
	const soundName = data[0].hwi.prs[0].sound.audio;
	if(soundName)
	{
		renderSound(soundName);
	}
}

function renderSound(soundName){
	let subFolder = soundName.charAt(0);

	let soundSrc = `https://media.merriam-webster.com/soundc11/${subFolder}/${soundName}.wav?key=${dictApiKey}`;

	let aud = document.createElement("audio");

	aud.src = soundSrc;
	aud.controls = true;

	audioBox.appendChild(aud);

}
