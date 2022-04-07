/*==================================================================================
Ejercicio 1.

De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente detras de B, 
y D ha llegado en medio de A y C. Debemos calcular el orden de llegada.

B -> 1
C -> 2
D -> 3
A -> 4
==================================================================================*/
let corredores = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,

    resultado: function(){
        if(corredores.C > corredores.B && corredores.D > corredores.B && corredores.D > corredores.C && corredores.D < corredores.A){
            return true;
        }else{
            return false;
        }
    },
    intervalo: setInterval(function(){
        corredores.A = Math.ceil(Math.random()*4);
        corredores.B = Math.ceil(Math.random()*4);
        corredores.C = Math.ceil(Math.random()*4);
        corredores.D = Math.ceil(Math.random()*4);
        
        if(corredores.resultado()){
            clearInterval(corredores.intervalo);
            console.log("atleta A ", corredores.A );
            console.log("atleta B ", corredores.B );
            console.log("atleta C ", corredores.C );
            console.log("atleta D ", corredores.D );
        }
    },10)
}
