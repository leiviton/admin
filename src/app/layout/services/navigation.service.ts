import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
    faTable,
    faEdit,
    faChartLine,
    faCalendarAlt,
    faPuzzlePiece,
    faTh,
    faReceipt,
    faLayerGroup,
    faInbox,
    faCircle,
    faUserShield,
    faCog,
    faFileAlt,
    faKey,
    faUserPlus,
    faUserSecret,
    faUsers,
    faMagic,
    faHome,
    faStore,
    faSuitcase,
    faCheckSquare,
    faLifeRing
} from '@fortawesome/free-solid-svg-icons';
import { faPagelines, faWpforms } from '@fortawesome/free-brands-svg-icons';

import { NavigationOptions } from '../models/navigation';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    constructor() {}

    getNavigationItems(): Observable<NavigationOptions[]> {
        return of([
            {
                title: 'Menu',
                icon: { name: faLayerGroup },
                items: [
                    {
                        icon: { name: faUsers },
                        title: 'Usuários',
                        link: '/users'
                    },
                    {
                        title: 'Setores',
                        icon: { name: faSuitcase },
                        link: '/dashboards/crm'
                    },
                    {
                        title: 'Solicitações',
                        icon: { name: faReceipt },
                        items: [
                            {
                                link: '/billing',
                                title: 'Invoices List',
                                icon: { letter: 'L' }
                            },
                            {
                                link: '/billing/invoice/demo-invoice',
                                title: 'Invoice',
                                icon: { letter: 'I' }
                            }
                        ]
                    },
                    {
                        icon: { name: faHome },
                        title: 'Home',
                        items: [
                            {
                                icon: { name: faKey },
                                title: 'Login',
                                link: '/login',
                                target: '_blank'
                            },
                            {
                                icon: { name: faUserPlus },
                                title: 'Register',
                                link: '/register',
                                target: '_blank'
                            },
                            {
                                icon: { name: faUserShield },
                                title: 'Forgot Pass',
                                link: '/forgot',
                                target: '_blank'
                            }
                        ]
                    },
                    {
                        icon: { name: faCog },
                        title: 'Configurações',
                        link: '/settings'
                    }
                    /*{
                        icon: { name: faTable },
                        title: 'UI Elements',
                        items: [
                            {
                                link: '/ui-elements/accordion',
                                title: 'Accordion',
                                icon: { letter: 'A' }
                            },
                            {
                                link: '/ui-elements/avatars',
                                title: 'Avatars',
                                icon: { letter: 'V' }
                            },
                            {
                                link: '/ui-elements/alerts',
                                title: 'Alerts',
                                icon: { letter: 'L' }
                            },
                            {
                                link: '/ui-elements/buttons',
                                title: 'Buttons',
                                icon: { letter: 'B' }
                            },
                            {
                                link: '/ui-elements/button-group',
                                title: 'Button Group',
                                icon: { letter: 'G' }
                            },
                            {
                                link: '/ui-elements/colors',
                                title: 'Colors',
                                icon: { letter: 'C' }
                            },
                            {
                                link: '/ui-elements/dropdowns',
                                title: 'Dropdown',
                                icon: { letter: 'D' }
                            },
                            {
                                link: '/ui-elements/modals',
                                title: 'Modals',
                                icon: { letter: 'M' }
                            },
                            {
                                link: '/ui-elements/navigations',
                                title: 'Navigations',
                                icon: { letter: 'N' }
                            },
                            {
                                link: '/ui-elements/popover',
                                title: 'Popover',
                                icon: { letter: 'V' }
                            },
                            {
                                link: '/ui-elements/progress',
                                title: 'Progress',
                                icon: { letter: 'P' }
                            },
                            {
                                link: '/ui-elements/tabs',
                                title: 'Tabs',
                                icon: { letter: 'T' }
                            },
                            {
                                link: '/ui-elements/tooltip',
                                title: 'Tooltip',
                                icon: { letter: 'O' }
                            },
                            {
                                link: '/ui-elements/typographic',
                                title: 'Typographic',
                                icon: { letter: 'Y' }
                            }
                        ]
                    }*/
                ]
            }]);
    }
}
