var elForm = document.querySelector('.form');
var elInput = document.querySelector('.form-control');

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    
    list.setAttribute('class', 'list')

    var elLi = document.createElement('li');
    var elBtn = document.createElement('button');

    elLi.setAttribute('class', 'card');
    
    if(elInput.value.trim() === '') {
        elInput.classList.add("is-invalid")
        elInput.classList.remove("is-valid")

    }   else if(elInput.value.trim() !== ''){
        elInput.classList.add("is-valid")
        elInput.classList.remove("is-invalid")
        elLi.textContent = elInput.value.trim()
        elLi.appendChild(elBtn);
        elBtn.setAttribute('class', 'btn');
        elBtn.setAttribute('type', 'submit');
        elBtn.textContent = 'submit';
        elBtn.style.width = '20%';
        elBtn.style.marginTop = '20px';
        elBtn.style.marginLeft = 'auto';
        list.appendChild(elLi);
        elInput.value = null;
    }
    
})

//3.10.2
// function findLongest(text) {
// 	var textSplit = text.split(' ');
// 	var longest = '';

// 	for (var word of textSplit) {
// 		if (word.length > longest.length) {
// 			longest = word;
// 		}
// 	}
// 	return longest;
// }

// elBox.textContent = findLongest('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consectetur quae possimus odio facere impedit aliquid similique cupiditate quas. Eligendi iste voluptatem nemo necessitatibus incidunt dignissimos eius amet repudiandae consequatur?'); 

//3.10.3
// function sum(numbers) {
// 	var resultNumber = 0;

// 	for (var number of numbers) {
// 		resultNumber = resultNumber + number;
// 	}

// 	return resultNumber;
// }
// elBox.textContent = (sum([2, 4, 5]));