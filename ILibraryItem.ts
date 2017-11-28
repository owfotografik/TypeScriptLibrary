
import { LibraryItemType } from "./LibraryItemType";

export default interface ILibrary {
    id: number, name: string, description: string, available: boolean, itemType: LibraryItemType;
}
