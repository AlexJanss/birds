import { Component, OnInit } from '@angular/core';
import { Bird } from '../bird';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {
  bird: Bird = {
    id: 1,
    name: 'Magpie'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
