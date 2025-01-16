export class project {
    name: string; 
    properties: { key: string, value: string }[];
; 
    constructor(name: string, properties: { key: string, value: string }[] = []){
        this.name = name; 
        this.properties = properties; 
    }
    // returns the project languag
}