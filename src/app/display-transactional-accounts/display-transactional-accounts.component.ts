import { Component, OnInit, Injectable } from '@angular/core';
import {TransactionalAccountsServicesService} from '../services/transactional-accounts-services.service';
import {ClientAccount} from '../models/ClientAccount';
import {Router} from'@angular/router';
import { FormsModule,ReactiveFormsModule,FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-display-transactional-accounts',
  templateUrl: './display-transactional-accounts.component.html',
  styleUrls: ['./display-transactional-accounts.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class DisplayTransactionalAccountsComponent implements OnInit {

  
  clientAccount:ClientAccount = new ClientAccount()
  message:any;
  errorMessage:any
  status:any


  ngOnInit() {
    
  }

  constructor(private transactionalAccountsServicesService:TransactionalAccountsServicesService, private router:Router) { 
    
  }

  getClientById(){
    var clientId = this.clientAccount.clientId;
    
    return this.transactionalAccountsServicesService.getTransationalAccountsByClientId(clientId)
    .subscribe(
      data => {
        this.message = data;   
        console.log(data);
      },
     
      (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.status =  error.error.status;
        console.log( this.errorMessage)
         },
    )
   }
  
    routeToCurrencyAccounts(){
      this.router.navigate(['currency-accounts']);
    }
   
}
