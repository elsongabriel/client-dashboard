import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {Client} from "../../models/Client";

@Component({
    selector: 'app-client-details',
    templateUrl: './client-details.component.html',
    styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

    id: string;
    client: Client;
    hasBalance: boolean = false;
    showBalanceUpdatedInput: boolean = false;

    constructor(
        private clientService: ClientService,
        private router: Router,
        private route: ActivatedRoute,
        private flashMessage: FlashMessagesService) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.clientService.getClient(this.id).subscribe(client => {
            if (client != null) {
                this.hasBalance = (client.balance > 0);
            }
            this.client = client;
        });
    }

    onDeleteClick() {

    }

}
