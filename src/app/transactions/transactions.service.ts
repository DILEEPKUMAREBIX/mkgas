import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class TransactionsService {
    env:any = environment;
    url: any = '';

    constructor(private http: HttpClient) { 
        this.url = this.env.url;
    }

    // Uses http.get() to load data from a single API endpoint
    getTransactions(): Observable<any> {
        return this.http.get(this.url + 'transactions');
    }

    saveTransaction(transaction: any): Observable<any> {
        return this.http.post(this.url + 'transaction', transaction);
    }
}