
import ILibrary from "./ILibraryItem";
import { LibraryItemType } from "./LibraryItemType";

export default interface IBook extends ILibrary{
    author: string, itemType: LibraryItemType;
}