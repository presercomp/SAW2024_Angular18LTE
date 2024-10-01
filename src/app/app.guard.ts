import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn:"root"
})
export class AuthGuard {
    constructor(
        private router: Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return true;
        //TODO Pendiente de validar para permitir controlar acceso
    }
}