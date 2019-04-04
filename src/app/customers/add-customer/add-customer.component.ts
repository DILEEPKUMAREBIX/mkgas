import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomerService } from '../customers.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
    selector: 'add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.css']
})
export class AddCustomersComponent {
    customerForm: FormGroup;
    saveOrUpdateBtn:any = 'Save';
    submitted:any;
    loading: any = false;
    constructor(private router: Router,
        private formBuilder: FormBuilder,
        private customerService: CustomerService,
        private messageService: MessageService) {

        this.customerForm = this.formBuilder.group({
            'firstName': [''],
            'lastName': [''],
            'phone': [''],
            'email': [''],
            'address': [''],
        });
    }

    ngOnInit() {
        if (this.customerService.idCustomerEdit) {
            this.saveOrUpdateBtn = 'Update';
            this.customerForm = this.formBuilder.group(this.customerService.customer);
        }
    }

    onSubmit() {
        let errors: any = [];
        this.messageService.clear();
        if (this.customerForm.get('firstName').value == '') {
            let error = { severity: 'error', summary: 'Error Message', detail: 'Please enter firstName' }
            errors.push(error);
        }

        if (this.customerForm.get('lastName').value == '') {
            let error = { severity: 'error', summary: 'Error Message', detail: 'Please enter lastName' }
            errors.push(error);
        }

        if (this.customerForm.get('phone').value == '') {
            let error = { severity: 'error', summary: 'Error Message', detail: 'Please enter phone' }
            errors.push(error);
        }

        if (this.customerForm.get('email').value == '') {
            let error = { severity: 'error', summary: 'Error Message', detail: 'Please enter email' }
            errors.push(error);
        }

        if (this.customerForm.get('address').value == '') {
            let error = { severity: 'error', summary: 'Error Message', detail: 'Please enter address' }
            errors.push(error);
        }

        if (errors.length > 0) {
            this.messageService.addAll(errors);
        } else {
            if (this.customerService.idCustomerEdit) {
                this.customerService.updateCustomer(this.customerForm.value).subscribe(
                    (data) => {
                        this.router.navigate(['gas-customers']);
                    },
                    (error) => {
                        console.log("error in saving customer" + this.customerForm.value);
                    }
                )
            } else {
                this.customerService.saveCustomer(this.customerForm.value).subscribe(
                    (data) => {
                        this.router.navigate(['gas-customers']);
                    },
                    (error) => {
                        console.log("error in saving customer" + this.customerForm.value);
                    }
                )
            }
        }
    }

    routeToHome() {
        console.log("home");
        this.router.navigate(['gas-home']);
    }
}