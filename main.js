
 document.addEventListener('DOMContentLoaded', () => {

    // Select the links
    const links = document.querySelectorAll('.category')
    // Add Event Listeners for links
    for(let i = 0; i < links.length; i++) {
      const category = links[i].getAttribute('id');
      links[i].addEventListener("click", function() {

        // Declare GET request corresponding to link (category) clicked
        fetch(`https://excuser.herokuapp.com/v1/excuse/${category}`) // returns a promise
        .then((data) => { // returns a response object {status: xxx}
            
            // Check status code
            // TODO
            console.log('working', data);
            return data.json() 
        })
        .then((data) => {
            console.log(data)
            
            // Select paragraph tag
            const text = document.querySelector('.fact');
            
            // Update innerText
            text.innerText = data[0].excuse;
        })
        .catch((e) => {
          console.log('error', e);
        })
      })
    }

    /*
    Random Button
    */
    const random = document.getElementById('random');
    random.addEventListener('click', function() {

        // Random button logic
        fetch(`https://excuser.herokuapp.com/v1/excuse/`) // returns a promise
            .then((data) => { // returns a response object {status: xxx}
                
                // Check status code
                // TODO
                console.log('working', data);
                return data.json() 
            })
            .then((data) => {
                console.log(data)
                
                // Select paragraph tag
                const text = document.querySelector('.fact');
                
                // Update innerText
                text.innerText = data[0].excuse;
            })
            .catch((e) => {
              console.log('error', e);
            })
    })


    // JS Animation
    const actionBtns = document.querySelectorAll('.animationBtns');
    const title = document.getElementById('title');

    // Click the links or random btn
    for (let i = 0; i < actionBtns.length; i++) {
        actionBtns[i].addEventListener('click', function() {
            
            // set title display to none
            title.style.display = 'none';

            // Transform font size
            const btns = document.querySelectorAll('.btns')
            btns.forEach( el => {
                el.style.transition = "translateY(-200px) 2s ease";
            })
            
            // css animation:
                // hide title
                // push btns up
                // expand box 

        })
    }
        

 });

// fetch boilerplate



// endpoint --> https://excuser.herokuapp.com/v1/excuse