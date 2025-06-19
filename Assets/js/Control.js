let modalComando = 0;
//let select_power = document.getElementById('select_power');
let sp_temp_esquema = document.getElementById('sp_temp_esquema');
let sp_ety_esquema = document.getElementById('sp_ety_esquema');
let sp_co2_esquema = document.getElementById('sp_co2_esquema');
let sp_humidity_esquema = document.getElementById('sp_humidity_esquema');
let sp_hora_esquema = document.getElementById('sp_hora_esquema');


//console.log(select_power);

function power_c(data=0){
    if(data==0){
        res = temp==0 ? 'C' :'F';
    }else{res= temp==0 ? data: parseInt((data*9)/5 +32);}
    return res;
}
//select_power="";



spTemperatureInput = [];
spEthyleneInput = [];
spCO2Input = [];
spHumidityInput = [];
spIHoursInput = [];
elpower_state = [];
elavl = [];



function alertas(msg, icono) {
    Swal.fire({
        position: 'top-end',
        icon: icono,
        title: msg,
        showConfirmButton: false,
        timer: 3000
    })
}
function roundToDecimal(number, decimals) {
    // Redondea el número a la cantidad deseada de decimales
    let roundedNumber = number.toFixed(decimals);
    
    // Reemplaza la coma con punto (si es necesario)
    return roundedNumber.replace(',', '.');
}


let contenidoControl = document.getElementById('contenidoControl');
// FUNCIONES PARA ABRIR MODALES EN VISTA CONTROL
function procesarTmp(){
    //aqui enviar los datos al modal
    valor_anterior = parseInt($("#tmp_SP_a").val());
    valor_cambiar = $("#tmp_SP").val();
    text1 ="<div class='container'><div class='row'><div class='col'></div><div class='col-3'><h3 class='text-warning'><strong>"+valor_anterior+" F°</strong></h3></div><div class='col-2'><i class='bi bi-box-arrow-right'></i></div><div class='col-3'><h3 class='text-success'><strong>"+valor_cambiar+" F°</strong></h3></div><div class='col'></div></div></div>"
    sp_temp_esquema.innerHTML = text1; // sin peligro
    $('#procesarTMP').modal('show');
}
function closeProcesarTmp(){
    //let value = $( this ).val();
    $('.closeTMP').attr('hidden',true);
    $('.procesarTMP').attr('hidden',true);
    $('input[name=\'tmp_SP\']').val(spTemperatureInput[0]);
}

function procesarEthy(){
    //aqui enviar los datos al modal
    valor_anterior = parseInt($("#ethylene_SP_a").val());
    valor_cambiar = $("#ethylene_SP").val();
    text1 ="<div class='container'><div class='row'><div class='col'></div><div class='col-3'><h3 class='text-warning'><strong>"+valor_anterior+" ppm</strong></h3></div><div class='col-2'><i class='bi bi-box-arrow-right'></i></div><div class='col-3'><h3 class='text-success'><strong>"+valor_cambiar+" ppm</strong></h3></div><div class='col'></div></div></div>"
    sp_ety_esquema.innerHTML = text1; // sin peligro

    $('#procesarETHY').modal('show');
}

function closeProcesarEthy(){
    $('.closeETHY').attr('hidden',true);
    $('.procesarETHY').attr('hidden',true);
    $('input[name=\'ethylene_SP\']').val(spEthyleneInput[0]);
}

function procesarCO2(){
    //aqui enviar los datos al modal
    valor_anterior = parseInt($("#co2_SP_a").val());
    valor_cambiar = $("#co2_SP").val();
    text1 ="<div class='container'><div class='row'><div class='col'></div><div class='col-3'><h3 class='text-warning'><strong>"+valor_anterior+" %</strong></h3></div><div class='col-2'><i class='bi bi-box-arrow-right'></i></div><div class='col-3'><h3 class='text-success'><strong>"+valor_cambiar+" %</strong></h3></div><div class='col'></div></div></div>"
    sp_co2_esquema.innerHTML = text1; // sin peligro

    $('#procesarCO2').modal('show');
}

function closeProcesarCO2(){
    $('.closeCO2').attr('hidden',true);
    $('.procesarCO2').attr('hidden',true);
    $('input[name=\'co2_SP\']').val(spCO2Input[0]);
}

