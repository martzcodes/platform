import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAuthorsComponent } from './components/book-authors.component';
import { BookDetailComponent } from './components/book-detail.component';
import { BookPreviewComponent } from './components/book-preview.component';
import { BookPreviewListComponent } from './components/book-preview-list.component';
import { BookSearchComponent } from './components/book-search.component';
import { CollectionPageComponent } from './containers/collection-page.component';
import { FindBookPageComponent } from './containers/find-book-page.component';
import { SelectedBookPageComponent } from './containers/selected-book-page.component';
import { ViewBookPageComponent } from './containers/view-book-page.component';
import { BookExistsGuard } from './guards/book-exists.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookAuthorsComponent, BookDetailComponent, BookPreviewComponent, BookPreviewListComponent, BookSearchComponent, CollectionPageComponent, FindBookPageComponent, SelectedBookPageComponent, ViewBookPageComponent],
  providers: [BookExistsGuard]
})
export class BooksModule { }
