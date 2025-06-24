function showCV(id) {
  document.querySelectorAll('.cv').forEach(cv => {
    cv.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
  }
});

function toggleCV(id) {
  const cv = document.getElementById(id);
  if (cv.classList.contains('active')) {
    cv.classList.remove('active');
  } else {
    document.querySelectorAll('.cv').forEach(c => c.classList.remove('active'));
    cv.classList.add('active');
  }
}


