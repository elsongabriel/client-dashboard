import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {FlashMessagesModule} from "angular2-flash-messages";

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ClientsComponent} from './components/clients/clients.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {AddClientComponent} from './components/add-client/add-client.component';
import {EditClientComponent} from './components/edit-client/edit-client.component';
import {ClientDetailsComponent} from './components/client-details/client-details.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {SettingsComponent} from './components/settings/settings.component';
import {AppRoutingModule} from './app-routing.module';

import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
// import {AngularFireModule} from 'angularfire2';
// import {AngularFirestoreModule} from 'angularfire2/firestore';
// import {AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        DashboardComponent,
        ClientsComponent,
        SidebarComponent,
        AddClientComponent,
        EditClientComponent,
        ClientDetailsComponent,
        LoginComponent,
        RegisterComponent,
        NotFoundComponent,
        SettingsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        FlashMessagesModule.forRoot(),
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase/*, 'client-dashboard'*/),
        AngularFirestoreModule,
        AngularFireAuthModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
