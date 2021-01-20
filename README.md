# justfindtune.com
Welcome to the findtune repository.  
This is a React project, whih provide you to post on a music social media.  
In order to demonstrate the differents features, we generate fake data in your local storage at the first connection.
## Available Features

All the data is store in the local storage. The functions write in userManager.js an dataManager.js provide us to plug our site to a future backend server.  

### Authentification 

You can create your own account, and login to your account and have acces to your profile page, which expose your  activity, and your personal data. 

### Post 

You can post a message, a music or a video to share it to your followers

### Bands 

You have acces at the list of registered bands.


## Deployment 

### Run our code 

You can run the code by cloning the repository, and run the following command 

```
npm i   
npm run dev

```
You can also build the code in a `/build` folder, by running this command : 

```
npm run build
```

### Pipeline deployment
We deploy the code on our domain [justfindtune](jusfindtune.com) at every merge on master. To do that, we use AWS services such as CodeDeploy, CodePipeline and S3 to host a static website for cheap. 
