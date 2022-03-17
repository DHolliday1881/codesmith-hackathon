
 document.addEventListener('DOMContentLoaded', () => {

    /*
    Excuse by Category
    ---
    When clicked, update text on page to display excuse from corresponding 
    category that was clicked
    */
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
    Random Excuse 
    ---
    When clicked, update text on page to display random fact from any category
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


    /*
    Button-Click Animation
    ---
    When clicked, buttons will transform/transition to the top, display none on 
    title, 
    */
    const actionBtns = document.querySelectorAll('.animationBtns');

    // Click the links or random btn
    for (let i = 0; i < actionBtns.length; i++) {
        actionBtns[i].addEventListener('click', function() {
            
            // Add class to trigger transition
        
            const title = document.getElementById('title');            
            title.classList.add('btn-transition');
            
            // Transform buttons
            const btns = document.querySelectorAll('.btns')
            btns.forEach( el => {
                // el.classList.add('btn-transition'); /* do we need a different css class? otherwise uncomment this and comment out 93, 94 hrmmm... maybe we dont youre right but i dont know how to target each separate element to do a different transformation 
                el.style.transform = "translateY(-30px)";
                el.style.transition = "transform 2s ease";
            })
            
            // css animation:
                // hide title
                // push btns up
                // expand box 

        })
    }
        

    /*
    Dropdown Button Functionality
    ---
    When the user clicks on the button, toggle between hiding and showing 
    the dropdown content
    */
   
    function dropdownToggle() {
       document.getElementById("myDropdown").classList.toggle("show");
    }

    const categorySelectorBtn = document.getElementById('categorySelector');
    categorySelectorBtn.addEventListener('click', dropdownToggle);

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
        }
    }

});