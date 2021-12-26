import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() url : string

  constructor() {
    this.url = "";
   }

  ngOnInit(): void {
  }

}
