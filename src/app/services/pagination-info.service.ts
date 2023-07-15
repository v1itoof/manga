import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pagination } from '../models/pagination';

@Injectable({
  providedIn: 'root'
})
export class PaginationInfoService {
  apiUrl: string = "https://api.jikan.moe/v4/anime";

  constructor(private httpclient: HttpClient) { }

  getPagination(perPage?: number): Observable<Pagination> {
    const url = `${this.apiUrl}?perPage=${perPage || 30}`;
    return this.httpclient.get<Pagination>(url);
  }
}
