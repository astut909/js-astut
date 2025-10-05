let lex = document.querySelector("h1");

window.addEventListener("keydown",function(event){
   if (event.key ===  " "  )
        lex.textContent="space";
   else
        lex.textContent=event.key;
});