import { Component, OnInit } from '@angular/core';
import { WithDrawMoney } from '../models/WithDrawMoney';
import {WithdrawMoneyService} from '../services/withdraw-cash/withdraw-money.service'

@Component({
  selector: 'app-withdraw-cash-impl',
  templateUrl: './withdraw-cash-impl.component.html',
  styleUrls: ['./withdraw-cash-impl.component.css']
})
export class WithdrawCashImplComponent implements OnInit {

  withDrawMoney:WithDrawMoney = new WithDrawMoney();
  withdrawMoneyService:WithdrawMoneyService;
  message:any
  constructor(withdrawMoneyService:WithdrawMoneyService) { this.withdrawMoneyService = withdrawMoneyService }
       
  ngOnInit() {
  }

  withdrawalAmount(){
    return this.withdrawMoneyService.postAmount(this.withDrawMoney).subscribe(data => {
            this.message = data;
            console.log(data);
    },error => console.log(error))
  }
}
