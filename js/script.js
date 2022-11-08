$(function(){
    const campoAltura = $('.altura')
    const campoPeso = $('.peso')
    
    $('form').submit(()=>{
        const calc = campoPeso.val() / Math.pow(campoAltura.val(), 2)
        if(calc < 18.5){
            $('.result').html(`
            <div class="box">
                Seu IMC é 
                <span class="red">${calc.toFixed(1)}</span>
                você está: 
                <span class="red">Abaixo do Peso!</span>
            </div>
        `)
        }

        if(calc > 18.6 && calc < 24.9){
            $('.result').html(`
            <div class="box">
                Seu IMC é 
                <span class="green">${calc.toFixed(1)}</span>
                você está: 
                <span green>Peso Ideal</span>
            </div>
        `)
        }
       
        if(calc > 25 && calc < 29.9){

            $('.result').html(`
            <div class="box">
                Seu IMC é  <span class="yellow">${calc.toFixed(1)}</span> você está: 
                <span class="yellow">Acima do Peso</span>
            </div>

        `)
        }
        if(calc > 30){
            
            $('.result').html(`
            <div class="box">
            Seu IMC é  <span class="red">${calc.toFixed(1)}</span> você está com: 
                <span class="red">Obesidade</span>
            </div>
            
        `)

        }
        return false
        
    })
})