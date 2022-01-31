import "./styles/app.css";

import usuario from './models/usuario.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderUsuario();
});


document.getElementById('book-form')
  .addEventListener('submit', function(e) {

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const contraseña= document.getElementById('contraseña').value;
    const fecNac= document.getElementById('fecNac').value;
    
   

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('email', email);
    formData.append('fecNac', fecNac);
    formData.append('contraseña', contraseña);
    

    // for(var pair of formData.entries()) {
    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New Book Object
    const usuario = new usuario(nombre, apellido, email,contraseña,fecNac,);

    // Validating User Input
    if (nombre === '' || apellido === '' || email === '' || contraseña === '') {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new usuario to the UI
      ui.addANewUsuario(formData);
      ui.renderMessage('New Usuario Added Successfully', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('usuario-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteUsuario(e.target.getAttribute('_id'));
      ui.renderMessage('Usuario Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