function procesarHumidity(){
    //aqui enviar los datos al modal
    valor_anterior = parseInt($("#humidity_SP_a").val());
    valor_cambiar = $("#humidity_SP").val();
    text1 ="<div class='container'><div class='row'><div class='col'></div><div class='col-3'><h3 class='text-warning'><strong>"+valor_anterior+" %</strong></h3></div><div class='col-2'><i class='bi bi-box-arrow-right'></i></div><div class='col-3'><h3 class='text-success'><strong>"+valor_cambiar+" %</strong></h3></div><div class='col'></div></div></div>"
    sp_humidity_esquema.innerHTML = text1; // sin peligro

    $('#procesarHumidity').modal('show');
}

function closeProcesarHumidity(){
    $('.closeHumidity').attr('hidden',true);
    $('.procesarHumidity').attr('hidden',true);
    $('input[name=\'humidity_SP\']').val(spHumidityInput[0]);
}

function procesarIHours(){
    //aqui enviar los datos al modal
    valor_anterior = parseInt($("#i_hours_a").val());
    valor_cambiar = $("#i_hours").val();
    text1 ="<div class='container'><div class='row'><div class='col'></div><div class='col-3'><h3 class='text-warning'><strong>"+valor_anterior+"h</strong></h3></div><div class='col-2'><i class='bi bi-box-arrow-right'></i></div><div class='col-3'><h3 class='text-success'><strong>"+valor_cambiar+" h</strong></h3></div><div class='col'></div></div></div>"
    sp_hora_esquema.innerHTML = text1; // sin peligro

    $('#procesarIHours').modal('show');
}

function closeProcesarIHours(){ 
    $('.closeIHours').attr('hidden',true);
    $('.procesarIHours').attr('hidden',true);
    $('input[name=\'i_hours\']').val(spIHoursInput[0]);
}
//closePower

function closePower(){ 
    $('.closepower').attr('hidden',true);
    $('.procesarpower').attr('hidden',true);
    select_power.value =elpower_state[0];
    //$('input[name=\'i_hours\']').val(spIHoursInput[0]);
}

function closeAVL(){ 
    $('.closeavl').attr('hidden',true);
    $('.procesaravl').attr('hidden',true);
    select_avl_ok.value =elavl[0];
    //$('input[name=\'i_hours\']').val(spIHoursInput[0]);
}


