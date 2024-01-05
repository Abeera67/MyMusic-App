import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatamangementService {

  constructor(
    private readonly HttpClient: HttpClient
  ) { }

  getApiData() {
    return this.HttpClient.get('https://api.artic.edu/api/v1/artworks/search?q=cats');
  }
}
