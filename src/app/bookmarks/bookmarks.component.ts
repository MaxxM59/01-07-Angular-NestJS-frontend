import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';
import { map, Observable } from 'rxjs';
import { Bookmark, BookmarksGQL } from 'src/generated-types';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks.component.html',
    styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent implements OnInit {
    bookmarks$!: Observable<Bookmark[]>;
    constructor(
        private readonly dialog: MatDialog,
        private readonly bookmarksGql: BookmarksGQL,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        this.bookmarks$ = this.bookmarksGql
            .watch()
            .valueChanges.pipe(map((result) => result.data.bookmarks));
    }
    // Open a dialog to create a new bookmark
    onFabClick() {
        this.dialog.open(CreateBookmarkComponent);
    }
    onBookmarkClick(bookmardId: string) {
        this.router.navigate(['/bookmarks', bookmardId]);
    }
}
