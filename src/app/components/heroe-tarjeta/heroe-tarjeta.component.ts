import { Component, OnInit, Input } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() idx:number;
  constructor(private router:Router,
              private _heroesService:HeroesService ) { }

  ngOnInit() {
  }

  verHeroe(heroe) {
    let idx = this._heroesService.getHeroeIndex(heroe);
    this.router.navigate( ['/heroe', idx] );
  }

  /* verHeroe() {
    this.router.navigate( ['/heroe', this.idx] );
  } */

}
