import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {
  public defaultSelected = 0
  public selection: number;

  constructor() { }

  ngOnInit() {
  }

}
