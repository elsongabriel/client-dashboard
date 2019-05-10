import {Component, OnInit, ViewChild} from '@angular/core';
import {Client} from "../../models/Client";
import {ClientService} from "../../services/client.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import {SettingsService} from "../../services/settings.service";

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
    disabledBalanceOnAdd: boolean = this.settingsService.getSettings().disableBalanceOnAdd;
    @ViewChild('clientForm') form: any;

    constructor(private flashMessage: FlashMessagesService,
                private clientService: ClientService,
                private router: Router,
                private settingsService: SettingsService) {
    }

    ngOnInit() {
    }

    onSubmit({value, valid}: { value: Client, valid: boolean }) {
        if (this.disabledBalanceOnAdd) {
            value.balance = 0;
        }

        if (!valid) {
            this.flashMessage.show('Por favor verifique os campos!', {
                cssClass: 'alert-danger', timeout: 4000
            });
        } else {
            this.clientService.newClient(value);
            this.flashMessage.show('Cliente criado com sucesso.', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.form.reset();
            this.router.navigate(['/']);
        }
    }
}
