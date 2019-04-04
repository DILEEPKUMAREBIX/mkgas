import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BillingComponent } from './billing/billing.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.route';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { GasStorageComponent } from './gas-storage/gas-storage.component';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DriverOverviewComponent } from './driver-overview/driver-overview.component';
import { PanelModule } from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ToastModule} from 'primeng/toast';


import { AddCustomersComponent } from './customers/add-customer/add-customer.component';
import { CustomerService } from './customers/customers.service';
import { HttpClientModule } from '@angular/common/http';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsService } from './transactions/transactions.service';
import { MessageService } from 'primeng/components/common/messageservice';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BillingComponent,
    CustomersComponent,
    GasStorageComponent,
    DriverOverviewComponent,
    AddCustomersComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig),
    // MatButtonModule,
    // MatCheckboxModule,
    // MatExpansionModule,
    // MatFormFieldModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    PanelModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    ToastModule
  ],
  providers: [CustomerService, TransactionsService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
