I'm going to generate the new app into a subfolder and compare the two using diffs

`rm package.json yarn.lock package-lock.json angular.json`

`npx @angular/cli@6.0.0-rc.2 new generated --skip-install --skip-git`

At this point I had Node.js v8.1.2... apparently cli v 6 requires Node.js 8.9+...

So... update to node 9...

Re-run the npx command

Re-add the removed files

Basically everything is different in package.json...

Ended up renaming the original package.json / package-lock / yarn lock angular.json to make sure they don't conflict accidentally.

Remove things that aren't relevent (e.g. build)

Go through src...

`polyfill.ts`: All the polyfills are turned on except weak-map. add hammerjs

`styles.css`: Some styles are added

`main.ts`: Adds polyfill import, removes bootstrap catch log.

`index.html`: material icons font added

`test.ts`: Several changes but it still uses karma, so maybe this should be removed since the example app uses Jest?

`tsconfig.app.json`: Lots of changes... extends `tsconfig.json`, excludes node_modules, adds in the ngrx stuff. Etc

`tsconfig.spec.json`: Seems to be configured for jasmine, not jest

`app.component.*`: removed

`app.module.ts`: Lots of changes (review later)

Lots of files added: `db.ts`, `index.ts` (for `app.module.ts`), routes (need to re-generate with routing), auth guard (ng g guard)

Also need to install all the ngrx stuff / schematics

```
ng new generated -p=bc --routing -it -is --skip-install --skip-git
cd generated
yarn add @angular/material @angular/cdk
yarn add @ngrx/{store,effects,entity,store-devtools}
yarn add @ngrx/schematics
ng set defaults.schematics.collection=@ngrx/schematics
```

Possible commands:

```
ng g module auth
ng g module books
ng g module core
ng g guard auth/auth -m auth/auth.module.ts
ng g c auth/components/login-form
ng g effect auth/effects/auth
ng g reducer auth/reducers/auth
ng g reducer auth/reducers/login-page
ng g s auth/services/auth-guard
ng g action books/actions/book
ng g c books/components/book-authors
ng g c books/components/book-detail
ng g c books/components/book-preview
ng g c books/components/book-preview-list
ng g c books/components/book-search
ng g c books/containers/collection-page
ng g c books/containers/find-book-page
ng g c books/containers/selected-book-page
ng g c books/containers/view-book-page
ng g effect books/effects/book
ng g guard books/guards/book-exists
ng g reducer books/reducers/books
ng g reducer books/reducers/search
ng g action core/actions/layout
ng g c core/components/layout
ng g c core/components/nav-item
ng g c core/components/sidenav
ng g c core/components/toolbar
ng g c core/containers/app
ng g c core/containers/not-found-page
ng g reducer core/reducers/layout
ng g s core/services/google-books
ng g m material
ng g model auth/components/user # model not at generator
ng g model books/models/book
ng g collection books/actions/collection # no collection
ng g collection books/effects/collection
ng g collection books/reducers/collection
```

`rm -rf generated/src && mkdir generated/src && cp -r example-app/* generated/src/`