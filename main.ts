
import prompt from 'prompt-sync';
import { Prova } from './prova';


let control: Prova = new Prova( 0,0, 0);
let teclado = prompt();
let option: number = 0;

while (option !== 9) {
    console.log(`==============Menu===============`);
    console.log('1. Informe as Notas Bimestral:          ');
    console.log('9. Sair               👉         ');
    console.log('=================================');

    option = +teclado('Ecolha uma ação : ');

    switch (option) {
        case 1:
          
            let b1: number = +teclado('Digite a Nota Primeiro Bimestre:');
            let b2: number = +teclado('Digite a Nota Segundo Bimestre: ');
             

            control.permitida(0,b1, b2);
            control.prova();
            
            break;  
        default:
            break;
    }
}