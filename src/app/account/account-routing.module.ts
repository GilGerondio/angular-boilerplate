import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { VerifyEmailComponent } from './verify-email.component';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ResetPasswordComponent } from './reset-password.component';

const routes: Routes = (
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'login', component: LoginComponent }
        ]
    }
)