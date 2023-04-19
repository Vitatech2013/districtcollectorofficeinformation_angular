import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeProfileComponent } from './Home/home-profile/home-profile.component';
import { CollectorLoginComponent } from './Admin-Collector/collector-login/collector-login.component';
import { CollectorNavbarComponent } from './Admin-Collector/collector-navbar/collector-navbar.component';
import { CollectorAddemployeeComponent } from './Admin-Collector/collector-addemployee/collector-addemployee.component';
import { CollectorViewemployeeComponent } from './Admin-Collector/collector-viewemployee/collector-viewemployee.component';
import { CollectorViewcastecertificateComponent } from './Admin-Collector/collector-viewcastecertificate/collector-viewcastecertificate.component';
import { CollectorViewpensioncertificateComponent } from './Admin-Collector/collector-viewpensioncertificate/collector-viewpensioncertificate.component';
import { CollectorViewbirthcertificateComponent } from './Admin-Collector/collector-viewbirthcertificate/collector-viewbirthcertificate.component';
import { CollectorViewdeathcertificateComponent } from './Admin-Collector/collector-viewdeathcertificate/collector-viewdeathcertificate.component';
import { CollectorViewrationcertificateComponent } from './Admin-Collector/collector-viewrationcertificate/collector-viewrationcertificate.component';
import { EmployeeLoginComponent } from './Employee/employee-login/employee-login.component';
import { EmployeeNavbarComponent } from './Employee/employee-navbar/employee-navbar.component';
import { EmployeeViewusercomplaintComponent } from './Employee/employee-viewusercomplaint/employee-viewusercomplaint.component';
import { EmployeeViewcastecertificateComponent } from './Employee/employee-viewcastecertificate/employee-viewcastecertificate.component';
import { EmployeeViewpensioncertificateComponent } from './Employee/employee-viewpensioncertificate/employee-viewpensioncertificate.component';
import { EmployeeViewbirthcertificateComponent } from './Employee/employee-viewbirthcertificate/employee-viewbirthcertificate.component';
import { EmployeeViewdeathcertificateComponent } from './Employee/employee-viewdeathcertificate/employee-viewdeathcertificate.component';
import { EmployeeViewrationcertificateComponent } from './Employee/employee-viewrationcertificate/employee-viewrationcertificate.component';
import { CitizenRegistrationComponent } from './User-Citizen/citizen-registration/citizen-registration.component';
import { CitizenLoginComponent } from './User-Citizen/citizen-login/citizen-login.component';
import { CitizenNavbarComponent } from './User-Citizen/citizen-navbar/citizen-navbar.component';
import { CitizenAddcomplaintComponent } from './User-Citizen/citizen-addcomplaint/citizen-addcomplaint.component';
import { CitizenViewcomplaintComponent } from './User-Citizen/citizen-viewcomplaint/citizen-viewcomplaint.component';
import { CitizenApplycastecertificateComponent } from './User-Citizen/citizen-applycastecertificate/citizen-applycastecertificate.component';
import { CitizenApplypensioncertificateComponent } from './User-Citizen/citizen-applypensioncertificate/citizen-applypensioncertificate.component';
import { CitizenApplyrationcertificateComponent } from './User-Citizen/citizen-applyrationcertificate/citizen-applyrationcertificate.component';
import { CitizenApplybirthcertificateComponent } from './User-Citizen/citizen-applybirthcertificate/citizen-applybirthcertificate.component';
import { CitizenApplydeathcertificateComponent } from './User-Citizen/citizen-applydeathcertificate/citizen-applydeathcertificate.component';
import { CitizenViewcastecertificateComponent } from './User-Citizen/citizen-viewcastecertificate/citizen-viewcastecertificate.component';
import { CitizenViewpensioncertificateComponent } from './User-Citizen/citizen-viewpensioncertificate/citizen-viewpensioncertificate.component';
import { CitizenViewbirthcertificateComponent } from './User-Citizen/citizen-viewbirthcertificate/citizen-viewbirthcertificate.component';
import { CitizenViewdeathcertificateComponent } from './User-Citizen/citizen-viewdeathcertificate/citizen-viewdeathcertificate.component';
import { CitizenViewrationcertificateComponent } from './User-Citizen/citizen-viewrationcertificate/citizen-viewrationcertificate.component';
import { CitizenProfileComponent } from './User-Citizen/citizen-profile/citizen-profile.component';
import { EmployeeProfileComponent } from './Employee/employee-profile/employee-profile.component';
import { CitizenChngPwdComponent } from './User-Citizen/citizen-chng-pwd/citizen-chng-pwd.component';
import { EmployeeCastestatusComponent } from './Employee/employee-castestatus/employee-castestatus.component';
import { EmployeeBirthstatusComponent } from './Employee/employee-birthstatus/employee-birthstatus.component';
import { EmployeeDeathstatusComponent } from './Employee/employee-deathstatus/employee-deathstatus.component';
import { EmployeeRationstatusComponent } from './Employee/employee-rationstatus/employee-rationstatus.component';


