import {Injectable} from '@angular/core';
import {Settings} from "../models/Settings";
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    settings: Settings = {
        allowRegistration: true,
        disableBalanceOnAdd: false,
        disableBalanceOnEdit: true
    };

    constructor(private afAuth: AngularFireAuth) {
    }

    getSettings(): Settings {
        return this.settings;
    }
}
