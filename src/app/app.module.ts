import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { StreamDetailComponent } from './stream-detail/stream-detail.component';
import{ ListComponent } from './list/list.component';

import { StreamService } from './stream.service';

import { HomeComponent } from './home/home.component'

import { AppRoutingModule } from './routing.module';
import { VideoComponent }   from './stream-detail/video/video.component';
import { ChatComponent } from './stream-detail/chat/chat.component';
import { DashboardComponent} from './dashboard/dashboard.component'





@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    StreamDetailComponent,
    ListComponent,
    VideoComponent,
    ChatComponent,
    DashboardComponent
  ],
  providers: [ StreamService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
