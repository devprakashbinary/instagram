import { BASE_URL } from '@app/app.config';
export class ApiEndPoints {
    public static SIGN_IN: APIDef = {
        method: 'GET',
        api: () => `${BASE_URL}/oauth/token`
    };
    public static GET_ALL_DIAL_CODE: APIDef = {
        method: 'GET',
        api: () => `http://country.io/capital.json`
    };

}

export interface APIDef {
    method: string;
    api: any;
}

export interface APIInput {
}
