import {Component, OnInit} from '@angular/core';
import {SettingsService} from "../../services/settings.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {Settings} from "../../models/Settings";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    settings: Settings;

    constructor(private router: Router,
                private flashMessage: FlashMessagesService,
                private settingsService: SettingsService) {
    }

    ngOnInit() {
        this.settings = this.settingsService.getSettings();
    }

    updateSetting(setting: string) {
        switch (setting) {
            case 'allowRegistration':
                this.settings.allowRegistration = !this.settings.allowRegistration;
                break;
            case 'disableBalanceOnAdd':
                this.settings.disableBalanceOnAdd = !this.settings.disableBalanceOnAdd;
                break;
            case 'disableBalanceOnEdit':
                this.settings.disableBalanceOnEdit = !this.settings.disableBalanceOnEdit;
                break;
            default:
                break;
        }
    }

    onSubmit() {
        this.settingsService.changeSettings(this.settings);
        this.flashMessage.show('Configurações salvas com sucesso.', {
            cssClass: 'alert-success', timeout: 4000
        });
        // this.router.navigate(['/']);
    }
}
