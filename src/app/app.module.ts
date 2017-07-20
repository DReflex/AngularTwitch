import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { StreamDetailComponent } from './stream-detail.component';
import{ ListComponent } from './list.component';

import { StreamService } from './stream.service';

import { HomeComponent } from './home.component'

import { AppRoutingModule } from './routing.module';


//import{ HeroSearchComponent } from './hero-search.component';



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
    //HeroSearchComponent
  ],
  providers: [ StreamService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
