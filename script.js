function calcular(){
    var tabu = document.getElementById('tabu')
    var num = Number(tabu.value)

    var resTab = document.getElementById('resTabu')

    var res = document.getElementById('res')

    if (tabu.value.length == 0){
        window.alert('CAIXA VAZIA!')

    }

    else{
        res.innerHTML = `Resultado tabuada <strong>${num}</strong>: <br>` 

        resTab.innerHTML = ''
        //limpar a tabuada para uma tabuáda não aparecer em cima de outra
        var x = 1
        for(x == 1; x <= 10; x++){
            var m = num * x 

            var item = document.createElement('option')
            item.text = `${num}X${x}=${m}` //Criar texto
            resTab.appendChild(item) //Colocar no <select>
            
            item.style.textAlign = 'center'
        }
        res.innerHTML += `<br>FINALIZADO!`

        res.style.textAlign = 'center' 
        
    }



}