import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // Cuando se asigna un valor a un input este será el default en caso de venir vacío
  // tslint:disable-next-line: no-inferrable-types
  @Input() porcentaje: number = 50;
  // tslint:disable-next-line: no-inferrable-types
  valor: number = 5;
  // tslint:disable-next-line: no-inferrable-types
  @Input() leyenda: string = 'Leyenda';

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor: number) {

    if (this.porcentaje + valor > 100 || this.porcentaje + valor < 0) {
      return;
    }
    this.porcentaje += valor;
  }
}
