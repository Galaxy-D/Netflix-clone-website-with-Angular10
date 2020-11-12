import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from './models/movies.model';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  sticky = false;

  subs: Subscription[] = [];

  latest:     Movies;
  trending:   Movies;
  popular:    Movies;
  topRated:   Movies;
  nowPlaying: Movies;
  upcoming:   Movies;

  sliderConfig = {
    slidesToShow: 9,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    prevArrow: '<button class="slick-arrow slick-prev"><app-svg-icon name="arrow_slider"></app-svg-icon></button>',
    nextArrow: '<button class="slick-arrow slick-next"><app-svg-icon name="arrow_slider"></app-svg-icon></button>',
  
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        }
      }, 
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      }, 
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      }, 
      {
        breakpoint: 661,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  };

  headerBGUrl: string;

  @ViewChild('stickyHeader') header: ElementRef;

  constructor(private movie: MovieService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.subs.push(this.movie.getTrending().subscribe(data => {
      this.trending = data;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + this.trending.results[0].backdrop_path;
    }));
    this.subs.push(this.movie.getNowPlaying().subscribe(data => this.nowPlaying = data));    
    this.subs.push(this.movie.getPopularMovies().subscribe(data => this.popular = data));
    this.subs.push(this.movie.getTopRated().subscribe(data => this.topRated = data));
    this.subs.push(this.movie.getUpComing().subscribe(data => this.upcoming = data)); 
    this.subs.push(this.movie.getLatestMovies().subscribe(data => this.latest = data));  
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    this.subs.map(s => s.unsubscribe());
    
  }

  @HostListener('window:scroll',['$event'])  
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if(windowScroll >= this.header.nativeElement.offsetHeight){
      this.sticky =  true;
    }else {
      this.sticky =  false;
    }
    // windowScroll >= this.header.nativeElement.offsetHeight ? this.sticky =  true : this.sticky =  false;
  }

  toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    menuToggle.classList.toggle('activated');
    const menu = document.querySelector('.menu');
    menu.classList.toggle('activated');
  }
  
}
