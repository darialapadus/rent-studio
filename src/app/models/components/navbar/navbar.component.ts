import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showSearch = false;
  showSearchGlobal = false;
  searchQuery: string = '';
  showDateRangePicker: boolean = false;
  showSelections: boolean = false;
  numAdults: number = 1; // Valoarea selectată inițial pentru adulți
  adultsOptions: number[] = Array.from({ length: 30 }, (_, i) => i + 1);
  numChildren: number = 0; // Valoarea selectată inițial pentru copii
  childrenOptions: number[] = Array.from({ length: 31 }, (_, i) => i); // Generarea opțiunilor pentru copii de la 0 la 30
  numRooms: number = 1; // Valoarea selectată inițial pentru camere
  roomsOptions: number[] = Array.from({ length: 30 }, (_, i) => i + 1); // Generarea opțiunilor pentru camere de la 1 l
  constructor() { }

  ngOnInit(): void {
  }

}
