

import IAlbum from "./IAlbum";
import IBook from "./IBook";
import IMovie from "./IMovie";
import { LibraryItemType } from "./LibraryItemType";
import ILibrary from "./ILibraryItem";

class Library {

    albums: IAlbum[];
    books: IBook[];
    movies: IMovie[];

    constructor(item) {
        this.albums = [];
        this.books = [];
        this.movies = [];
    }

    addItem(item: IAlbum);
    addItem(item: IBook);
    addItem(item: IMovie);
    addItem(item: LibraryItemType);

    addItem(item) {
        if (item.type === LibraryItemType.book) {
            this.books.forEach(function (item) {
                this.books.push();
                console.log(`Adding ${item}`);
            });
        }

        else if (item.type === LibraryItemType.album) {
            this.albums.forEach(function (item) {
                this.albums.push();
                console.log(`Adding ${item}`);
            });
        }
        else if (item.type === LibraryItemType.movie) {
            this.movies.forEach(function (item) {
                this.albums.push();
                console.log(`Adding ${item}`);
            });
        }
    }

    checkout() {
        this.movies.forEach(function (item) {
            if (this.item === item.id) {
                item.available = false;
                return item;
            }
        });

        this.albums.forEach(function (item) {
            if (this.item.id === item.id) {
                item.available = false;
                return item;
            }
        });
        this.books.forEach(function (item) {
            if (this.item.id === item.id) {
                item.available = false;
                return item;
            }
        });
    }
    return(item) {
        this.movies.forEach(function (item) {
            if (this.item.id === item.id) {
                item.available = true;
            }
        });


        this.albums.forEach(function (item) {
            if (this.item.id === item.id) {
                item.available = true;
            }
        });
        this.books.forEach(function (item) {
            if (this.item.id === item.id) {
                item.available = true;
            }
        });

    }
}

listItems(item) {
    if (this.item.available === true) {
        if (this.item.type === LibraryItemType.album) {
            this.item.forEach(function (item) {
                console.log(item.id, item.name, item.description, item.artist)
            });
        }
        if (this.item.type === LibraryItemType.book) {
            this.item.forEach(function (item) {
                console.log(item.id, item.name, item.description, item.author)
            });
        }
        if (this.item.type === LibraryItemType.movie) {
            this.item.forEach(function (item) {
                console.log(item.id, item.name, item.description, item.director)
            });
        }

    }
}

}