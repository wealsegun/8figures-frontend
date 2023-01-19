import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserProfile } from '../models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {

  }

  addToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  addProfile(profile: UserProfile) {
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  getProfile(): UserProfile {
    const jsonProfile = localStorage.getItem('profile');
    return JSON.parse(jsonProfile != null ? JSON.parse(jsonProfile) : null) as UserProfile;
  }

  getToken() {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
  }
}
