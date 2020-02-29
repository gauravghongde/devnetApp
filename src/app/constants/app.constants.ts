export class ResponseTypes {
    static SUCCESS = 'SUCCESS';
    static FAILED = 'FAILED';
}

export class User {
    id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    jwtToken?: string;
  }
  