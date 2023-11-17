export class Main {
    greet(name){

        if(this.isNullUnedinedOrEmpty(name)){
            return 'Hello, my friend.';
        }

        if(this.upperCase(name)){
            return 'HELLO, ' + name + '!';
         }

     return 'Hello, ' + name + '.';
    }

    isNullUnedinedOrEmpty(name){
        return name === null || name===undefined || name === ''
    }

    upperCase(name){
        return name===name.toUpperCase();
     }
}