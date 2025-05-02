import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DataBindingsComponent } from './components/data-binding/data-binding.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    //{path: 'data-bindings', component: DataBindingsComponent},

    // Implementing lazy loading for data-bindings module
    {path: 'data-bindings', component: DataBindingsComponent},

    {path: 'about', component: AboutComponent},
    {path: 'contact-us', component: ContactUsComponent},

    // if the route is not found, redirect to home
    {path: '**', redirectTo: 'home'}
];
