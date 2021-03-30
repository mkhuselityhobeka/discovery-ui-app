import { Component, OnInit } from '@angular/core';
import{ DisplayConvertedCurrencyAccountsService } from '../services/display-converted-currency-accounts.service'
import {ClientAccount} from '../models/ClientAccount';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-display-converted-currency-accounts',
  templateUrl: './display-converted-currency-accounts.component.html',
  styleUrls: ['./display-converted-currency-accounts.component.css']
})
export class DisplayConvertedCurrencyAccountsComponent implements OnInit {

  clientAccount:ClientAccount = new ClientAccount()
  message:any;

  constructor(private displayConvertedCurrencyAccountsService:DisplayConvertedCurrencyAccountsService,private router:Router) { }

  ngOnInit() {
  }

  getClientById(){
    var clientId = this.clientAccount.clientId;
    return this.displayConvertedCurrencyAccountsService.getCurrencyAccountsByClientId(clientId)
    .subscribe(
      data => {
        this.message = data;
        console.log(data);
      },
      error => console.log(error));
    }

    goToBackToTransactionalAccounts(){
          this.router.navigate(['transactional-accounts'])
    }

    goToSelectatm(){
      this.router.navigate(['atm'])
}
  
}
