import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() title!:string
  @Input() imgsrc!:string
  @Input() description!: string
  @Input() link!: string
  @Input() stack1!: string
  @Input() stack2!: string

  constructor() { }

  ngOnInit(): void {
  }

}
