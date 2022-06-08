export class Prova  {
constructor (
private _nota: number,
private _bimestre_1: number,
private _bimestre_2: number,

) {}

public get nota(): number {
    return this._nota;
}

public set nota(nota : number) {
    this._nota = nota ;
}

public get bimestre1(): number {
    return this._bimestre_1;
}

public set bimestre1(bimestre1 : number) {
    this._bimestre_1 = bimestre1 ;
}
public get bimestre2(): number {
    return this._bimestre_2;
}

public set bimestre2(bimestre2 : number) {
    this._bimestre_2 = bimestre2 ;
}

permitida(valor: number,   
b1:number, b2: number): void {
this.nota = valor;
this.bimestre1 = b1;
this.bimestre2 =b2;
}

prova ( ): void {
this.nota = ( this.bimestre1 + this.bimestre2) / 2 ;
if(this.nota <= 59.9 ) {

    console.log('Infelizmente você Reprovo  🥺');
    console.log('Soma da Nota: ' + this.nota);
    
    
}else 
if(this._nota >= 60){
    
    console.log('Parabéns  você Passo  🧑🏼‍🎓');
    console.log('Soma da Nota: ' + this.nota);
}else{

    console.log('!!! Erro de Digitação !!!')

}

}

}
