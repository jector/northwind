document.addEventListener("DOMContentLoaded", () => {
    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: 'MM-dd'
    });

    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
    // event listener for check/uncheck
    document.getElementById('checkbox-card').addEventListener('change', (e) => {
        if (e.target.classList.contains('form-check-input')) {
            //alert(e.target.id)
            //document.getElementById(e.target.id + 'Img').style.visibility = e.target.checked ? "visible" : "hidden";
            const elem = document.getElementById(e.target.id + 'Img');
            elem.style.visibility = "visible";
            elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
            e.target.checked ?
                elem.classList.add("animate__animated", "animate__bounceInDown") :
                elem.classList.add("animate__animated", "animate__bounceOutUp");
        }
    });

    // HOMEWORK
    // 1. Randomize the attention seeker in balloons.html. Choose a random animate.css attention seeker and apply when the page loads using JavaScript.
    // -- Math.random() will return a random floating-point number between zero and one. 
    // -- To convert it into an array index, multiply it by the size of the array and take Math.floor to round it down
    const animations = ["bounce", "flash", "pulse", "rubberBand", "shakeX", "shakeY", "headShake", "swing", "tada", "wobble", "jello", "heartBeat"];
    const ramdonClass = Math.floor(Math.random() * animations.length);
    const animation = animations[ramdonClass];
    document.getElementById('titlePage').classList.add("animate__" + animation);

    // 2. Create a toast when the submit button is clicked only if there are no balloons selected.
    document.getElementById('submit').addEventListener('click', (e) => {
        e.preventDefault();
        // -- Spread Syntax or Spread Operator
        // -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        // -- When used with document.querySelectorAll, it allows you to convert the NodeList returned by querySelectorAll into an array.
        const x = [...document.querySelectorAll('.form-check-input')].filter(c => c.checked).length;
        x === 0 && bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        /*
        const x = [...document.querySelectorAll('.form-check-input')].filter(c => c.checked).length;
        const showToast = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        const genericToast = document.getElementById('liveToast');
        const genericTextToast = document.getElementById("toastText");
        const node00 = document.createTextNode(" Please select 1 or more balloons.");
        const node01 = document.createTextNode(" Good! You have chosen 1 balloon.");
        const node02 = document.createTextNode(" Great! You have chosen 2 balloon.");
        const node03 = document.createTextNode(" Choosing all of them is the best choice.");
        if(x === 0){
            showToast;
            genericToast.classList.remove("text-bg-secondary", "text-bg-primary", "text-bg-success", "bg-gradient");
            genericToast.classList.add("text-bg-danger", "bg-gradient");
            genericTextToast.innerHTML = "";
            genericTextToast.appendChild(node00);
        }else if(x === 1){
            showToast;
            genericToast.classList.remove("text-bg-danger", "text-bg-primary", "text-bg-success", "bg-gradient");
            genericToast.classList.add("text-bg-secondary", "bg-gradient");
            genericTextToast.innerHTML = "";
            genericTextToast.appendChild(node01);
        }else if(x === 2){
            showToast;
            genericToast.classList.remove("text-bg-danger", "text-bg-secondary", "text-bg-success", "bg-gradient");
            genericToast.classList.add("text-bg-primary", "bg-gradient");
            genericTextToast.innerHTML = "";
            genericTextToast.appendChild(node02);
        }else if(x === 3){
            showToast;
            genericToast.classList.remove("text-bg-danger", "text-bg-secondary", "text-bg-primary", "bg-gradient");
            genericToast.classList.add("text-bg-success", "bg-gradient");
            genericTextToast.innerHTML = "";
            genericTextToast.appendChild(node03);
        }
        */
    });

    // 3. Add ability to check / uncheck all balloons with a single click (using a button, checkbox, link, etc…)
    document.getElementById('check-all').addEventListener('click', (e) => {
        document.querySelectorAll('.form-check-input').forEach((c) => {
            c.checked = true
            const elem = document.getElementById(c.id + 'Img');
            elem.style.visibility = "visible";
            elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
            elem.classList.add("animate__animated", "animate__bounceInDown");
        });
    })
    document.getElementById('uncheck-all').addEventListener('click', (e) => {
        document.querySelectorAll('.form-check-input').forEach((c) => {
            c.checked = false
            const elem = document.getElementById(c.id + 'Img');
            elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
            elem.classList.add("animate__animated", "animate__bounceOutUp");
        });
    });

    // 4. Hovering the mouse over a checkbox label should change the color of the h1 element (Happy Birthday!) 
    //to the balloon color indicated in the label. Moving the mouse out of the label should reset the color.
    // -- Get the 'checkbox' element
    const checkOver = document.getElementById('checkbox-card');
    // -- Add a mouseover event listener
    checkOver.addEventListener('mouseover', (event) => {
        // -- event.target refers to the mouseover <label> element
        if (event.target.classList.contains('form-check-label')) {
            // -- Change the H1 font color
            document.getElementById('titlePage').style.color = event.target.getAttribute('for');
            //console.log("estoy aqui");
        }
    });
    // -- Add a mouseout event listener
    checkOver.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('form-check-label')) {
            // -- Change the H1 font color back to its original color
            document.getElementById('titlePage').style.color = '';
        }
    });

});
