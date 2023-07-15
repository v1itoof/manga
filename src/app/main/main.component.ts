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
