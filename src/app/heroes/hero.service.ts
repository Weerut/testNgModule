import { Injectable } from '@angular/core';


export class Hero {
    constructor(public id: number, public name: string) { }
}

import { HEROES } from './mock-heroes';

let heroesPromise = Promise.resolve(HEROES);


@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]> { return heroesPromise; }

    getHero(id: number | string) {
        return heroesPromise
            .then(heroes => heroes.find(hero => hero.id === +id));
    }
}