function procesarData(){
    $('#tmp_SP').TouchSpin({
        min: -40,
        max: 104,
        step: 0.1,
        decimals: 1,
        boostat: 5,
        maxboostedstep: 10,
        postfix: '°F'
    })
    $('input[name=\'tmp_SP\']').on("change",function(event){
        let btnProcesarTMP = 
        "<div class='d-flex justify-content-center gap-2'><button type='button' class='btn procesarTMP' style='background-color: #032338; color: white;' onclick='procesarTmp()'>Submit</button><button type='button' class='btn btn-danger closeTMP' onclick='closeProcesarTmp()'>Cancel</button></div>";
        $('#btnProcesarTMP').html(btnProcesarTMP);
    })
    /*.on('touchspin.on.startupspin', function () {
        let container = $('#tmp_SP').closest('.bootstrap-touchspin');
        container.attr('id', 'tmp_SP_container');
        container.find('.bootstrap-touchspin-up').attr('id', 'tmp_SP_up');
        container.find('.bootstrap-touchspin-down').attr('id', 'tmp_SP_down');
    });

    $('#tmp_SP_up').click(function () {
        alert('Hola');
    });*/

    /*
    $('.bootstrap-touchspin-up').click(function () {
        let buttonProcesarTMP = "<button type='button' class='btn' style='background-color: #032338; color: white;' onclick='procesarTemperatura()'>Procesar</button>";
        let buttonProcesarEthy = "<button type='button' class='btn' style='background-color: #032338; color: white;' onclick='procesarEthy()'>Procesar</button>";
       
        $('#btnProcesarTMP').html(buttonProcesarTMP);
        $('#btnProcesarEthy').html(buttonProcesarEthy);
    });

    $('.bootstrap_touchspin_down').click(function () {
        alert('hola');
    });*/

    $("#ethylene_SP").TouchSpin({
        min: 0,
        max: 300,
        step: 1,
        decimals: 0,
        boostat: 5,
        maxboostedstep: 10,
        postfix: 'PPM'
    });
    $('input[name=\'ethylene_SP\']').on("change",function(event){
        let btnProcesarEthy = "<div class='d-flex justify-content-center gap-2'><button type='button' class='btn procesarETHY' style='background-color: #032338; color: white;' onclick='procesarEthy()'>Submit</button><button type='button' class='btn btn-danger closeETHY' onclick='closeProcesarEthy()'>Cancel</button></div>";
        $('#btnProcesarEthy').html(btnProcesarEthy);
    })

    $('#co2_SP').TouchSpin({
        min: 0,
        max: 30,
        step: 0.1,
        decimals: 1,
        boostat: 5,
        maxboostedstep: 10,
        postfix: '%'
    });

    $('input[name=\'co2_SP\']').on("change",function(event){
        let btnProcesarCO2 = "<div class='d-flex justify-content-center gap-2'><button type='button' class='btn procesarCO2' style='background-color: #032338; color: white;' onclick='procesarCO2()'>Submit</button><button type='button' class='btn btn-danger closeCO2' onclick='closeProcesarCO2()'>Cancel</button></div>";
        $('#btnProcesarCO2').html(btnProcesarCO2);
    })

    $('#humidity_SP').TouchSpin({
        min: 0,
        max: 100,
        step: 1,
        decimals: 0,
        boostat: 5,
        maxboostedstep: 10,
        postfix: '%'
    });

    $('input[name=\'humidity_SP\']').on("change",function(event){
        let btnProcesarHumidity = "<div class='d-flex justify-content-center gap-2'><button type='button' class='btn procesarHumidity' style='background-color: #032338; color: white;' onclick='procesarHumidity()'>Submit</button><button type='button' class='btn btn-danger closeHumidity' onclick='closeProcesarHumidity()'>Cancel</button></div>";
        $('#btnProcesarHumidity').html(btnProcesarHumidity);
    })

    $('#i_hours').TouchSpin({
        min: 0,
        max: 100,
        step: 1,
        decimals: 0,
        boostat: 5,
        maxboostedstep: 10,
        postfix: 'Hrs'
    });

    $('input[name=\'i_hours\']').on("change",function(event){
        let btnProcesarIHours = "<div class='d-flex justify-content-center gap-2'><button type='button' class='btn procesarIHours' style='background-color: #032338; color: white;' onclick='procesarIHours()'>Submit</button><button type='button' class='btn btn-danger closeIHours' onclick='closeProcesarIHours()'>Cancel</button></div>";
        $('#btnProcesarIHours').html(btnProcesarIHours);
    })

    $('.clean_inputTMP').click(function () {  
        $('#tmp_SP').val(spTemperatureInput[0]);
        

    });

    $('.clean_inputETHY').click(function () {  
        $('#ethylene_SP').val(spEthyleneInput[0]);
    });

    $('.clean_inputCO2').click(function () {  
        $('#co2_SP').val(spCO2Input[0]);
    });

    $('.clean_inputHumidity').click(function () {  
        $('#humidity_SP').val(spHumidityInput[0]);
    });

    $('.clean_inputIHours').click(function () {  
        $('#i_hours').val(spIHoursInput[0]);
    });
    
    /*
    let o1 = "<option value='0'>NONE</option>";
    let o2 = "<option value='1'>FULL</option>";
    if($('#select_avl_14872').val() == 0){
        $('#select_avl_14872').html(o1+o2);
    }else{
        $('#select_avl_14872').html(o2+o1);
    }
    */
}

