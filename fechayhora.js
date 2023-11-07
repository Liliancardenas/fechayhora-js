(function name(params) {
//Obtener la fecha y hora actual
    const fecha = new Date();
    let ampm;
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    const diaSemana = fecha.getDay(); // lo entrega como un arreglo desde 0
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const years = fecha.getFullYear();
})();