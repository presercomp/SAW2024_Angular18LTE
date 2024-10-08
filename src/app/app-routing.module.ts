import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes = [
    {path: '', loadChildren: () => import('./www/public/public.module').then(m => m.PublicModule)},
    {path: '/dashboard', loadChildren: () => import('./www/private/private.module').then(m => m.PrivateModule)}
]
@NgModule({
imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top', useHash: false})],
exports: [RouterModule]
})
export class AppRoutingModule{}