import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  // Se puede eliminar la alerta modificando el tslint en el parametro inferable
  // tslint:disable-next-line: no-inferrable-types
  porcentaje: number = 20;
  // tslint:disable-next-line: no-inferrable-types
  valor: number = 5;

  constructor() { }

  ngOnInit() {
  }

}
