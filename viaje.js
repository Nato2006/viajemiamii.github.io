function mostrarMapa() {
    document.getElementById("mapSection").style.display = "block";
}

function irAGoogleMaps() {

    let origen = document.getElementById("origen").value;

    if (origen === "") {
        alert("Ingresa una dirección");
        return;
    }

    let destino = "4071 NW 65th Ave, Virginia Gardens, Florida";

    let url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origen)}&destination=${encodeURIComponent(destino)}&travelmode=driving`;

    window.open(url, "_blank");
}