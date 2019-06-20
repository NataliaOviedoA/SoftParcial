import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoctorComponent } from 'src/app/pages/doctor/doctor.component';
import { ConsultaComponent } from 'src/app/pages/consulta/consulta.component';
import { HistorialComponent } from 'src/app/pages/historial/historial.component';
import { DialogUserComponent } from 'src/app/pages/dialog-user/dialog-user.component';
import { ServicioComponent } from 'src/app/pages/servicio/servicio.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    DoctorComponent,
    ConsultaComponent,
    HistorialComponent,
    DialogUserComponent,
    ServicioComponent,
  ],
})

export class AdminLayoutModule {}
