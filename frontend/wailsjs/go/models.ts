export namespace models {
	
	export class Book {
	    author: string;
	    title: string;
	    content: string;
	
	    static createFrom(source: any = {}) {
	        return new Book(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.author = source["author"];
	        this.title = source["title"];
	        this.content = source["content"];
	    }
	}

}

