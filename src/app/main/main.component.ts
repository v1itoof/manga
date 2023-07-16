import { Component } from '@angular/core';
import { MangaService } from '../manga/manga.service';
import { Manga } from 'src/app/models/manga';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  mangas: Manga[] = [];
  dataLoaded = true;

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};


  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor(private mangaService:MangaService) { }

  ngOnInit(): void {
    this.getMangas();
  }

  getMangas() {
    this.mangaService
      .getMangas()
      .subscribe((response) => (this.mangas = response.data));
    this.dataLoaded = true;
  }

}
