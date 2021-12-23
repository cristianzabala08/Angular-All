import {  FormControl } from '@angular/forms';

export interface  Joke {
  icon_url:string,
  id:string,
  updated_at:string,
  value:string
}


export interface IHero {
  name: string;
  alterEgo: FormControl;
  power: FormControl;
}
