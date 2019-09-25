import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: false})  txtProgress: ElementRef;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 10;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda: ' + this.leyenda);
    // console.log('Progreso: ' + this.progreso);
  }

  ngOnInit() {
    // console.log('Leyenda: ' + this.leyenda);
    // console.log('Progreso: ' + this.progreso);
  }

  onChanges(newValue: number) {
    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      return;
    }
    this.progreso += valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

}
