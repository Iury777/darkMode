const changeThemeBtn = document.querySelector('#change-theme')

// Toggle dark mode
function toggleDarkmode(){
    document.body.classList.toggle("dark")
}

//Carregar light ou dark mode

function loadTheme() {
    const  darkMode = localStorage.getItem("dark")

    if(darkMode) {
        toggleDarkmode();
    }
}
loadTheme()
changeThemeBtn.addEventListener("change", () =>{
   toggleDarkmode("dark")

   // Salvar ou removar o dark mode.

   localStorage.removeItem("dark");


   if(document.body.classList.contains('dark')) {
    localStorage.setItem("dark", 1);

   } 
})