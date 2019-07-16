// Alert Messages 

export const WRONG_PASSWORD: MessageDef = {
    title: (input: MessageInput) =>`Incorrect password for ${input.username}`,
    message: 'The password you entered is incorrect. Please try again.'
}








export interface MessageDef {
    title: any;
    message: any;
}
export interface MessageInput {
    username?: string;
}