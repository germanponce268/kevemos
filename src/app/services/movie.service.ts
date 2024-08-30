import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../interfaces/response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private random! : string;

  constructor(private http : HttpClient) { }



  getMovie(){
    this.random = (Math.floor(Math.random() * 999999) + 1).toString();
    return this.http.get(`https://api.themoviedb.org/3/movie/${this.random}?api_key=045eb3967d7e3e96bdc6e618813a497b`)
  }

  translate(text: string):Observable<Response>{
    return this.http.post<Response>(`https://translation.googleapis.com/language/translate/v2/?q=${text}&target=es&key=AIzaSyC0z_TL-2Ac91ftJ6Kb-jnnPXoq7gcK5-o`, {})
  }
}
