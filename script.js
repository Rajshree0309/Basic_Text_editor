document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const themeToggle = document.getElementById('themeToggle');
    const fontSelect = document.getElementById('fontSelect');
    const fontSize = document.getElementById('fontSize');
    const fontColor = document.getElementById('fontColor');
    const fontWeight = document.getElementById('fontWeight');
    const fontStyle = document.getElementById('fontStyle');
    const applyStylesBtn = document.getElementById('applyStyles');
    const saveBtn = document.getElementById('saveBtn');
    const clearBtn = document.getElementById('clearBtn');
    const output = document.getElementById('output');
  
    applyStylesBtn.addEventListener('click', applyStyles);
  
    themeToggle.addEventListener('change', function() {
      document.body.classList.toggle('dark-theme', themeToggle.checked);
    });
  
    saveBtn.addEventListener('click', function() {
      const text = editor.value;
      if (text.trim() === '') {
        alert('Please enter some text before saving.');
        return;
      }
      
      download('text.txt', text);
      output.innerText = 'Text saved!';
    });
  
    clearBtn.addEventListener('click', function() {
      editor.value = '';
      output.innerText = '';
    });
  
    function applyStyles() {
      const selectedFont = fontSelect.value;
      const selectedFontSize = fontSize.value + 'px';
      const selectedFontColor = fontColor.value;
      const selectedFontWeight = fontWeight.value;
      const selectedFontStyle = fontStyle.value;
  
      editor.style.fontFamily = selectedFont;
      editor.style.fontSize = selectedFontSize;
      editor.style.color = selectedFontColor;
      editor.style.fontWeight = selectedFontWeight;
      editor.style.fontStyle = selectedFontStyle;
    }
  
    function download(filename, text) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  });
  