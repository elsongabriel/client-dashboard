import {NgModule} from '@angular/core';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ClientsComponent} from './components/clients/clients.component';
import {AddClientComponent} from './components/add-client/add-client.component';
import {EditClientComponent} from './components/edit-client/edit-client.component';
import {ClientDetailsComponent} from './components/client-details/client-details.component';
import {SettingsComponent} from './components/settings/settings.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'clients', component: ClientsComponent},
    {path: 'client/add', component: AddClientComponent},
    {path: 'client/edit/:id', component: EditClientComponent},
    {path: 'client/:id', component: ClientDetailsComponent},
    {path: 'settings', component: SettingsComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {
}
