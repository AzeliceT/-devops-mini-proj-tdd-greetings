export class Main {
    greet(name){

        if(this.isNullUnedinedOrEmpty(name)){
            return 'Hello, my friend.';
        }

        if(this.lengthEqualsToTwo(name)) {
            return 'Hello, ' + name[0] + ' and ' + name[1] + '.'; 
        }

        if(Array.isArray(name) && name.length===3) { 
            return 'Hello, ' + name[0] + ', ' + name[1] + ' and ' + name[2] + '.'; 
        }
         
        if(this.upperCase(name)){
            return 'HELLO, ' + name + '!';
         }

     return 'Hello, ' + name + '.';
    }

    isNullUnedinedOrEmpty(name){
        return name === null || name===undefined || name === '';
    }

    upperCase(name){
        return name===name.toUpperCase();
     }

     lengthEqualsToTwo(name){
        return name.length===2;
     }
}