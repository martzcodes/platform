import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAuthorsComponent } from './components/book-authors/book-authors.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { BookPreviewListComponent } from './components/book-preview-list/book-preview-list.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { FindBookPageComponent } from './containers/find-book-page/find-book-page.component';
import { SelectedBookPageComponent } from './containers/selected-book-page/selected-book-page.component';
import { ViewBookPageComponent } from './containers/view-book-page/view-book-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookAuthorsComponent, BookDetailComponent, BookPreviewComponent, BookPreviewListComponent, BookSearchComponent, CollectionPageComponent, FindBookPageComponent, SelectedBookPageComponent, ViewBookPageComponent]
})
export class BooksModule { }
