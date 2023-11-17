export class Main {
    greet(name){

        if(this.isNullUnedinedOrEmpty(name)){
            return 'Hello, my friend.';
        }

         if(name==='JERRY'){
            return 'HELLO, ' + name + '!';
        }

     return 'Hello, ' + name + '.';
    }

    isNullUnedinedOrEmpty(name){
        return name === null || name===undefined || name === ''
    }
}