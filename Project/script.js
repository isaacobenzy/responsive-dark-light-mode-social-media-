document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  
  // Check the user's preference from localStorage
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';

  // Set initial theme based on user's preference
  if (isDarkTheme) {
    document.body.classList.add('dark-theme');
    themeToggle.checked = true;
  }

  // Toggle theme on switch change
  themeToggle.addEventListener('change', function () {
    if (themeToggle.checked) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('darkTheme', 'true');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('darkTheme', 'false');
    }
  });
});
