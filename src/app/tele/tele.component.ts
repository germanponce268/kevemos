import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { Response } from '../interfaces/response.interface';

@Component({
  selector: 'app-tele',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './tele.component.html',
  styleUrl: './tele.component.css'
})
export class TeleComponent implements  OnChanges{

  @Input()public data : any;
  public image! : string;
  public overview!: any;
  public mayor: boolean = false;

  constructor(private movieService : MovieService){}

  ngOnChanges(changes: SimpleChanges): void {
  
    if(changes['data']){
      this.image = `https://image.tmdb.org/t/p/w200${this.data.poster_path};`
      this.overview = this.data.overview;
      this.translateText(this.overview)
                        .subscribe((text: Response)=>{
                          console.log(text.hasOwnProperty('data'));
                          this.overview = text.data.translations[0].translatedText;
                        });
    }
  }

  translateText(text:string){
    return this.movieService.translate(text);
  }

  mayorEdad(){
    this.mayor = true;
    return this.mayor; ;
  }
}
