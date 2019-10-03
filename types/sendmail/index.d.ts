// Type definitions for sendmail 1.7
// Project: https://github.com/guileen/node-sendmail
// Definitions by: Saeid Ostad <https://github.com/saostad>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace sendMailFactory {
    interface Options {
        logger?: {
            debug?: () => void;
            info?: () => void;
            warn?: () => void;
            error?: () => void;
        };
        silent?: boolean;
        /** Default: False */
        dkim?:
            | boolean
            | {
                  privateKey: string;
                  keySelector: string;
              };
        /** Default: False */
        devPort?: number | boolean;
        /** Default: localhost */
        devHost?: string;
        /** Default: 25 */
        smtpPort?: number;
        /** Default: -1 - extra smtp host after resolveMX */
        smtpHost?: string | number;
        /** Default: true - whether or not to reject self-signed TLS certificates */
        rejectUnauthorized?: boolean;
    }

    interface MailInput {
        from: string;
        to: string;
        cc?: string;
        bcc?: string;
        replyTo?: string;
        returnTo?: string;
        subject: string;
        type?: string;
        charset?: string;
        encoding?: string;
        id?: string;
        headers?: object;
        content?: string;
        html?: string;
        attachments?: Array<{
            type?: string;
            filename?: string;
            content?: any;
            path?: string;
            contentType?: string;
            encoding?: string;
        }>;
    }
}

type CallbackFn = (err: Error, domain: string) => void;

type SendMailFn = (
    mail: sendMailFactory.MailInput,
    callback: CallbackFn
) => void;

declare function sendMailFactory(options: sendMailFactory.Options): SendMailFn;

export = sendMailFactory;
