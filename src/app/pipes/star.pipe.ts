import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(ch:string) {
    
    var t = ['A', 'O', 'I', 'E', 'Y', 'U', 'a', 'o', 'i', 'e', 'y', 'u'];
    var res = '';

    for (var i = 0; i < ch.length; i++) {
        var test = false;
        for (var j = 0; j < t.length; j++) {
            if (ch[i] == t[j]) {
                res =res+'*';
                test = true;
                break;
            }
        }
        if (test==false) {
            res =res+ ch[i];
        }
    }

    return res;
  }

}
