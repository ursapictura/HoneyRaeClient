# Honey Rae Client
This repo is the starting code for the Honey Rae's API explorer chapter in the NSS .NET curriculum. 

## Setup
1. Use this template to create a new repo in your own account, and clone the new repo locally. 
1. Run `npm install` to get all of the project dependencies.
1. This client assumes that the .NET API is running locally on port `5001` for HTTPS. It is likely that your own API is using a different port. To edit your app's port, change the https profile in `Properties/launchSettings.json` to use 5001 for the https url, and 5000 for the http url.
1. This app's server is also acting as a proxy server for the Web API, and assumes that all API routes begin with `/api`, as in DeShawn's. You will need to add that to the beginning of the routes of all of the endpoints in your API.  
1. Then run `npm run dev` to start the application.  