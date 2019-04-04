import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BillingComponent } from './billing/billing.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { GasStorageComponent } from './gas-storage/gas-storage.component';
import { AddCustomersComponent } from './customers/add-customer/add-customer.component';
import { TransactionsComponent } from './transactions/transactions.component';

export const rootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: 'gas-home',
        pathMatch: 'full'
    },
    {
        path: 'gas-home',
        component: HomeComponent
    },
    {
        path: 'gas-billing',
        component: BillingComponent
    },
    {
        path: 'gas-customers',
        component: CustomersComponent
    },
    {
        path: 'gas-storage',
        component: GasStorageComponent
    },
    {
        path: 'add-customer',
        component: AddCustomersComponent
    },
    {
        path : 'transactions',
        component : TransactionsComponent
    }
]