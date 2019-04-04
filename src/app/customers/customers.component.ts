import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './customers.service';

@Component({
    selector: 'gas-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css'],
    encapsulation : ViewEncapsulation.None
})
export class CustomersComponent {
    cols: any = [];
    customers: any = [];
    isLoading: any = false;

    constructor(private router: Router, private customerService: CustomerService) { }

    ngOnInit() {
        this.isLoading = true;
        this.customerService.getCustomers().subscribe(
            (data: any) => {
                this.customers = data;
                this.isLoading = false;
            },
            (error) => {
                console.log("error in getting customers");
                this.isLoading = false;
            },
            () => console.log('done loading foods')
        );

        this.cols = [
            { field: 'id', header: 'CustomerId' },
            { field: 'firstName', header: 'Name' },
            { field: 'phone', header: 'Phone' },
            { field: 'email', header: 'Email' },
            { field: 'address', header: 'Address' },
            { field: 'edit', header: 'Edit' }
            
        ];
    }

    editData(customer: any) {
        this.customerService.idCustomerEdit = true;
        this.customerService.customer = customer;
        this.router.navigate(['add-customer']);
    }

    addCustomer() {
        this.customerService.idCustomerEdit = false;
        this.customerService.customer = {};
        this.router.navigate(['add-customer']);
    }
}