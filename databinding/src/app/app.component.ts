import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';

  titulo: any = "soy una variable en el componente interpolado"

  datos: any = { Nombre: "Martin", Apellido: "De Assis", Edad: 18, Documento: "3686475" };
//CREAMOS EL EVENTO 

eventoBoton(){
  console.log('Usted acaba de presionar el boton y generar un evento con su Click ')
  alert('Evento Generado')

}


}