document.addEventListener("DOMContentLoaded", async function(){
    try{
        const response = await fetch(base_url + "Control/ControlContent",{method: 'GET'});
        const data = await response.json();
        console.log(data.data[0].power_state);
        contenidoControl.innerHTML  =data.text;
        let select_power = document.getElementById('select_power');
        let select_avl_ok = document.getElementById('select_avl_ok');



        //para validar el estado 
        select_power.value =""+data.data[0].power_state+"";
        //select_power.value="1";
        console.log(select_power);
        if(select_power.value=="1"){
            $('#power_icon').addClass('text-success');
        }else{
            $('#power_icon').addClass('text-danger');
        }
        if(data.data[0].avl==0){
            select_avl_ok.value =""+data.data[0].avl+"";
        }else{
            select_avl_ok.value="1";
        }
        console.log(data.data[0].avl)


        let spTmp  = $('input[name=\'tmp_SP\']').val();
        let spEthy = $('input[name=\'ethylene_SP\']').val();
        let spCo2 = $('input[name=\'co2_SP\']').val();
        if(spCo2 == 401){
            spCo2 = 'NA';
        }
        let spHumidity = $('input[name=\'humidity_SP\']').val();
        let spIHours = $('input[name=\'i_hours\']').val();
        spTemperatureInput.push(spTmp);
        spEthyleneInput.push(spEthy);   
        spCO2Input.push(spCo2);
        spHumidityInput.push(spHumidity);
        spIHoursInput.push(spIHours);
        elpower_state.push(select_power.value);
        elavl.push(select_avl_ok.value);

        //valorInput.push(d);

    }catch(err){alert(err);}
    //cada 10 segundos ejecutar 
    select_power.addEventListener('change', async function(){
        der = select_power.value;
        console.log(der);
        //console.log(todo);
        //okey = await graficaMadurador1(todo.graph,todo.cadena,todo.temperature,der);
        let btnPower = 
        "<div class='d-flex justify-content-center gap-2'><button type='button' class='btn procesarpower' style='background-color: #032338; color: white;' onclick='procesarPower()'>Power</button><button type='button' class='btn btn-danger closepower' onclick='closePower()'>Cancel</button></div>";
        $('#btnPower').html(btnPower);
    })
    select_avl_ok.addEventListener('change', async function(){
        der = select_avl_ok.value;
        console.log(der);
        //console.log(todo);
        //okey = await graficaMadurador1(todo.graph,todo.cadena,todo.temperature,der);
        let btnAVL = 
        "<div class='d-flex justify-content-center gap-2'><button type='button' class='btn procesaravl' style='background-color: #032338; color: white;' onclick='procesarAVL()'>AVL</button><button type='button' class='btn btn-danger closeavl' onclick='closeAVL()'>Cancel</button></div>";
        $('#btnAVL').html(btnAVL);
    })
    setInterval( async function(){ okey =  await procesarData();}, 500);
})
/*
async function obtenerCambio() {
    //$(".loader").show();
    const response = await fetch(base_url + "Control/LiveData", {method: "GET", });
    const result = await response.json();
    if(result.length!=0){
        result.forEach(function(res){
            tarjeta(res);
            //$('#fechita_'+res.telemetria_id).text(res.ultima_fecha);
            console.log(res.telemetria_id);
        })
    }
    console.log(result);
    //setInterval(  function(){ $(".loader").fadeOut("fast"); }, 1000);

    return result;
}
function tarjeta(res){

}
*/

// FUNCIONES PARA HACER CAMBIO DE SET POINT
async function btnProcesarTMP(){
    SP_Setpoint = $("#tmp_SP").val();
    //procesar el comando 
    const celsius = (SP_Setpoint - 32) * 5 / 9;
    // Redondear al entero más cercano y retornar el resultado
    fato_f = roundToDecimal(celsius,2);
    trama = "Trama_Writeout(0,"+fato_f+",100)"
    const response = await fetch(base_url + "Control/Comando/"+trama, {method: "GET", });
    const result = await response.json();
    analizar =JSON.parse(result) ;
    if(analizar.estado==1){
        acc = "success";
        men = "loading...";

    }else{
        acc = "error";
        men = "wait...";
    }
    alertas(men, acc); 
    $('#procesarTMP').modal('hide');
}
async function btnProcesarETHY(){
    SP_Setpoint = $("#ethylene_SP").val();
    //procesar el comando 
    trama = "SP_ETILENO("+SP_Setpoint+")";
    const response = await fetch(base_url + "Control/Comando/"+trama, {method: "GET", });
    const result = await response.json();
    analizar =JSON.parse(result) ;
    if(analizar.estado==1){
        acc = "success";
        men = "loading...";

    }else{
        acc = "error";
        men = "wait...";
    }
    alertas(men, acc); 
    $('#procesarETHY').modal('hide');
}

