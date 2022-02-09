import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonModule } from "./pokemon/pokemon.module";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home/home.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { NotFoundComponent } from "./middlewares/not-found/not-found.component";
@NgModule({
	declarations: [AppComponent, NotFoundComponent],
	imports: [BrowserModule, AppRoutingModule, PokemonModule, HttpClientModule],
	providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
	bootstrap: [AppComponent],
})
export class AppModule {}
