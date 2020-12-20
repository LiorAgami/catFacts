import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Dashboard } from './components/dashboard/dashboard.component';
import { MainTitle } from './components/main-title/main-title.component';
import { FactsList } from './components/facts-list/facts-list.component';
import { FactListItem } from './components/fact-list-item/fact-list-item.component';
import { FactDetails } from './components/fact-details/fact-details.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    Dashboard,
    MainTitle,
    FactsList,
    FactListItem,
    FactDetails
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
