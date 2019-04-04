import { Component } from '@angular/core';
import { TransactionsService } from './transactions.service';

@Component({
    selector: 'transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
    cols : any = [];
    transactions : any = [];

    constructor(private transactionsService : TransactionsService) {

    }

    ngOnInit() {
        this.transactionsService.getTransactions().subscribe (
            (data : any) => {
                this.transactions = data;
            },
            (error) => {
                console.log("Unable to get transactions.");
            },
            () => {
                console.log("Getting Transactions completed.")
            }
        )
            
        this.cols = [
            {field : "createdAt", header : "Transaction Date"},
            {field : "customerId", header : "Customer Id"},
            {field : "capacity", header : "Capacity"},
            {field : "cost", header : "Cost"},
            {field : "quantity", header : "Qunatity"},
            {field : "actualCost", header : "Actual Cost"},
            {field : "gst", header : "GST"},
            {field : "totalCost", header : "Total Cost"}
        ]
    }

}