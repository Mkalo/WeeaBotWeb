import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

export class GuildMember {
  id: string;
  name: string;
  discriminator: string;
  avatarURL: string;
  displayName: string;
  displayColor: number;
  displayHexColor: string;
  levelInfo: {
    totalExperience: number;
    experience: number;
    experienceNext: number;
    level: number;
  };
}

@Injectable()
export class GuildsService {
  private uri = 'api/guilds';

  constructor(private http: Http) { }

  getMemebers(guild: string | number): Observable<GuildMember[]> {
    return this.http.get(`${this.uri}/${guild}/members`)
      .map(response => {
        return response.json().members as GuildMember[];
      })
      .catch(err => {
        return Observable.throw(err);
      });
  }

}
