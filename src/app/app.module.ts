import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import{DisplayTransactionalAccountsComponent} from './display-transactional-accounts/display-transactional-accounts.component';
import { from } from 'rxjs';
import { DisplayConvertedCurrencyAccountsComponent } from './display-converted-currency-accounts/display-converted-currency-accounts.component';
import { DisplayAtmComponent } from './display-atm/display-atm.component';
import { ClientIdForWithdrawalComponent } from './client-id-for-withdrawal/client-id-for-withdrawal.component';
import { WithdrawCashImplComponent } from './withdraw-cash-impl/withdraw-cash-impl.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTransactionalAccountsComponent,
    DisplayConvertedCurrencyAccountsComponent,
    DisplayAtmComponent,
    ClientIdForWithdrawalComponent,
    WithdrawCashImplComponent,
 
    
      ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
