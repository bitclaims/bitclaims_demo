### Instructions
* Run `sudo npm install node-cron`
* Run `sudo npm install sails -g`
* Run `sudo sails lift` within bitclaims_demo folder
* Go to local browser and type in "http://localhost:1337/" to check if the program is running
* Check through the test endpoints below and open each screen on its own tab
  * http://localhost:1337/landingpage
  * http://localhost:1337/basicinfo
  * http://localhost:1337/provider-or-consumer
  * http://localhost:1337/results
  * http://localhost:1337/maps
  * http://localhost:1337/filters
  * http://localhost:1337/search
  * http://localhost:1337/acount
  * http://localhost:1337/familyselect
  * http://localhost:1337/login-patient
  * http://localhost:1337/forgot-pass
  * http://localhost:1337/patient-age
  * http://localhost:1337/patient-location
  * http://localhost:1337/family
  * http://localhost:1337/patient-coverage
  * http://localhost:1337/coverage-search
  * http://localhost:1337/patient-loading
* Press f12 to check mobile screen 


### Install
* Run `sudo npm install node-cron`

### Test

### Links

### Testing this

+ [Get started](https://sailsjs.com/get-started)
+ [Sails framework documentation](https://sailsjs.com/documentation)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)

## test endpoints

+ Create a new family member entity under the account number 5aff9079240eea467864fa74
http://localhost:1337/familymember/create?fullName=femi&age=4&accountHolder=5aff9079240eea467864fa74


+ Blueprint find family members based on a userID
http://localhost:1337/familymember/find?accountHolder=5aff9079240eea467864fa74


+  Whenever you create a new AJAX format
sails run rebuild-cloud-sdk
