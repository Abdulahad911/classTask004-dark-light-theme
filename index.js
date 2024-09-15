
document.getElementById('colorToggleBtn').addEventListener('click', function() {
    
    var currentColor = document.body.style.backgroundColor;
    
    
    if (currentColor === 'black') {
        document.body.style.backgroundColor = 'white';
        document.getElementById('colorToggleBtn').innerText ='NIGHT'
         document.getElementById('colorToggleBtn').style.backgroundColor = 'black'
        document.getElementById('colorToggleBtn').style.color = 'white'
    }
     else {
        document.body.style.backgroundColor = 'black';
       document.getElementById('colorToggleBtn').innerText ='DAY'
       document.getElementById('colorToggleBtn').style.backgroundColor = 'white'
      document.getElementById('colorToggleBtn').style.color = 'black'
    }
});
