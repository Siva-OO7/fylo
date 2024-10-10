const themeToggleBtn  = document.getElementById('theme-toggle');

const themeToggleDarkIcon  = document.getElementById('theme-toggle-dark-icon');

const themeToggleLightIcon  = document.getElementById('theme-toggle-light-icon');


if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    // Show the light option
    themeToggleLightIcon.classList.remove('hidden');  
  } else {
    // Show the Dark option
    themeToggleDarkIcon.classList.remove('hidden');
  }



function toggleMode(){
    // Toggle icon
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // If is set in localstorage

    if(localStorage.getItem('color-theme')){
        // If light, make dark and save in local storage
        if(localStorage.getItem('color-theme') === 'light' ){
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
        else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light')
        }
    }

    else {
        // If not in localstorage
        if(document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
        else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
}


// Listen for toggle btn

themeToggleBtn.addEventListener('click', toggleMode);


