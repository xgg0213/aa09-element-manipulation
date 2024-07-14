console.log("This is my profile page!");

window.onload = () => {
function addTitle() {
    // add the title of the page to "(Your name)'s Portfolio"

    // Your code here 
    const h1 = document.createElement('h1');
    h1.innerText = 'Erin Gan';
    h1.className = 'name';
    document.body.appendChild(h1);
}

addTitle();

function addDetails() {
    const ul = document.createElement('ul');
    ul.className = 'my-details';

    // option 1: manual coding
    // const li1 = document.createElement('li');
    // const li2 = document.createElement('li');
    // const li3 = document.createElement('li');
    // const li4 = document.createElement('li');

    // li1.innerText = "Erin likes reading";
    // li2.innerText = "Erin is from China";
    // li3.innerText = "Erin is a data scientist at Google";
    // li4.innerText = "Erin is attending a SWE bootcamp";

    // ul.appendChild(li1);
    // ul.appendChild(li2);
    // ul.appendChild(li3);
    // ul.appendChild(li4);

    // option 2: programmatic coding for li elements
    let liEl = [
        "Erin likes reading"
        ,"Erin is from China"
        ,"Erin is a data scientist at Google"
        ,"Erin is attending a SWE bootcamp"
    ]

    for (let i = 0; i < liEl.length; i++) {
        el = document.createElement('li');
        el.innerText = liEl[i];
        el.className = 'detail';
        ul.appendChild(el);
    }

    // add a clock
    const clock = document.createElement('span');
    

    
    const time = () => {
        setInterval(() => {
            const currentTime = new Date().toLocaleTimeString();
            clock.innerText = currentTime;
            // ul.appendChild(clock);    
            
        }, 1000)
    }

    time();

    const newLi = document.createElement('li');
    newLi.className = 'detail';
    newLi.innerHTML = `I live in City, State, and it's currently `;

    newLi.appendChild(clock);
    ul.appendChild(newLi);

    

    document.body.appendChild(ul);
    
}

addDetails();

function addSection() {
    const sections = [
        'My Favorites'
        ,'My Likes'
        ,'My Dislikes'
    ]

    for (let i = 0; i < sections.length; i++) {
        const newSec = document.createElement('section');
        const newUl = document.createElement('ul');
        const newLi = document.createElement('li');
        newLi.innerText = 'samples';
        newLi.className = 'newLi';
        newSec.className = 'section';
        newSec.innerText = sections[i];

        newUl.appendChild(newLi);
        newSec.appendChild(newUl);
        document.body.appendChild(newSec);
    }
}

addSection();

function updateHTML() {
    const elements = document.getElementsByClassName('newLi');
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = 'updated samples';
    }
}

updateHTML();


function countDown () {
    let diff;
    let diffD;
    let diffH;
    let diffM;
    let diffS;

    const cd = document.createElement('div');
    const contents = document.createElement('span');
    const time = () => {
        setInterval(() => {
            const bday = new Date('03/09/2025')
            const cday = new Date();
            diff = bday.getTime() - cday.getTime();
            contents.innerText = diff;
            // diffD = Math.floor(diff/(24*60*60));
            // diffH = Math.floor((diff - diffD*24*60*60)/(60*60))
            // diffM = Math.floor((diff - diffD*24*60*60 - diffH *60*60)/60);
            // diffS = Math.floor(diff - diffD*24*60*60 - diffH *60*60 - diffM*60);;     
            
        }, 1000)
    }

    time();
    
    cd.innerHTML = 'Count Down To My Next Birthday: ';
    cd.appendChild(contents)
    
            
    

    // const contents = document.createElement('span');
    // contents.innerText = diffD;
    // cd.appendChild(contents);
    // cd.innerHTML = 'Count Down To My Next Birthday: ' + diffD + ' days ' + diffH + ' hours ' + diffM + ' minutes ' + diffS + ' seconds';   
    // cd.innerHTML = 'Count Down To My Next Birthday: ' + diff;
    document.body.appendChild(cd);

}

countDown();
}