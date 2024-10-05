import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  private url: string= "json/usuario.json"
  
  constructor(
    private http: HttpClient,
  ) { }

  login(username: string, password: string): Observable<boolean> {
    if(username === 'error@error' && password === 'error') return throwError(() => new Error("Error del servidor"));
    
    return this.http.get<User[]>(this.url).pipe(
      map((users: User[]) => {
        const userFound = users.some(user => user.username === username && user.password === password);
        return userFound;
      }),
    );
  }
}
