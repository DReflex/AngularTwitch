import { Component,Input,OnChanges, } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


import { StreamService } from '../../stream.service';


@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnChanges{
  constructor(private sanitizer: DomSanitizer) { }
  @Input() title;

  chat;
  height;
  ngOnChanges():void{
    this.chat = this.sanitizer.bypassSecurityTrustResourceUrl("http://www.twitch.tv/"+this.title+"/chat");
    this.height = window.screen.height/1.3;
    console.log(this.height);
  }
}
