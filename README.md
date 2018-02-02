# bug

[Sails](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/documentation)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/studio)


### This Repo is to demonstrate a sails bug

## Bug Description:
Cannot decrypt a record that was created using the `findOrCreate` method, `create` method decrypts fine.

## Recreation steps:
- Lift app
- create a record with the user/signup1 endpoint (uses `create` method)
- create a record with the user/signup2 endpoint (uses `findOrCreate` method)
- visit the user/show endpoint and note how 1 record is decrypting the password entered correctly and one is not
