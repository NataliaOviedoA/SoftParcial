import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { DoctorComponent } from 'src/app/pages/doctor/doctor.component';
import { ConsultaComponent } from 'src/app/pages/consulta/consulta.component';
import { HistorialComponent } from 'src/app/pages/historial/historial.component';
import { DialogUserComponent } from 'src/app/pages/dialog-user/dialog-user.component';
import { ServicioComponent } from 'src/app/pages/servicio/servicio.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'doctor',         component: DoctorComponent },
    { path: 'consulta',       component: ConsultaComponent },
    { path: 'historial',      component: HistorialComponent },
    { path: 'dialog',         component: DialogUserComponent },
    { path: 'servicio',       component: ServicioComponent }
];
