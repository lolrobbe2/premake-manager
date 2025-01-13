export class project {
    name: string; 
    properties: { [key: string]: string }; 
    constructor(name: string, properties: { [key: string]: string } = {}){
        this.name = name; 
        this.properties = properties; 
    }
    // returns the project languag
    get language():string {return this.properties['language']; }
}