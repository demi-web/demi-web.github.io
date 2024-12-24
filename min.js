document.getElementById('p1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const details = document.getElementById('p-details');
    details.innerHTML = '<div class="col-md-12 details text-warning bg-black" style="color: red;"> <h1>Lorem ipsum dolor sit amet.</h1><ul><li style="margin-bottom: 5px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li> <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li><li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li><li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li><li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li></ul> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel incidunt voluptatum tempora, sit totam.</p></div>'; // Set inner HTML
    details.style.display = 'block'; // Show the message
  });