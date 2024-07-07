const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.Key === ' ' ? 'Space' : e.key}</td>
      <td>${e.KeyCode}</td> 
      <td>${e.Code}</td>
    </tr>
    
    </table>
  </div>
  `;
});