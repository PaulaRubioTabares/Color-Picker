// Elements a usar
// Nota Error con querySelector porque me falto el selector 🤦‍♀️

/* Seleccionar color elegido */
const colorInput = document.getElementById("colorSelector");

/* Texto a cambiar e icono copiar */
const colorHexadecimal = document.getElementById("textoColorHexadecimal");
const colorRGB = document.getElementById("textoColorRGB");
const cuadroColor = document.querySelector(".cuadroColor");

// Convertir Hex a RGB
const convertirColor = (color) => {
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);
    return (rgbTexto = `rgb(${r}, ${g}, ${b})`);
};

/* Eventos */
document.addEventListener("click", (e) => {
    // console.log("Listo");
    // console.log(colorInput); // Todas las propiedades de color input
    // console.log(colorInput.value); // valor del input, al ser de color, da el número
    const color = colorInput.value;

    //Botón presionar
    if (e.target.id === "buttonPresionar") {
        // texto color hexadecimal
        colorHexadecimal.textContent = color;
        /* texto color RGB*/
        convertirColor(color);
        colorRGB.textContent = rgbTexto;
        //cuadro color
        cuadroColor.style.backgroundColor = color;
    }

    /* copiar color hexadecimal*/
    if (e.target.id === "iconoCopiarHexadecimal") {
        // para que se copie en el portapapeles el color
        navigator.clipboard
            .writeText(color)
            .then(() => console.log("texto copiado"))
            .catch((e) => console.log(e));
    }

    // copiar color RGB
    if (e.target.id === "iconoCopiarRGB") {
        // para que se copie en el portapapeles el color
        navigator.clipboard
            .writeText(rgbTexto)
            .then(() => console.log("texto copiado"))
            .catch((e) => console.log(e));
    }
});
