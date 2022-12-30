import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ks-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navToggle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    this.navToggle = !this.navToggle;
  }

}
