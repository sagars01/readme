import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor() { }
  @Input() headlineName: string;
  @Input() headlineProf: string;
  ngOnInit() {

  }

}
