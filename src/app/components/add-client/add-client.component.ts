import {Component, OnInit} from '@angular/core';
import {Client} from "../../models/Client";
import {ClientService} from "../../services/client.service";

@Component({
    selector: 'app-add-client',
    templateUrl: './add-client.component.html',
    styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

    client: Client = {
        name: '',
        email: '',
        phone: '',
        balance: 0
    };
    disabledBalanceOnAdd: boolean = true;

    constructor(private clientService: ClientService) {
    }

    ngOnInit() {
    }

    onSubmit(e) {

    }
}