const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeProfileComponent},
  {path:'collector-login' , component:CollectorLoginComponent},
  {path:'collector-navbar' , component:CollectorNavbarComponent,
  children:[
    {path:'' , redirectTo:'admin-addemployee' , pathMatch:'full'},
    {path:'admin-addemployee' , component:CollectorAddemployeeComponent},
    {path:'admin-viewemployee' , component:CollectorViewemployeeComponent},
    {path:'admin-viewcaste' , component:CollectorViewcastecertificateComponent},
    {path:'admin-viewpension' , component:CollectorViewpensioncertificateComponent},
    {path:'admin-viewbirth' , component:CollectorViewbirthcertificateComponent},
    {path:'admin-viewdeath' , component:CollectorViewdeathcertificateComponent},
    {path:'admin-viewration' , component:CollectorViewrationcertificateComponent}
  ]
  },
  {path:'employee-login' , component:EmployeeLoginComponent},
  {path:'employee-navbar' , component:EmployeeNavbarComponent,
  children:[
    {path:'' , redirectTo:'employee-profile' , pathMatch:'full'},
    {path:'employee-profile' , component:EmployeeProfileComponent },
    {path:'employee-viewcomplaint' , component:EmployeeViewusercomplaintComponent},
    {path:'employee-viewcaste' , component:EmployeeViewcastecertificateComponent},
    {path:'employee-viewpension' , component:EmployeeViewpensioncertificateComponent},
    {path:'employee-viewbirth' ,  component:EmployeeViewbirthcertificateComponent},
    {path:'employee-viewdeath' , component:EmployeeViewdeathcertificateComponent},
    {path:'employee-viewration' , component:EmployeeViewrationcertificateComponent},
    {path:'employee-statuscaste' , component:EmployeeCastestatusComponent},
    {path:'employee-statusbirth' , component:EmployeeBirthstatusComponent},
    {path:'employee-statusdeath' , component:EmployeeDeathstatusComponent},
    {path:'employee-statusration', component:EmployeeRationstatusComponent},
    {path:'employee-statuspension', component:EmployeeViewpensioncertificateComponent}
 
  ]
  },
  {path:'citizen-registration' , component:CitizenRegistrationComponent},
  {path:'citizen-login' , component:CitizenLoginComponent},
  {path:'citizen-navbar' , component:CitizenNavbarComponent,
  children:[
    {path:'' , redirectTo:'citizen-profile' , pathMatch:'full'},
    {path:'citizen-profile' , component:CitizenProfileComponent},
    {path:'citizen-addcomplaint' , component:CitizenAddcomplaintComponent},
    {path:'citizen-viewcomplaint' , component:CitizenViewcomplaintComponent},
    {path:'citizen-applycaste' , component:CitizenApplycastecertificateComponent},
    {path:'citizen-applypension' , component:CitizenApplypensioncertificateComponent},
    {path:'citizen-applybirth' , component:CitizenApplybirthcertificateComponent},
    {path:'citizen-applydeath' , component:CitizenApplydeathcertificateComponent},
    {path:'citizen-applyration' , component:CitizenApplyrationcertificateComponent},
    {path:'citizen-viewcaste' , component:CitizenViewcastecertificateComponent},
    {path:'citizen-viewpension', component:CitizenViewpensioncertificateComponent},
    {path:'citizen-viewbirth' , component:CitizenViewbirthcertificateComponent},
    {path:'citizen-viewdeath' , component:CitizenViewdeathcertificateComponent},
    {path:'citizen-viewration',component:CitizenViewrationcertificateComponent},
    {path:'citizen-chngPwd',component:CitizenChngPwdComponent}
  ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
