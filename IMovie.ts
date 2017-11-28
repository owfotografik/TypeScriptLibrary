import ILibrary from "./ILibraryItem";
import { LibraryItemType } from "./LibraryItemType";

export default interface IMovie extends ILibrary{
    director: string, itemType: LibraryItemType;
}