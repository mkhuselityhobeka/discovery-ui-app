import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { ClientAccount } from 'src/app/models/ClientAccount';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ClientIdForWithdrawalService {

    
    withdrawalRequest:string='http://localhost:8081/api/v1/withdrawal/';
    accounTypepeRequest:string='http://localhost:8081/api/v1/';
    
    constructor(private httpClient:HttpClient) { }

     getClientIdForAtmWithdrawal(clientId){   
            return this.httpClient.get(this.withdrawalRequest+clientId);
    }

    chooseAccountType(clientId, accountTypeCode){ 
            
            return this.httpClient.get(this.accounTypepeRequest+clientId+"/"+accountTypeCode)
    }
}
