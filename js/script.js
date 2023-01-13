
//let url = 'https://graph.facebook.com/v15.0/17841435859161379?fields=followers_count&access_token=EAAJyQGZAHXFUBADBLE2jiRzXmuVNZA3ZAbsqY9UInWfKAlGBCX7ZA6IoVE0D8sBRUNWEsXw0Tg3B1r6PbwxyojRPaGi0BvCesEXT1YyJiueswvQuovI2UdiVsZAL2lzW0VTySTuZCzldqajQHjIhME32ny7eVAILYKRNRmkSaMybTz6WPm1xCU'
let url = 'https://graph.facebook.com/v15.0/17841435859161379?fields=followers_count&access_token=EAAJ97ojT58ABAF2kxRFci5n1TrnBaBjOasWuHuYZAjFM5vavbGon6QXaClR50twb4RmbWSgW0MCvS5MWZCOWFHIyksdDsish3xonprrZA8kw8vZCwIBm0IlHFtzgnJqTcecHSf8uIIUerT1mZA702ZBKOQtS6lKq4t3bN9o5eNomFMRRyX2i7pmrcZAxnLjcGuPsZCLo1cQHuBC6IwkRAMKaAAwI9oL2zqmlctfQ1CITfwZDZD'
        
        
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))
    
    const mostrarData = (data) => {
        console.log(data.followers_count)
    
        let followers =  2886; //data.followers_count.toString();
        const x = document.getElementById('progress');
        const y = document.getElementById('porcentaje');
        const z = document.getElementById('price');


        
        const seg = document.getElementById('seguidoreConteo');
        
        let cuentaInicial = 2866;
        let limite = 2966;

        let price = 0;
        let priceInitial = 50000;
        let acumulados = 0;
        
        let mostrarPrecio = document.getElementById('inicialPrice');
        mostrarPrecio.textContent =`$${priceInitial}`;  

        
        let calculaParaPorcentaje = limite - cuentaInicial;
        let calculaParaPorcentajeCOnFollower = ((followers - cuentaInicial) / calculaParaPorcentaje) * 100;
        
        let porcentaje = calculaParaPorcentajeCOnFollower;
        //console.log(calculaParaPorcentajeCOnFollower);

        let follow = porcentaje.toString();
        let reduccion = limite - followers;
        
        //calculo de barra de progreso
        //x.style.width = `${follow}%`;
        
        //calculo de porcentaje
        //y.textContent = `${follow}%`;
        let countFollowers = followers - cuentaInicial



        let bajarPrecio = (umbral, descuento) => {

                if(countFollowers >= umbral){
                    price = acumulados - descuento;
                    acumulados = price;
                    z.textContent = `$${price}`; 
                }else{
                    z.textContent = `$${acumulados}`; 
                }

            }



            if ( countFollowers >= 10 ){
                price = priceInitial - 10000;
                acumulados = price;   
                z.textContent = `$${price}`; 

                seg.textContent = countFollowers;

                bajarPrecio(20, 10000);

                bajarPrecio(30, 10000);

                bajarPrecio(40, 10000);

                bajarPrecio(50, 10000);
                
            }
            else{
                z.textContent = `$${priceInitial}`; 
            }
        
        
        
    }
/*contador*/

const getRemainingTime = deadline => {
let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainTime
}
};

const countdown = (deadline,elem,finalMessage) => {
const el = document.getElementById(elem);

const timerUpdate = setInterval( () => {

    let t = getRemainingTime(deadline);

    dayElement.innerText = t.remainDays
    hourElement.innerText = t.remainHours
    minElement.innerText = t.remainMinutes
    secElement.innerText = t.remainSeconds

    if(t.remainTime <= 1) {
    clearInterval(timerUpdate);
    el.innerHTML = finalMessage;
    }

}, 1000)
};

countdown('Jan 31 2023 21:34:40 GMT-0500', 'clock', '¡Ya empezó!');

            
// movimiento dinosaurio

document.addEventListener("mousemove", parallax)
        function parallax(e) {
            document.querySelectorAll(".object").forEach(function (move) {
                var moving_value = move.getAttribute("data-value");
                var x = (e.clientX * moving_value) / 250;
                var y = (e.clientY * moving_value) / 250;
                move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
            });
        }
    