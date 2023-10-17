export namespace books {
	
	export class Book {
	    id?: string;
	    author: string;
	    title: string;
	    content: string;
	
	    static createFrom(source: any = {}) {
	        return new Book(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.author = source["author"];
	        this.title = source["title"];
	        this.content = source["content"];
	    }
	}

}

export namespace user {
	
	export class UserConfig {
	    firstLaunch: boolean;
	    folder: string;
	
	    static createFrom(source: any = {}) {
	        return new UserConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.firstLaunch = source["firstLaunch"];
	        this.folder = source["folder"];
	    }
	}

}

