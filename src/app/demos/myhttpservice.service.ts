import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable() // {providedIn: 'root'}
export class MyHttpService {
  public cfBaseUrl = '';
  public cfBaseIdentityUrl = '';
  public enableAuthentication = false;
  public cfToken = '';
  private headers: any;
  private options: any;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  public checkServiceIsAlive(text: string) {
    return `Service is ${text}`;
  }

  public httpGet(endpoint: string = '', queryValues: string = ''): Promise<any> {
    return this.httpClient
      .get(this.cfBaseUrl + '/' + endpoint + (queryValues ? '/' + queryValues : ''), this.setAutorisationHeader())
      .pipe(map(response => response))
      .toPromise();
  }

  public httpIdentityPost(endpoint: string = '', data: any): Promise<any> {
    return this.httpClient
      .post(this.cfBaseIdentityUrl + '/' + endpoint, data, this.setAutorisationHeader())
      .pipe(map(response => response))
      .toPromise();
  }

  public httpPost(endpoint: string = '', data: any): Promise<any> {
    return this.httpClient
      .post(this.cfBaseUrl + '/' + endpoint, data, this.setAutorisationHeader())
      .pipe(map(response => response))
      .toPromise();
  }

  public httpDelete(endpoint: string = '', queryValues: string = ''): Promise<any> {
    return this.httpClient
      .delete(this.cfBaseUrl + '/' + endpoint + (queryValues ? '/' + queryValues : ''), this.setAutorisationHeader())
      .pipe(map(response => response))
      .toPromise();
  }

  private setAutorisationHeader() {
    let httpHeaders = this.headers;

    if (this.cfToken) {
      httpHeaders = this.headers.append('Authorization', this.cfToken);
    }

    const options = {
      headers: httpHeaders,
    };
    return options;
  }
}
