let intentos = 1;
let login = true;
let cotizador = false;


function loginuser () {
    do {
        let user = prompt("Ingresa el nombre de Usuario. (3 intentos posibles)");
    
        if (user === null) {
            alert("Estás saliendo del cotizador.")
            break
        }
    
        if (user === "admin" && intentos <= 3) {
            alert("✅ Bienvenido " + user)
            login = false
            cotizador = true
        } else {
            alert("❌ No se reconoce el usuario " + user)
            intentos++
            if (intentos > 3) {
                alert("Superaste la cantidad de intentos posibles")
                break
            }
        }
    
    } while (login)
}

loginuser();

for (let i = 1; i < 6; i++) {
    if (cotizador) {
        let precio = parseFloat(prompt("Ingresa un precio para verificar si es aplicable de descuento. Precio "+i+"/5"));
        if (precio >= 10000) {
            alert("Es posible aplicar un 10% de descuento. El total a pagar es: $"+precio*0.9)
        } else if (precio >= 5000) {
            alert("Es posible aplicar un 5% de descuento. El total a pagar es: $"+precio*0.85)
        } else {
            alert("No se aplica ningún descuento. El total a pagar es: $"+precio)
        }
    }
}