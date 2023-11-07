(function actualizarDatos() {
    // Obtener la fecha y hora actual
    const fecha = new Date();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    const diaSemana = fecha.getDay();
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const years = fecha.getFullYear();

    // Convertir arreglo en semanas y meses
    const arraySemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Llamar a los elementos HTML
    const elementoHora = document.getElementById("hora");
    const elementoMinutos = document.getElementById("minutos");
    const elementoSegundos = document.getElementById("segundos");
    const elementoAmpm = document.getElementById("ampm");
    const elementoDiaSemana = document.getElementById("diaSem");
    const elementoDia = document.getElementById("dia");
    const elementoMes = document.getElementById("mes");
    const elementoYear = document.getElementById("years");

    // Asignamos elementos para mostrar en pantalla fecha
    elementoDiaSemana.innerHTML = arraySemana[diaSemana];
    elementoDia.innerHTML = dia;
    elementoMes.innerHTML = arrayMeses[mes];
    elementoYear.innerHTML = years;

    // Lógica para AM/PM
    let ampm;
    if (hora >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    if (minutos < 10) {
        minutos = "0" + minutos;
        
    }

    if (segundos < 10) {
        segundos = "0" + segundos;
        
    }
    
    // Asignamos elementos para mostrar en pantalla hora
    elementoHora.innerHTML = hora;
    elementoMinutos.innerHTML = minutos;
    elementoSegundos.innerHTML = segundos;
    elementoAmpm.innerHTML = ampm;

    setInterval(actualizarDatos, 1000);
})();
