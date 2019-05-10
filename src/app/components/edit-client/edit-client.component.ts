import {Component, OnInit, ViewChild} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {Client} from "../../models/Client";
import {SettingsService} from "../../services/settings.service";

@Component({
    selector: 'app-edit-client',
    templateUrl: './edit-client.component.html',
    styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

    id: string;
    client: Client = {
        name: '',
        email: '',
        phone: '',
        balance: 0
    };
    disabledBalanceOnEdit: boolean = this.settingsService.getSettings().disableBalanceOnEdit;
    @ViewChild('clientForm') form: any;

    constructor(
        private clientService: ClientService,
        private router: Router,
        private route: ActivatedRoute,
        private flashMessage: FlashMessagesService,
        private settingsService: SettingsService) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.clientService.getClient(this.id).subscribe(client => {
            this.client = client;
        });
    }

    onSubmit({value, valid}: { value: Client, valid: boolean }) {
        if (!valid) {
            this.flashMessage.show('Por favor verifique os campos!', {
                cssClass: 'alert-danger', timeout: 4000
            });
        } else {
            value.id = this.id;
            this.clientService.updateClient(value);
            this.flashMessage.show('Cliente salvo com sucesso.', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.form.reset();
            this.router.navigate([`/client/${this.id}`]);
        }
    }

}
