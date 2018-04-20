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