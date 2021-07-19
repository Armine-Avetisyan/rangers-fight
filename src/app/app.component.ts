import { Component } from '@angular/core';
import { Ranger } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ranger: Ranger[] = [
    new Ranger('Ranger 1', 100, 100),
    new Ranger('Ranger 2', 100, 100),

]

  fight() {
    this.ranger[0].start();
    this.ranger[1].start();
  }
  gameOver() {
    this.ranger[0].finish();
    this.ranger[1].finish();
    setTimeout(() => {
      console.log(`The winner is ${this.ranger[0].life > this.ranger[1].life ? this.ranger[0].name: this.ranger[1].name} with
    ${Math.max(this.ranger[0].life, this.ranger[1].life)} %`)
    }, 3000)

  }
}
