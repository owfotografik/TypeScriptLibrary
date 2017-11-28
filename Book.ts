

import IBook from "./IBook";
import { LibraryItemType } from "./LibraryItemType";

class Book implements IBook {
    id: number;
    name: string;
    description: string;
    available: boolean;
    author: string;
    itemType: LibraryItemType;

    constructor(id: number, name: string, description: string, author: string, itemType: LibraryItemType) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.author = author;
        this.itemType = itemType;
    }
}