import { Component, OnInit } from '@angular/core';
import { StreamService } from './stream.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Name } from './name'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private streamService: StreamService){ }

  title = 'app';



}
