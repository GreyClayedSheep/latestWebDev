//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages
console.log(allpages);
hideall();
function hideall()
{
    //function to hide all pages
    for(let onepage of allpages)
        { //go through all subtopic pages
        onepage.style.display="none"; //hide it
        }
}
function show(pgno)
{
    //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage=document.querySelector("#page"+pgno);
    //show the page
    onepage.style.display="block";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () 
{
    show(1);
});
page2btn.addEventListener("click", function () 
{
    show(2);
});
page3btn.addEventListener("click", function () 
{
    show(3);
});

// Page 1 for flipping cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// Page 2 calculation
document.getElementById('addBtn').addEventListener('click', function() {
    performOperation('add');
});

document.getElementById('multiplyBtn').addEventListener('click', function() {
    performOperation('multiply');
});

function performOperation(operation) {
    const num1 = parseInt(document.getElementById('num1').value, 10);
    const num2 = parseInt(document.getElementById('num2').value, 10);
    const images = ["bird.png", "apple.png", "coin.png"];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    const visualContainer = document.getElementById('visualContainer');
    visualContainer.innerHTML = ''; // Clear previous visuals

    if (operation === 'add') {
        displayAddition(num1, num2, randomImage);
    } else if (operation === 'multiply') {
        displayMultiplication(num1, num2, randomImage);
    }

    const total = operation === 'add' ? num1 + num2 : num1 * num2;
    const resultText = `It is a total of ${total} ${randomImage.split('.')[0]}(s)!`;
    document.getElementById('resultText').innerHTML = resultText;
}

function displayAddition(num1, num2, randomImage) {
    const groupOne = createImageGroup(num1, randomImage, num1 + num2);
    const groupTwo = createImageGroup(num2, randomImage, num1 + num2);
    
    const visualContainer = document.getElementById('visualContainer');
    visualContainer.appendChild(groupOne);
    visualContainer.appendChild(groupTwo);
}

function displayMultiplication(num1, num2, randomImage) {
    const table = document.createElement('div');
    table.style.display = 'flex';
    table.style.flexWrap = 'wrap';
    
    for (let i = 0; i < num1; i++) {
        const row = document.createElement('div');
        row.style.display = 'flex';
        for (let j = 0; j < num2; j++) {
            const imgElement = createImageElement(randomImage, num2); // Use num2 as the denominator for percentage calculation
            row.appendChild(imgElement);
        }
        table.appendChild(row);
    }
    document.getElementById('visualContainer').appendChild(table);
}

function createImageGroup(num, randomImage, totalCount) {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '100%';
    
    for (let i = 0; i < num; i++) {
        container.appendChild(createImageElement(randomImage, totalCount)); // Use total count for percentage calculation
    }
    return container;
}

function createImageElement(imageFile, denominator) {
    const imgElement = document.createElement('img');
    imgElement.src = `images/${imageFile}`;
    imgElement.alt = imageFile.split('.')[0];
    imgElement.style.width = `${100 / denominator}%`; // Calculate width as a percentage of the container's width
    imgElement.style.height = 'auto'; // Maintain aspect ratio
    imgElement.style.objectFit = 'contain';
    return imgElement;
}
