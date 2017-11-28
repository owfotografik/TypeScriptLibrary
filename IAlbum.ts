
import ILibrary from "./ILibraryItem";
import { LibraryItemType } from "./LibraryItemType";

export default interface IAlbum extends ILibrary {
    artist: string, itemType: LibraryItemType;
}