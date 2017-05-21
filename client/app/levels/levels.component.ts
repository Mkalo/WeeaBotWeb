import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { GuildsService, GuildMember } from '../guilds.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {
  private members: GuildMember[];

  constructor(private route: ActivatedRoute, private router: Router, private service: GuildsService) { }

  ngOnInit()   {
    this.route.params
      .switchMap((params: Params) => this.service.getMemebers(params['id']))
      .subscribe((members: GuildMember[]) => {
        members.sort((a: GuildMember, b: GuildMember): number => {
          if (a.levelInfo.totalExperience > b.levelInfo.totalExperience) {
            return -1;
          } else if (a.levelInfo.totalExperience < b.levelInfo.totalExperience) {
            return 1;
          }
          return 0;
        });
        this.members = members;
      });
  }

}
