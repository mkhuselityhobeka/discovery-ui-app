import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayTransactionalAccountsComponent} from'./display-transactional-accounts/display-transactional-accounts.component';
import {DisplayConvertedCurrencyAccountsComponent} from './display-converted-currency-accounts/display-converted-currency-accounts.component';
import {DisplayAtmComponent} from'./display-atm/display-atm.component';
import {ClientIdForWithdrawalComponent} from'./client-id-for-withdrawal/client-id-for-withdrawal.component';
import {WithdrawCashImplComponent} from './withdraw-cash-impl/withdraw-cash-impl.component';
import { from } from 'rxjs';

const routes: Routes = [
  
  {path:'', redirectTo:'transactional-accounts', pathMatch:'full'},
  {path:'transactional-accounts', component: DisplayTransactionalAccountsComponent},
  {path:'currency-accounts', component: DisplayConvertedCurrencyAccountsComponent},
  {path:'atm', component:DisplayAtmComponent},
  {path:'account-list', component:ClientIdForWithdrawalComponent},
  {path:'withdraw-amount', component:WithdrawCashImplComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
