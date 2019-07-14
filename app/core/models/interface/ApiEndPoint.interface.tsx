import { BASE_URL } from '@app/app.config';
const ApiEndPoints = {
    SIGN_IN: {
        method: 'GET',
        api: () => `${BASE_URL}/oauth/token`
    },
}

export interface APIDef {
    method: string;
    api: any;
}

export interface APIInput {
}
