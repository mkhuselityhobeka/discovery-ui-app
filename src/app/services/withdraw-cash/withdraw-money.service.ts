import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { WithDrawMoney } from 'src/app/models/WithDrawMoney';
@Injectable({
  providedIn: 'root'
})
export class WithdrawMoneyService {

  withdrawaMoneyRequest:string = "http://localhost:8081/api/v1/withdraw";
  
  constructor(private httpClient:HttpClient) { }

  postAmount(withdrawMoney:WithDrawMoney){
      let withdrawMony = JSON.stringify(withdrawMoney)
      console.log("withdrawMoney is " + withdrawMony)
      return this.httpClient.post(this.withdrawaMoneyRequest,withdrawMoney);
  }

}
