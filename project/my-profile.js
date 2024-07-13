console.log("This is my profile page!");

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