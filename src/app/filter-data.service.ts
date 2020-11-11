import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class FilterDataService {
  
  constructor(private http:HttpClient) { }

  getFilteredData(apiUrl){
    
    return this.http.get(apiUrl);
    
  }


}
