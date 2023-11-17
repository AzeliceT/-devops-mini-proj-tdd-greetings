export class Main {
    greet(name){

        if(name === null || name===undefined || name === ''){
            return 'Hello, my friend.';
         }

     return 'Hello, ' + name + '.';
    }
 }