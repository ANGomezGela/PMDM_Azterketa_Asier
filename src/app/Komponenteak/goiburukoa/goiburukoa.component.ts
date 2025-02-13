import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goiburukoa',
  templateUrl: './goiburukoa.component.html',
  standalone: false
})
export class GoiburukoaComponent  implements OnInit {

  @Input() titulo: string = '';

  constructor() { }

  ngOnInit() {}

}
