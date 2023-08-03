document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const contactsTable = document.getElementById('contactsTable');
  
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const nameInput = document.getElementById('name');
      const phoneInput = document.getElementById('phone');
  
      const name = nameInput.value;
      const phone = phoneInput.value;
  
      if (!name || !phone) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
  
      const newRow = contactsTable.insertRow();
      const nameCell = newRow.insertCell();
      const phoneCell = newRow.insertCell();
  
      nameCell.innerText = name;
      phoneCell.innerText = phone;
  
      nameInput.value = '';
      phoneInput.value = '';
    });
  });