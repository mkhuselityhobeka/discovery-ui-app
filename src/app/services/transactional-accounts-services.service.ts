import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient} from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionalAccountsServicesService {

  private baseUrl:string = 'http://localhost:8081/api/v1/client/desc/';

  constructor(private httpClient:HttpClient) { 
   
  }
   getTransationalAccountsByClientId(clientId){  
     console.log("clientId is " + clientId)
    return this.httpClient.get(this.baseUrl+clientId);
  }
}
