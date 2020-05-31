import {
    Component,
    OnInit,
    TemplateRef,
    ViewChild,
    OnDestroy
} from '@angular/core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserIdleConfig, UserIdleService } from 'angular-user-idle';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'prx-user-idle',
    templateUrl: './user-idle.component.html',
    styleUrls: ['./user-idle.component.scss']
})
export class UserIdleComponent implements OnInit, OnDestroy {
    private timerStartSubscription: Subscription;
    private timeoutSubscription: Subscription;
    private pingSubscription: Subscription;

    lastPing: string;
    isWatching: boolean;
    isTimer: boolean;
    timeIsUp: boolean;
    timerCount: number;
    idleModalRef: BsModalRef;

    icons = {
        clock: faClock
    };

    config: UserIdleConfig = {
        idle: 5,
        timeout: 5,
        ping: 0
    };

    @ViewChild('idleModal', { static: false })
    idleModal: TemplateRef<any>;

    constructor(
        private userIdle: UserIdleService,
        private modalService: BsModalService
    ) {}

    ngOnInit() {
        this.startWatching();
    }

    ngOnDestroy() {
        this.stopTimer();
        this.stopWatching();
    }

    /**
     * You should init User Idle Service in one of core component or service of your app,
     * for example login.component.ts
     * https://github.com/rednez/angular-user-idle#usage
     */
    startWatching() {
        this.isWatching = true;
        this.timerCount = this.config.timeout;
        this.userIdle.setConfigValues(this.config);

        // Start watching for user inactivity.
        this.userIdle.startWatching();

        // Start watching when user idle is starting.
        this.timerStartSubscription = this.userIdle
            .onTimerStart()
            .pipe(
                tap(v => {
                    if (v && !this.isTimer) {
                        // Show Modal, but you can do anything you like
                        this.idleModalRef = this.modalService.show(
                            this.idleModal
                        );

                        this.isTimer = true;
                    }
                })
            )
            .subscribe(count => {
                this.timerCount = count;
            });

        // Start watch when time is up.
        this.timeoutSubscription = this.userIdle.onTimeout().subscribe(() => {
            this.timeIsUp = true;

            // redirect to login
        });

        this.pingSubscription = this.userIdle.ping$.subscribe(
            value => (this.lastPing = `#${value} at ${new Date().toString()}`)
        );
    }

    stopWatching() {
        this.isWatching = false;
        this.isTimer = false;
        this.timeIsUp = false;
        this.lastPing = null;

        this.userIdle.stopWatching();
        this.timerStartSubscription.unsubscribe();
        this.timeoutSubscription.unsubscribe();
        this.pingSubscription.unsubscribe();
    }

    stopTimer() {
        this.userIdle.stopTimer();
        this.isTimer = false;
    }

    resetTimer() {
        this.userIdle.resetTimer();
        this.isTimer = false;
        this.timeIsUp = false;

        // Hide the modal
        this.idleModalRef.hide();
    }
}
