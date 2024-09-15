
document.getElementById('colorToggleBtn').addEventListener('click', function() {
    
    var currentColor = document.body.style.backgroundColor;
   
    
    if (currentColor === 'black') {
        document.body.style.backgroundColor = 'white';
        document.getElementById('colorToggleBtn').innerText ='Click here to change the change it into black'
       
    }
     else {
        document.body.style.backgroundColor = 'black';
       document.getElementById('colorToggleBtn').innerText ='Click here to change the change it into white'
    }
});
