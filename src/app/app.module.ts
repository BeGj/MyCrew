// Packages
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EntityDataModule } from '@ngrx/data';

// Project stuff
import { environment } from '@env/environment';
import { SharedModule } from '@shared/shared.module';
import { entityConfig } from './entity-metadata';

// Declarations
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    // EntityDataModule.forRoot(entityConfig), // Causes error. R3 injector. Depends on HttpClient(?)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
