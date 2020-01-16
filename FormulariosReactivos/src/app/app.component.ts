import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formulario : FormGroup;

constructor(private frmBuilder: FormBuilder){
 this.formulario = this.frmBuilder.group(
  {
nombre: ['nombre por defecto', Validators.required],
apellido: ['nombre por defecto', Validators.required],
email: ['nombre por defecto', Validators.required]
  } );
}





onSubmit(parametro){

  console.log(parametro);

  
}

}
