import { Component, OnInit, Input} from '@angular/core';
import { Ranger } from "../../shared/interfaces";

@Component({
  selector: 'app-ranger',
  templateUrl: './ranger.component.html',
  styleUrls: ['./ranger.component.css']
})
export class RangerComponent implements OnInit {
  @Input() data: {
    name: string;
  } = Ranger ;
  ngOnInit(): void {

  }

  // onClick() {
  //   console.log(this.data.);
  // }

}

