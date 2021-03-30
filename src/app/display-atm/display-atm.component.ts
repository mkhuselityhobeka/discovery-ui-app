import { Component, OnInit } from '@angular/core';
import  { Atm } from '../models/Atm';
import { DisplayAtmService } from '../services/atm-service/display-atm.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { error } from 'util';

@Component({
  selector: 'app-display-atm',
  templateUrl: './display-atm.component.html',
  styleUrls: ['./display-atm.component.css']
})
export class DisplayAtmComponent implements OnInit {

  atm:Atm  = new Atm()
  message:any
  displayAtmService:DisplayAtmService
  constructor(displayAtmService:DisplayAtmService,private router:Router) {
     
      this.displayAtmService=displayAtmService;
   }

    ngOnInit() {
    }

    public chooseAtmForWithdrawal(){
      var atmId = this.atm.atmId;
      return this.displayAtmService.chooseAtmToUseById(atmId)
                  .subscribe(
                  data =>{
                  this.message = data;
                  console.log(data)
                  },error =>console.log(error)
                );
    }

    goToSelectAccountTypeByClientId(){
      this.router.navigate(['account-list']);
    }
}
