

 const insert = document.getElementById('insert')

window.addEventListener("keydown", (e) => {

    console.log(e);
  insert.innerHTML =`
  <div class="wapper">
    <table>
        <tr>
          <th>Key</th>
          <th>KeyPress</th>
          <th>Keycode</th>
         
        </tr>
        <tr>
        <td >${e.key=== " "? " space":e.key}</td>
        <td >${e.keyCode}</td>
        <td >${e.code}</td>
        
        </tr>
     
      </table>
    </div>
  `
  
 });