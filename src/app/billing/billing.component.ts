import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customers/customers.service';
import { TransactionsService } from '../transactions/transactions.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
    selector: 'gas-billing',
    templateUrl: './billing.component.html',
    styleUrls: ['./billing.component.css']
})
export class BillingComponent {
    actualValue: number = 0;
    totalValue: number = 0;
    gstValue: number = 0;
    items: any = [];
    gst = 12;
    submitBtnTxt: any = 'Add to Cart';
    customer: any;
    customers: any = [];
    filteredCustomers: any = [];
    billingForm: FormGroup;

    constructor(private router: Router, private formBuilder: FormBuilder, private customerService: CustomerService,
        private transactionService: TransactionsService
        , private messageService: MessageService) {

        this.billingForm = this.formBuilder.group({
            'customerObj': [],
            'capacity': [0, Validators.required],
            'cost': [0, Validators.required],
            'quantity': [0, Validators.required],
            'customerId': [0, Validators.required],
            'gst': [this.gst]
        });
    }

    routeToHome() {
        console.log("home");
        this.router.navigate(['gas-home']);
    }

    ngOnInit() {
        this.customerService.getCustomers().subscribe(
            (data) => {
                this.customers = data;
            },
            (error) => {

            }
        )
    }

    addToCart() {
        let errors: any = [];
        this.messageService.clear();
        if (this.billingForm.get('customerObj').value == null) {
            let error = { severity: 'error', summary: 'Error Message', detail: 'Please select customer' }
            errors.push(error);
        }

        if (this.billingForm.get('quantity').value == '') {
            let error = { severity: 'error', summary: 'Error Message', detail: 'Please enter quantity' }
            errors.push(error);
        }

        if (this.billingForm.get('capacity').value == '') {
            let error = { severity: 'error', summary: 'Error Message', detail: 'Please enter capacity' }
            errors.push(error);
        }

        if (this.billingForm.get('cost').value == '') {
            let error = { severity: 'error', summary: 'Error Message', detail: 'Please enter cost' }
            errors.push(error);
        }

        if (errors.length > 0) {
            this.messageService.addAll(errors);
        }
        else {
            this.billingForm.get('customerId').patchValue(this.billingForm.get('customerObj').value.id);
            let quantity = this.billingForm.get('quantity').value;
            let capacity = this.billingForm.get('capacity').value;
            let cost = this.billingForm.get('cost').value;

            let total = quantity * capacity * cost;
            var obj = {
                'quantity': quantity
                , 'capacity': capacity
                , 'cost': cost
                , 'name': quantity + ' * ' + capacity + ' * ' + cost
                , 'value': total
                , 'customerObj': this.billingForm.get('customerObj').value
            }
            if (this.submitBtnTxt !== 'Update') {
                this.items.push(obj);
            } else {
                this.items = [];
                this.items.push(obj);
            }
            this.calculateGST();
            this.billingForm.reset();
        }
    }

    calculateGST() {
        for (let i = 0; i < this.items.length; i++) {
            this.actualValue += this.items[i].value;
        }

        this.gstValue = (this.actualValue * 12) / 100;
        this.totalValue = this.actualValue + this.gstValue;
    }

    editItem(item: any) {
        this.submitBtnTxt = 'Update';
        let arr: any = [];
        arr = item.name.split(' *');
        this.billingForm.get('quantity').patchValue(item.quantity);
        this.billingForm.get('capacity').patchValue(item.capacity);
        this.billingForm.get('cost').patchValue(item.cost);
        this.billingForm.get('customerObj').patchValue(item.customerObj);

    }

    filterCustomers(event) {
        this.filteredCustomers = [];
        for (let i = 0; i < this.customers.length; i++) {
            let customer = this.customers[i];
            if (customer.firstName.toLowerCase().indexOf(event.query.toLowerCase()) > -1) {
                this.filteredCustomers.push(customer);
            }
        }
    }

    submit() {
        let transaction = {
            customerId: this.items[0].customerObj.id,
            quantity: this.items[0].quantity,
            capacity: this.items[0].capacity,
            cost: this.items[0].cost,
            gst: this.gst,
        }
        this.transactionService.saveTransaction(transaction).subscribe(
            (data) => {
                console.log('success' + data);
            },
            (error) => {
                console.log('error' + error);
            }
        )
    }
}