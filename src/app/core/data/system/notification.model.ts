export type NotificationStatus = 'success' | 'error' | 'warning' | 'info';

export class Notification {
    status: NotificationStatus = 'info';
    message: String = 'Pendiente';
    isClose: boolean = false;

    constructor(status: NotificationStatus, message: String) {
        this.status = status;
        this.message = message;
        this.startTimer();
    }

    private startTimer(): void {
        setTimeout(() => {
            this.isClose = true;
        }, 2500);

    }
}