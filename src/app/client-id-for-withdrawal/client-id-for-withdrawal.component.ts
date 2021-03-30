import { Component, OnInit } from '@angular/core';
import {ClientAccount} from  '../models/ClientAccount';
import {ClientIdForWithdrawalService} from  '../services/withdrawal-service/client-id-for-withdrawal.service';
import {Router} from '@angular/router';
import { from, Observable } from 'rxjs';
import { error } from 'protractor';

@Component({
  selector: 'app-client-id-for-withdrawal',
  templateUrl: './client-id-for-withdrawal.component.html',
  styleUrls: ['./client-id-for-withdrawal.component.css']
})
export class ClientIdForWithdrawalComponent implements OnInit {

    // clientAccounts:Observable<ClientAccount[]>
     clientAccount:ClientAccount = new ClientAccount()
     clientIdForWithdrawalService:ClientIdForWithdrawalService;
           
     message:any

    constructor(clientIdForWithdrawalService:ClientIdForWithdrawalService,private router:Router) { 
                this.clientIdForWithdrawalService = clientIdForWithdrawalService;
    }

    ngOnInit() {
    }

    returnClientAccountsById(){
      var clientId = this.clientAccount.clientId;
      return this.clientIdForWithdrawalService.getClientIdForAtmWithdrawal(clientId).subscribe(data => {
              this.message = data;
              console.log(data)
      },error => console.log(error));
    }

    returnclientChooseAccountType(clientId:number,accountTypeCode:string){      
       console.log("accountTypeCode is " + accountTypeCode); 
       return this.clientIdForWithdrawalService.chooseAccountType(clientId,accountTypeCode)
                  .subscribe(data => {
                    this.message = data;
                    console.log(data);
                  }, error => console.log(error));
    }

    gotTowithDrawalScreen(){
          this.router.navigate(['withdraw-amount']);
    }
}
