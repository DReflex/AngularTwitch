import { Component, OnInit } from '@angular/core';
import{ Name } from '../name';
import { StreamService } from '../stream.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
names: Name[] = [];
constructor(private streamService: StreamService){ }
ngOnInit(): void {
  this.streamService.getNames()
    .then(res => this.names = res.slice(0, 4));
}
 }
