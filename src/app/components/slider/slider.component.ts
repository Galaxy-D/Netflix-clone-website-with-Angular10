import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movies } from '../../models/movies.model'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() sliderConfig;
  @Input() movies: Movies;
  @Input() title: string;

  constructor(private movie: MovieService) { }

  ngOnInit(): void {
  }

  getMovieVideos(id: number) {
    this.movie.getVideos(id);
  }

}
