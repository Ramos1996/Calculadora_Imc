function calcular (){

 var altura = document.getElementById ('alt')
     var peso = document.getElementById ('ps')
     var txt = document.getElementById ('msg')
     var dg = document.getElementById ('danger')
     var tm = Number (altura.value)
     var kg = Number (peso.value )
     var resultado = kg / (tm * tm)
     var res = resultado.toFixed(2)

        if (tm == 0 || kg == 0 ){
            window.alert ('Valor Inválido')
        } else if (res < 18.5){
        txt.innerHTML=`Seu resultado foi ${res}<p>Magreza </p>`
        dg.innerHTML=' Procure um médico ou nutricionista.'
     }else if (res >= 18.5 && res < 24.9){
   txt.inner     HTML=`Seu resultado foi ${res}<p id='Nm'>Normal</p>`
     }else if (res >=24.9 && res<30 ){
        txt.innerHTML=`Seu resultado foi ${res}<p>Sobrepeso</p>`
        dg.innerHTML=' Procure um médico ou nutricionista.'
     }else {
        txt.innerHTML=`Seu resultado foi ${res}<p>Obesidade</p>`
        dg.innerHTML=' Procure médico um ou nutricionista.'

     }

     

}



