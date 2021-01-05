import { environment } from '../../../environments/environment';
import { HttpEvent, HttpClient, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { SocialUser } from 'angularx-social-login';

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient) {}

    login(username: string, password: string): void {

        this.http.post<any>(environment.API_URL + '/api/login', { username, password }).subscribe({
            next: data => {
                const decoded = jwt_decode(data.token);
                localStorage.setItem('jwt', JSON.stringify(decoded) );
            },
            error: error => {
                console.error('There was an error!', error);
            }
        });
    }

    loginGOAuth2(socialUser: SocialUser): void {
        console.log(socialUser);
        this.http.post<any>(environment.API_URL + '/api/oauth2/login', { socialUser }).subscribe({
            next: data => {
                const decoded = jwt_decode(data.token);
                localStorage.setItem('jwt', JSON.stringify(decoded) );
            },
            error: error => {
                console.error('There was an error!', error);
            }
        });
    }
}
