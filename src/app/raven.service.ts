import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './models/Characters';
import { Observable } from 'rxjs';
import md5 from 'crypto-js/md5';

@Injectable({
  providedIn: 'root'
})
export class RavenService {
  readonly PRIVATE_KEY = 'b85cb94a4ebd05f9ed2bb1e62eaaf0fe6896489e';
  readonly PUBLIC_KEY = '512cd63a5cdc562b050629f70c089b3d';
  readonly ROOT_URL_GOT = 'https://api.got.show/api/show/characters';

  ts = new Date().getTime();
  hash = md5(this.ts + this.PRIVATE_KEY + this.PUBLIC_KEY);
  readonly ROOT_URL_MARVEL = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=tony&ts=${
    this.ts
  }&apikey=512cd63a5cdc562b050629f70c089b3d&hash=${this.hash}`;

  posts: any;

  constructor(private http: HttpClient) {}

  getHistory(): Observable<Character[]> {
    console.log(`This is the hash code: ${this.hash}`);
    this.posts = this.http.get<Character[]>(this.ROOT_URL_GOT);
    return this.posts;
  }
}