async function btnProcesarCO2(){
    SP_Setpoint = $("#co2_SP").val();
    //procesar el comando 
    trama = "Trama_Writeout(3,"+SP_Setpoint+",100)";
    trama2 ="Trama_Writeout(9,2,1)";
    trama =trama+"|"+trama2;
    const response = await fetch(base_url + "Control/Comandoco2/"+trama, {method: "GET", });
    const result = await response.json();
    analizar =JSON.parse(result) ;
    if(analizar.estado==1){
        acc = "success";
        men = "loading...";

    }else{
        acc = "error";
        men = "wait...";
    }
    alertas(men, acc); 
    $('#procesarCO2').modal('hide');

}

async function btnProcesarHumidity(){
    SP_Setpoint = $("#humidity_SP").val();
    //procesar el comando 
    trama = "Trama_Writeout(4,"+SP_Setpoint+",100)"

    const response = await fetch(base_url + "Control/Comando/"+trama, {method: "GET", });
    const result = await response.json();
    analizar =JSON.parse(result) ;
    if(analizar.estado==1){
        acc = "success";
        men = "loading...";

    }else{
        acc = "error";
        men = "wait...";
    }
    alertas(men, acc); 
    $('#procesarHumidity').modal('hide');

}
async function btnProcesarIHours(){
    SP_Setpoint = $("#i_hours").val();
    sp_sp_ethy1 = $("#ethylene_SP").val();

    //procesar el comando 
    trama = "Temporizadores(0,"+SP_Setpoint+","+sp_sp_ethy1+")";

    const response = await fetch(base_url + "Control/Comando/"+trama, {method: "GET", });
    const result = await response.json();
    analizar =JSON.parse(result) ;
    if(analizar.estado==1){
        acc = "success";
        men = "loading...";

    }else{
        acc = "error";
        men = "wait...";
    }
    alertas(men, acc); 
    $('#procesarIHours').modal('hide');

}
async function procesarPower(){
    $('.closepower').attr('hidden',true);
    $('.procesarpower').attr('hidden',true);
    if(  select_power.value !=elpower_state[0]){
        console.log(select_power.value);
        console.log(elpower_state[0]);
        if(select_power.value=="0"){
            //trama = "RELE3_OFF";
            trama="Trama_Writeout(29,0,1)";
            elpower_state[0]="0";
        }else{
            //trama = "RELE3_ON";
            trama = "Trama_Writeout(29,1,1)";
            elpower_state[0]="1";
        }
        const response = await fetch(base_url + "Control/Comando/"+trama, {method: "GET", });
        const result = await response.json();
        analizar =JSON.parse(result) ;
        if(analizar.estado==1){
            acc = "success";
            men = "loading...";
        }else{
            acc = "error";
            men = "wait...";
        }
    }else{
        acc = "error";
        men = "repeated ...";
    }
    alertas(men, acc); 
}

async function procesarAVL(){
    $('.closeavl').attr('hidden',true);
    $('.procesaravl').attr('hidden',true);

    if(  select_avl_ok.value !=elavl[0]){
        console.log(select_avl_ok.value);
        console.log(elavl[0]);
        if(select_avl_ok.value=="0"){
            trama = "Trama_Writeout(9,0,1)";
            elavl[0]="0";
            const response = await fetch(base_url + "Control/Comando/"+trama, {method: "GET", });
            const result = await response.json();
            analizar =JSON.parse(result) ;


        }else{
            trama = "Trama_Writeout(5,200,1)";
            trama2 ="Trama_Writeout(9,1,1)";
            trama =trama2+"|"+trama;
            elavl[0]="1";
            const response = await fetch(base_url + "Control/Comandoco2/"+trama, {method: "GET", });
            const result = await response.json();
            analizar =JSON.parse(result) ;
        }
        if(analizar.estado==1){
            acc = "success";
            men = "loading...";
        }else{
            acc = "error";
            men = "wait...";
        }
    }else{
        acc = "error";
        men = "repeated ...";
    }
    alertas(men, acc); 
}


async function defrost_p_ok(){
    //procesar el comando 
    trama = "Trama_Writeout(21,0,0)";
    const response = await fetch(base_url + "Control/Comando/"+trama, {method: "GET", });
    const result = await response.json();
    analizar =JSON.parse(result) ;
    if(analizar.estado==1){
        acc = "success";
        men = "loading...";

    }else{
        acc = "error";
        men = "wait...";
    }
    alertas(men, acc); 
    console.log(trama);

}
