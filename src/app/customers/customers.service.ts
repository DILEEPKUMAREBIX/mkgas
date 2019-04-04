import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class CustomerService {
    env:any = environment;

    url: any = '';
    idCustomerEdit: any = false;
    customer: any;

    constructor(private http: HttpClient) { 
        this.url = this.env.url;
    }

    // Uses http.get() to load data from a single API endpoint
    getCustomers(): Observable<any> {
        // alert(this.env.production)
        return this.http.get(this.url + 'customers');
    }

    // Uses http.get() to load data from a single API endpoint
    saveCustomer(customer: any): Observable<any> {
        return this.http.post(this.url + 'customer', customer);
    }

    updateCustomer(customer: any): Observable<any> {
        return this.http.put(this.url + 'customer', customer);
    }

    getCarsSmall() {
        return this.http.get<any>('assets/customers.json')
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => { return data; });
    }

    getCarsMedium() {
        return this.http.get<any>('assets/customers.json')
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => { return data; });
    }

    getCarsLarge() {
        return this.http.get<any>('assets/customers.json')
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => { return data; });
    }

    getCarsHuge() {
        return this.http.get<any>('assets/customers.json')
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => { return data; });
    }
}