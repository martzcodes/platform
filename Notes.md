I'm going to generate the new app into a subfolder and compare the two using diffs

`rm package.json yarn.lock package-lock.json angular.json`

`npx @angular/cli@6.0.0-rc.2 new generated --skip-install --skip-git`

At this point I had Node.js v8.1.2... apparently cli v 6 requires Node.js 8.9+...

So... update to node 9...

Re-run the npx command

Re-add the removed files