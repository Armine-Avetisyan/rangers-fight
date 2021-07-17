import { Component, OnInit } from '@angular/core';
import { Ranger } from "../../shared/interfaces";

@Component({
  selector: 'app-ranger',
  templateUrl: './ranger.component.html',
  styleUrls: ['./ranger.component.css']
})
export class RangerComponent implements OnInit {
  starter: boolean = false
  end: boolean = false
  ranger1 = new Ranger('Ranger 1', 22, 100);
  ranger2 = new Ranger('Ranger 2', 32, 100);
  constructor() { }

  ngOnInit(): void {

  }


  onClick(data: Ranger ){
    data.life -= Math.trunc(Math.random() * 10 + 1);
    console.log(data);
  }

  onStarter(player1: Ranger, player2: Ranger) {
    this.starter = true;
    this.end = true;
    console.log(`${player1.name} - ${player1.life}%`)
    console.log(`${player2.name} - ${player2.life}%`)
  }
  onOver() {
    // this.starter = false;
    // this.end = false;
    setTimeout(() => {
      if (this.ranger1.life > this.ranger2.life) {
        console.log(`The winner is ${this.ranger1.name} with ${this.ranger1.life} life percentage`);
      } else {
        console.log(`The winner is ${this.ranger2.name} with ${this.ranger2.life} life percentage`)
      }
    }, 3000)

   }


}

