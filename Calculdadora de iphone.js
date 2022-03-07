<script>
//Titulo
document.write ("<h1>Divisor de Iphone 1.0</h1>")

//Entrada de dados
let iphone = prompt (" Quantos Iphone você tem?");
let pessoas = prompt ("Para divir por quantas pessoas");

// processamento
let total =  iphone / pessoas ^ 0 ;
let resto =  iphone % pessoas ^ 0 ;

// mensagem final
document.write("<br> O total de iphone 📱 é " + iphone)
document.write ("<br> O total de pessoas 👤 é " + pessoas)
document.write (" <br> O total de iphone 🍎 por pessoa é " + (total) + " e sobrou " + (resto) + " para você ");
</script>
