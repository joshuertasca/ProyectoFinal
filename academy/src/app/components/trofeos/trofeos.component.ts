import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trofeos',
  templateUrl: './trofeos.component.html',
  styleUrls: ['./trofeos.component.css']
})
export class TrofeosComponent implements OnInit {

  niveles:any=["nivel 1","nivel 2","nivel 3","nivel 4","nivel 5","nivel 6","nivel 7","nivel 8","nivel 9","nivel 10","nivel 11","nivel 12","nivel 13","nivel 14","nivel 15"]

  constructor() { }

  ngOnInit(): void {
  }

}
