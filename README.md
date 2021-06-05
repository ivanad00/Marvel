# Marvel searching app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Instructions

In App.js public_key needs to be replaced with public key from the [Marvel API](https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0)

Hash was created using [generator](https://www.md5hashgenerator.com/) . Input value is string created by merging : timestamp + private_key + public_key 

timestamp ts = new Date().getTime()


## Deployment 

<img alt="Netlify" src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"/> [Click here](https://marvel-searching-app.netlify.app/)

### Installing the app

Clone this repository

```
git clone https://github.com/ivanad00/Marvel.git
```

Position in the current working directory

```
cd Marvel
```

Installing dependencies

```
npm install
```

Starting the app

```
npm start
```

Open http://localhost:3000 to view it in the browser.


## Features

- search is run and displayed while the user is interacting with the search input

- search result items can be bookmarked by the user

- bookmarks are saved in local storage and displayed when search input is empty

- responsive design
