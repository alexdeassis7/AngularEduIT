import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //atributos de la clase 
  //creo un array de string con los modelos disponible en la empresa Globomatics

  models: string[] = [
    'Bike 14 pulgadas marca Philp',
    'Globo Carbon fiber ',
    'Globo Race Series 2',
    'Fiorenza Race',
    'Bike Master Fiorenza',
  ];
  //Objeto de qangular que nos permite validar formularios
  bikeform: FormGroup;
  //variable que usaremos esta variable para mostrar al usuario si el form se envio correctamente 
  //o si tuvimos problemas de validacio o error
  validmessage: string = "";
  constructor() { }

  ngOnInit() {
    this.bikeform = new FormGroup({
      name: new FormControl('Ingrese su nombre aqui', Validators.required),
      email: new FormControl('Ingrese su email aqui', Validators.email),
      phone: new FormControl('Ingrese su telefono aqui', Validators.maxLength(10)),
      model: new FormControl('Seleccione el modelo de su bicicleta', Validators.required),
      serialNumber: new FormControl('ingrese aqui el numero de serie de su bicicleta', Validators.required),
      purchasePrice: new FormControl('ingrese el precio pagado por su bicicleta', Validators.required),
      purchaseDate: new FormControl('Ingrese aqui la fecha que compro su bicicleta'),
      contact: new FormControl()
    })

  }

  submitRegistration() {
    if (this.bikeform.valid) {
      this.validmessage = "Su garantia fue registrada correctamente en nuestro sistema"
    } else {
      this.validmessage = "Por favor Completa todo el formulario correctamente"
    }
  }


}
