import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'appScond',
  templateUrl: './componennts-second.component.html',
  styleUrls: ['./componennts-second.component.css']
})
export class ComponenntsSecondComponent implements OnInit {

  tille: string = "";
  edad: number = 0;
  black: string = "";
  nombres: Array<string>;

  valor1!: number;
  valor2!: number;
  operacion: string = "ninguna";
  resultado!: number;

  check: boolean = true;
  major = 'Master';



  constructor() {

    this.tille = "allgod";
    this.edad = 1;
    this.nombres = ['cristia', 'zabala', 'ismael', 'cesar', 'josephine'];

 


  }

  ngOnInit(): void {

  }


  checkColor() {
    if (this.edad >= 10) {
      this.black = "red"
    } else {
      this.black = "blue"
    }
  }



  up() {

    this.edad++;
    this.checkColor();
  }

  clear() {
    this.valor1 = 0;
    this.valor2 = 0;
  }

  change() {
    this.check = !this.check;
  }

  dowm() {
    this.edad--;
    this.checkColor();
  }


}
