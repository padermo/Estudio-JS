let contador = 0;

//se ejecuta siempre que la condicion se cumpla
while(contador<10){
    contador += 1;
    if(contador%2==0){
        console.log(contador);
    }
}

//primero se pasa el codigo que se va a ejecutar y luego la condicion
do{
    contador += 1;
    if(contador%2==0){
        console.log(contador);
    }
}while(contador<10);