import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisplayAtmService {

  requestUrl:string = "http://localhost:8081/api/v1/"
  constructor(private httpClient:HttpClient) { }

   chooseAtmToUseById(atmId){
          return this.httpClient.get(this.requestUrl+atmId)
  }

  }
