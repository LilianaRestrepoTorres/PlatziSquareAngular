import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare!';
  otro = 'String Interpolation';
  a = 3;
  b = 5;
  listo = false;
  nombre:string = '';
  lugares:any = [
    {nombre: 'Floreria la Gardenia'},
    {nombre: 'Donas la pasadita'},
    {nombre: 'Veterinaria Huellitas Felices'},
  ];

  constructor(){
    setTimeout(() => {
      this.listo = true;
    }, 3000)

    //Property Binding= Comunicación  HTML -> TypeScrip []
    //setTimeout(() => {Código}, 3000)
  }

  //Se utiliza en el event Binding
  hacerAlgo(){
    alert('Haciendo algo');
  }
}
