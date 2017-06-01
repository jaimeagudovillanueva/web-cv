import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtroGrupo',
    pure: false
})
export class GrupoPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.grupos.indexOf(filter) !== -1);
    }
}