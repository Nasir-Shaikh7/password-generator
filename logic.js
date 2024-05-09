document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton');
    const copyButton = document.getElementById('copyButton');
    const passwordInput = document.getElementById('password');
    const lengthInput = document.getElementById('length');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');
  
    generateButton.addEventListener('click', generatePassword);
    copyButton.addEventListener('click', copyPassword);
  
    function generatePassword() {
      const length = parseInt(lengthInput.value);
      const uppercase = uppercaseCheckbox.checked;
      const lowercase = lowercaseCheckbox.checked;
      const numbers = numbersCheckbox.checked;
      const symbols = symbolsCheckbox.checked;
  
      const password = generateRandomPassword(length, uppercase, lowercase, numbers, symbols);
      passwordInput.value = password;
    }
  
    function copyPassword() {
      passwordInput.select();
      document.execCommand('copy');
    }
  
    function generateRandomPassword(length, uppercase, lowercase, numbers, symbols) {
      let charset = '';
      if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
      if (numbers) charset += '0123456789';
      if (symbols) charset += '!@#$%^&*()_-+=<>?';
  
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
      }
  
      return password;
    }
  });
  