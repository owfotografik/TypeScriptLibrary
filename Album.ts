
import IAlbum from "./IAlbum";
import { LibraryItemType } from "./LibraryItemType";

class Album implements IAlbum {
    id: number;
    name: string;
    description: string;
    available: boolean;
    artist: string;
    itemType: LibraryItemType;

    constructor(id: number, name: string, description: string, artist: string, itemType: LibraryItemType) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.artist = artist;
        this.itemType = itemType;
    }

}