import { CanActivateChildFn, Router } from "@angular/router";
import { Auth } from "../services/auth";
import { inject } from "@angular/core";

export const authGuard:CanActivateChildFn=(route, state) => {
    const authService = inject(Auth);
    const router = inject(Router);
    if (authService.isLoggedIn()) {
        return true;
    }
    router.navigateByUrl('/login');
    return false;
}