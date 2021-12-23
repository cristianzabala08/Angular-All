import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import {Joke} from '../interFace/interFace'


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private ChuckUrl = "https://api.chucknorris.io/jokes/random"; // URL to web api

  constructor(private http: HttpClient) { }

  public dihola():void {
    console.log('hola mundo');

  }

  public getFrase(): Observable<Joke> {

    return this.http.get<Joke>(this.ChuckUrl)

  }


}
