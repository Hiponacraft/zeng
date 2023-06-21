const lightTheme = document.querySelector('#light-theme');
const darkTheme = document.querySelector('#dark-theme');

// Verificar si la propiedad `prefers-color-scheme` está disponible
if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
  // Detectar si el tema del sistema operativo es oscuro
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkTheme.disabled = false;
    lightTheme.disabled = true;
  } else {
    lightTheme.disabled = false;
    darkTheme.disabled = true;
  }
}
