import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Item } from "../models/item.model";

@Injectable({
    providedIn: 'root'
})

const apiUrl = 'https://api.example.com/items';

export class ItemsService {
    constructor(private http: HttpClient) {}
}

getItems() {
return this.http.getItems(apiUrl)
console.log('data', this.getItems())
  }
