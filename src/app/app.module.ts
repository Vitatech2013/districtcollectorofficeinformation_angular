import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgmaterialModule } from './Ng-Material/ngmaterial/ngmaterial.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollectorLoginComponent } from './Admin-Collector/collector-login/collector-login.component';
import { CollectorAddemployeeComponent } from './Admin-Collector/collector-addemployee/collector-addemployee.component';
import { CollectorViewemployeeComponent } from './Admin-Collector/collector-viewemployee/collector-viewemployee.component';
import { CollectorViewcastecertificateComponent } from './Admin-Collector/collector-viewcastecertificate/collector-viewcastecertificate.component';
import { CollectorViewpensioncertificateComponent } from './Admin-Collector/collector-viewpensioncertificate/collector-viewpensioncertificate.component';
import { CollectorViewbirthcertificateComponent } from './Admin-Collector/collector-viewbirthcertificate/collector-viewbirthcertificate.component';
import { CollectorViewdeathcertificateComponent } from './Admin-Collector/collector-viewdeathcertificate/collector-viewdeathcertificate.component';
import { CollectorViewrationcertificateComponent } from './Admin-Collector/collector-viewrationcertificate/collector-viewrationcertificate.component';
import { EmployeeLoginComponent } from './Employee/employee-login/employee-login.component';
import { EmployeeViewusercomplaintComponent } from './Employee/employee-viewusercomplaint/employee-viewusercomplaint.component';
import { EmployeeViewbirthcertificateComponent } from './Employee/employee-viewbirthcertificate/employee-viewbirthcertificate.component';
import { EmployeeViewpensioncertificateComponent } from './Employee/employee-viewpensioncertificate/employee-viewpensioncertificate.component';
import { EmployeeViewdeathcertificateComponent } from './Employee/employee-viewdeathcertificate/employee-viewdeathcertificate.component';
import { EmployeeViewrationcertificateComponent } from './Employee/employee-viewrationcertificate/employee-viewrationcertificate.component';
import { EmployeeViewcastecertificateComponent } from './Employee/employee-viewcastecertificate/employee-viewcastecertificate.component';
import { CitizenRegistrationComponent } from './User-Citizen/citizen-registration/citizen-registration.component';
import { CitizenLoginComponent } from './User-Citizen/citizen-login/citizen-login.component';
import { CitizenProfileComponent } from './User-Citizen/citizen-profile/citizen-profile.component';
import { CitizenAddcomplaintComponent } from './User-Citizen/citizen-addcomplaint/citizen-addcomplaint.component';
import { CitizenViewcomplaintComponent } from './User-Citizen/citizen-viewcomplaint/citizen-viewcomplaint.component';
import { CitizenApplycastecertificateComponent } from './User-Citizen/citizen-applycastecertificate/citizen-applycastecertificate.component';
import { CitizenApplypensioncertificateComponent } from './User-Citizen/citizen-applypensioncertificate/citizen-applypensioncertificate.component';
import { CitizenApplybirthcertificateComponent } from './User-Citizen/citizen-applybirthcertificate/citizen-applybirthcertificate.component';
import { CitizenApplydeathcertificateComponent } from './User-Citizen/citizen-applydeathcertificate/citizen-applydeathcertificate.component';
import { CitizenApplyrationcertificateComponent } from './User-Citizen/citizen-applyrationcertificate/citizen-applyrationcertificate.component';
import { HomeNavbarComponent } from './Home/home-navbar/home-navbar.component';
import { HomeProfileComponent } from './Home/home-profile/home-profile.component';
import { CollectorNavbarComponent } from './Admin-Collector/collector-navbar/collector-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { EmployeeNavbarComponent } from './Employee/employee-navbar/employee-navbar.component';
import { CitizenNavbarComponent } from './User-Citizen/citizen-navbar/citizen-navbar.component';
import { CitizenViewcastecertificateComponent } from './User-Citizen/citizen-viewcastecertificate/citizen-viewcastecertificate.component';
import { CitizenViewpensioncertificateComponent } from './User-Citizen/citizen-viewpensioncertificate/citizen-viewpensioncertificate.component';
import { CitizenViewbirthcertificateComponent } from './User-Citizen/citizen-viewbirthcertificate/citizen-viewbirthcertificate.component';
import { CitizenViewdeathcertificateComponent } from './User-Citizen/citizen-viewdeathcertificate/citizen-viewdeathcertificate.component';
import { CitizenViewrationcertificateComponent } from './User-Citizen/citizen-viewrationcertificate/citizen-viewrationcertificate.component';


import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeProfileComponent } from './Employee/employee-profile/employee-profile.component';
import { CitizenChngPwdComponent } from './User-Citizen/citizen-chng-pwd/citizen-chng-pwd.component';


@NgModule({
  declarations: [
    AppComponent,
    CollectorLoginComponent,
    CollectorAddemployeeComponent,
    CollectorViewemployeeComponent,
    CollectorViewcastecertificateComponent,
    CollectorViewpensioncertificateComponent,
    CollectorViewbirthcertificateComponent,
    CollectorViewdeathcertificateComponent,
    CollectorViewrationcertificateComponent,
    EmployeeLoginComponent,
   
    EmployeeViewusercomplaintComponent,
    EmployeeViewbirthcertificateComponent,
    EmployeeViewpensioncertificateComponent,
    EmployeeViewdeathcertificateComponent,
    EmployeeViewrationcertificateComponent,
    EmployeeViewcastecertificateComponent,
    CitizenRegistrationComponent,
    CitizenLoginComponent,
    CitizenProfileComponent,
    CitizenAddcomplaintComponent,
    CitizenViewcomplaintComponent,
    CitizenApplycastecertificateComponent,
    CitizenApplypensioncertificateComponent,
    CitizenApplybirthcertificateComponent,
    CitizenApplydeathcertificateComponent,
    CitizenApplyrationcertificateComponent,
    HomeNavbarComponent,
    HomeProfileComponent,
    CollectorNavbarComponent,
    EmployeeNavbarComponent,
    CitizenNavbarComponent,
    CitizenViewcastecertificateComponent,
    CitizenViewpensioncertificateComponent,
    CitizenViewbirthcertificateComponent,
    CitizenViewdeathcertificateComponent,
    CitizenViewrationcertificateComponent,
    EmployeeProfileComponent,
    CitizenChngPwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgmaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [NgmaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
