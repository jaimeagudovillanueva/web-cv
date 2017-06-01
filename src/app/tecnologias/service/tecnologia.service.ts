import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Tecnologia} from '../tecnologia';

import 'rxjs/Rx';

@Injectable()
export class TecnologiaService {

    constructor(public http:Http) {}

    getData(): Observable<any[]> {
        return this.http.get("assets/data/tecnologias.json")
            .map(res => res.json().tecnologias);
    }
}