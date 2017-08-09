import { Component,Input,OnChanges } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


import { StreamService } from '../../stream.service';


@Component({
  selector: 'stream',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnChanges{
  constructor(private sanitizer: DomSanitizer) { }
  @Input() title;
  URL;
  url;
  ngOnChanges():void{
    this.url = "http://player.twitch.tv/?channel=" + this.title+"&muted=true";
    this.URL = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
