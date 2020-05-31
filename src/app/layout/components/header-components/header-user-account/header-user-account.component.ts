import { Component, OnInit } from '@angular/core';
import { AuthenticationService, BaseComponent } from '@app/core';
import { Router } from '@angular/router';

@Component({
    selector: 'prx-header-user-account',
    templateUrl: './header-user-account.component.html',
    styleUrls: ['./header-user-account.component.scss']
})
export class HeaderUserAccountComponent extends BaseComponent
    implements OnInit {
    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
        super();
    }

    ngOnInit() {}

    logout() {
        this.authenticationService.logout().subscribe(() => this.redirect());
    }

    redirect() {
        this.router.navigate(['/login'], { replaceUrl: true });
    }
}
