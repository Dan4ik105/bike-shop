import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger('exit',[
      transition('void=>*', [
        style({transform: 'translateX(100%)'}),
        animate('1s ease-out')
      ]),
      transition('*=>void', [
        style({
          opacity: 1,
          transform: 'translateX(0%)'
        }),
        animate('1s', style({
          transform: 'translateX(100%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  state = 'end';
  constructor() { }

  ngOnInit(): void {
  }

}
