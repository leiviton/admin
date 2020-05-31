export class EmailResponse {
    group: string;
    items: EmailMessage[];
}

export interface EmailMessage {
    id: string;
    time: string;
    subject: string;
    body: string;
    from: MessageSender;
}

export interface MessageSender {
    name: string;
    email: string;
    status: string;
    picture: string;
}
