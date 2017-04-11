import { Component } from '@angular/core';
import { HeroService } from './heroes/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  title = 'app works!';
}
