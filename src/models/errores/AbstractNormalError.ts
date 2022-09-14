export abstract class AbstractNormalError extends Error {
    
    constructor(
        message : string,
        name : string,
        public childError? : unknown,
    ){
        super( message );
        this.name = name;
    }
    
}