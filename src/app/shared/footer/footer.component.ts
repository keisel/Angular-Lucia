import { Component, OnInit } from '@angular/core';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
