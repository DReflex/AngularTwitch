import { Component, OnInit } from '@angular/core';

import { Name } from '../name';
import { StreamService } from '../stream.service';

import { Router } from "@angular/router"

@Component({
  selector: 'list',
  templateUrl: './lsit.component.html',
  styleUrls: ['./list.component.css'],
  providers: [StreamService]
})
export class ListComponent implements OnInit {

  names: Name[];
  selectedStream: Name;


  constructor(
    private router: Router,
    private streamService: StreamService) { }

    gotoDetail(): void {
  this.router.navigate(['/stream', this.selectedStream.name]);
}

  getChannel(): void {
    this.streamService.getNames().then(res => this.names = res);
  }

  ngOnInit(): void {
    this.getChannel();
  }

  onSelect(hero: Name): void {
    this.selectedStream = hero;
  }

}
