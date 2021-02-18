import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceService {

  constructor(private http: HttpClient) { }
  jsonplace = 'assets/config.json';

    getPosts() {
      return new Promise((resolve,rejects) => {
        this.http.get('https://jsonplaceholder.typicode.com/posts')
        .subscribe(data => {
          resolve(data);
          }, (error) => {
            rejects (error);
          });
      });
    }
    getPersona() {
      return new Promise((resolve,rejects) => {
        
        this.http.get('http://127.0.0.1:8000/api/persona')
        .subscribe(data => {
          resolve(data);
          }, (error) => {
            rejects (error);
          });
      });
    }
    getComments() {
      return new Promise((resolve,rejects) => {
        this.http.get('https://jsonplaceholder.typicode.com/comments')
        .subscribe(data => {
          resolve(data);
          }, (error) => {
            rejects (error);
          });
      });
    }
}
