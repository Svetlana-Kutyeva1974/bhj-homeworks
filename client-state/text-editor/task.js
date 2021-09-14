const button = document.getElementById('clear');
const editor = document.getElementById('editor');

  editor.value = localStorage.getItem('editor');
  editor.oninput = () => {
    localStorage.setItem('editor', editor.value)
  };

  button.onclick = () => {
    localStorage.removeItem('editor');
    editor.value ='';
  }