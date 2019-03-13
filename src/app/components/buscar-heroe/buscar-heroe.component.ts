import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})
export class BuscarHeroeComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string

  constructor(private _heroesService:HeroesService,
              private activatedRoute: ActivatedRoute,
              private router:Router
              ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log("Heroes encontrados", this.heroes);
    });
  }

  verHeroe(heroe:Heroe) {
    let index = this._heroesService.getHeroeIndex(heroe);
    this.router.navigate( ['/heroe', index] );
  }




}
