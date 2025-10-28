import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LiquidButton } from './liquid-button/liquid-button';
import { LiquidCard } from './liquid-card/liquid-card';
import { LiquidMusicWidget } from './liquid-music-widget/liquid-music-widget';

@NgModule({
  declarations: [App, LiquidButton, LiquidCard, LiquidMusicWidget],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
