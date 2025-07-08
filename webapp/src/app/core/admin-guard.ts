import { CanActivateChildFn, Router } from "@angular/router";
import { Auth } from "../services/auth";
import { inject } from "@angular/core";

export const adminGuard:CanActivateChildFn=(route, state) => {
    const authService = inject(Auth);
    const router = inject(Router);
    if (authService.getIsAdmin()) {
        return true;
    }
    router.navigateByUrl('/');
    return false;
}