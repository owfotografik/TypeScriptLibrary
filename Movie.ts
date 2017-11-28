
import IMovie from "./IMovie";
import { LibraryItemType } from "./LibraryItemType";

class Movie implements IMovie {
    id: number;
    name: string;
    description: string;
    available: boolean;
    director: string;
    itemType: LibraryItemType;

    constructor(id: number, name: string, description: string, director: string, itemType: LibraryItemType) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.director = director;
        this.itemType = itemType;
    }
}