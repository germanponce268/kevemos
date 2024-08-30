import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { TeleComponent } from "../tele/tele.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, TeleComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  public parentData!: any;

  constructor(private movieService: MovieService){}

  searchMovie(){
    this.movieService.getMovie()
                      .subscribe((data)=>{
                        console.log(data);
                       this.parentData = data;
                      });
  }
}
