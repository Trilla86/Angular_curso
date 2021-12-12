import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {
  heroes : string [] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitán América'];
  heroesBorrado : string = '';
  

  borrarElemento(): void{
    
    this.heroesBorrado = this.heroes.shift() || '';
  }
}
