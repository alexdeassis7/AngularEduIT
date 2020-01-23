import { Component } from '@angular/core';
//Importamos el servicio
import{ ProductosService } from './servicio/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicio01';

  productos:any ;

  constructor(private productosService: ProductosService){
    this.productos = productosService.productos.rows;
  }

}
