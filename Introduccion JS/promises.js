/*
const aplicarDescuento = new Promise((resolve, reject) => {
  setTimeout(() => {
    let descuento = true;
    if (descuento) {
      resolve('Descuento aplicado');
    } else {
      reject('No se pudo aplicar el descuento');
    }
  }, 3000);
});

aplicarDescuento.then(resultado => {
  console.log(resultado);
}).catch(error => {
  console.log(error);
});
*/

/* Promises con AJAX */
const descargaUsuarios = cantidad => new Promise((resolve, reject) => {
  const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

  // Llamado AJAX
  const xhr = new XMLHttpRequest();

  // Abrir la conexion
  xhr.open('GET', api, true);

  // On load
  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.responseText).results);
    } else {
      reject(Error(xhr.statusText));
    }
  };

  xhr.onerror = (error) => reject(error);

  xhr.send();
});

descargaUsuarios(20).then(
  miembros => imprimirHTML(miembros),
  error => console.error(new Error('Hubo un error' + error))
);

function imprimirHTML(usuarios) {
  let html = '';
  usuarios.forEach(usuario => {
    html += `<li>
                Nombre: ${usuario.name.first} ${usuario.name.last}<br />
                Teléfono: ${usuario.phone}
                <hr />
              </li>`;
    
  });
  const contenedorApp = document.querySelector('#app');
  contenedorApp.innerHTML = html;
}