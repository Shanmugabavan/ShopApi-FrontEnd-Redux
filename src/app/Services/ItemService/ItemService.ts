// item.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Item} from "../../Models/Item";

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'https://localhost:7242/api';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/item`);
  }

  addItem(item: Item): Observable<any>{
    return this.http.post<Item>(`${this.apiUrl}/item`, item);
  }
}
