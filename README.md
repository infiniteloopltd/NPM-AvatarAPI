# NPM-AvatarAPI
This is an NPM package for the AvatarAPI.com API - an API that can return a name and profile picture from an email address

It has three functions, getProviders, getCredit, and search

## getProviders
This returns an array of providers available to be searched
```
const avatarapi = require('avatarapi');
avatarapi.getProviders().then(providers => 
{
 for(const providerIndex in providers)
 {
	 var provider = providers[providerIndex];
	 console.log(provider.Name);
 }
}
);
```

## getCredit
This returns the amount of credit in your AvatarAPI.com account
```
const avatarapi = require('avatarapi');
avatarapi.getCredit("YOUR_USERNAME","YOUR_PASSWORD").then(credit => 
{
 console.log(credit.credits);
});
```

## search
This returns the name and profile picture url from an email address
```
const avatarapi = require('avatarapi');
avatarapi.search("YOUR_USERNAME","YOUR_PASSWORD","Coco_crocodile@outlook.com").then(result => 
{
 console.log(result);
});
```
