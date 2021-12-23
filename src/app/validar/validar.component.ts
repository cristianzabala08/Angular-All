import { Component, OnInit, Input } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { LanguageService } from '../services/language.service';
import {Joke,IHero} from '../interFace/interFace'

type vegetal = 'Tomate' | 'Zanahoria' | 'Apio';
type mixedVeggies = `${vegetal}-${vegetal}-${vegetal}`



type Partial<T> = {
  [K in keyof T]?: T[K]
}

@Component({
  selector: 'app-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.css']
})
export class ValidarComponent implements OnInit {



 @Input() major = '';
 @Input() minor = '';

  hero: Partial<IHero> = {
    name: 'My hero',
    alterEgo: new FormControl(),
    power: new FormControl()
  };

   name:Joke ={
    icon_url: '',
    id: '',
    updated_at: '',
    value: ''
  };

  nameArray:Array<object> = []


  constructor(private lan: LanguageService) { }

  ngOnInit(): void {

    this.lan.dihola();

       this.lan.getFrase().subscribe((x:Joke) => {
          this.name = x;
      })

  }

}
