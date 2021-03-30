import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DisplayConvertedCurrencyAccountsService {

 

  private baseUrl:string = 'http://localhost:8081/api/v1/client/asc/';

  constructor(private httpClient:HttpClient) { 
   
  }
   getCurrencyAccountsByClientId(clientId){  
     console.log("clientId is " + clientId)
    return this.httpClient.get(this.baseUrl+clientId);
  }
}
