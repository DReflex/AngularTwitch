import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Stream} from './stream';
import { NAMES } from './mock-data';
import { Name }  from './name'



@Injectable ()
export class StreamService{
constructor(private http: Http) { }
 private url ="https://api.twitch.tv/kraken/channels";
 private stream = "https://api.twitch.tv/kraken/streams"
 private client_id = "client_id=m2s1poxqgevvpxlm42lq0z07uzsqo0";


getStream(name:string): Promise<Stream[]>{
      return this.http.get(`${this.stream}/${name}?${this.client_id}`)
      .toPromise()
      .then(response => response.json() as Stream[])
      .catch(this.handleError);

}


getChannel(name:string): Promise<Stream[]>{
      console.log(name);
      return this.http.get(`${this.url}/${name}?${this.client_id}`)
      .toPromise()
      .then(response => response.json() as Stream[])
      .catch(this.handleError);

}

getNames(): Promise<Name[]> {
  return Promise.resolve(NAMES);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }



}
