import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';


import { StreamService } from '../stream.service';
import 'rxjs/add/operator/switchMap';

import { Name } from '../name';


@Component({
  selector: 'hero-detail',
  templateUrl: './stream-detail.component.html',
  styleUrls:['./stream-detail.component.css']
})
export class StreamDetailComponent implements OnInit {
  name =[]
  video =[]
url;
showChat: boolean = true;



  constructor(
    private streamService: StreamService,
    private route: ActivatedRoute,
    private location: Location,
  ) {};


  ngOnInit(): void {
  this.route.paramMap
    .switchMap((params: ParamMap) =>
    this.streamService.getChannel(params.get('name')))
    .subscribe(res =>this.name = res);
    this.route.paramMap
      .switchMap((params: ParamMap) =>
      this.streamService.getStream(params.get('name')))
      .subscribe(res =>this.video = res);
  }


  goBack(): void{
    this.location.back();
  }

  toggleChat(): void {
      this.showChat = !this.showChat;
  }

}
