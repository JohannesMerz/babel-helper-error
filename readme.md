# with lerna

## preparations

- install lerna globally

```
yarn global add lerna
```

## setup

```
lerna bootstrap
# breaks as babel helpers are undefined
lerna run test

```


to "fix" it (not really suitable):

```
lerna bootstrap
cp -r packages/es6-package packages/app/es6-package
# now that the package is no longer linked it finds all the correct stuff
lerna run test
```

Following concepts don't work either:

- move all libs into a shared node_modules folder in the root of the repository
