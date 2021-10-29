# 8-bit Discourse

## Overview

Greetings, traveler, and welcome to 8-bit Discourse, a web app project built with a React frontend and Rails API backend as the final part of the curriculum for the Flatiron School.

### Features
- Authenticate users client-side with JWT using the [knock](https://github.com/nsarno/knock) and [jwt](https://github.com/jwt/ruby-jwt) gems
- Use [React](https://github.com/facebook/react) to handle changes to frontend via a virtual DOM
- Use [Redux](https://github.com/reduxjs/redux) in order to track changes to state in store
- Configure [Thunk middleware](https://github.com/reduxjs/redux-thunk) to fetch requests in action creators to resolve properly
- Incorporates [Rails API backend](https://guides.rubyonrails.org/v5.2/api_app.html) to handle retrieving data from database
- Design database schema and configure [ActiveRecord](https://guides.rubyonrails.org/v5.1/active_record_basics.html) associations
- Configure [bcrypt gem](https://github.com/bcrypt-ruby/bcrypt-ruby) for securing passwords

### Usage

The purposed of this site (and my eventual hope for it) is to encourage the adoption of animals from shelters instead of purchasing pets from breeders. With the overwhelming number of animals awaiting adoption, many are euthanized (if they are not held in no-kill shelters), something that will only happen with more frequency unless people seeking pets opt to adopt from these shelters instead of seeking out breeders.

## Ruby version

The Ruby version used is 2.6.3.

## Installation
<!-- TODO: create a script for this? -->
### Rails API
Starting in the root directory of the repo, install the required Gems:
```sh
$ bundle install
```

Create, migrate, and seed the local database:
```sh
$ rake db:create
$ rake db:migrate
$ rake db:seed
```

### React Frontend
To set up the React frontend, navigate to the frontend directory:
```sh
$ cd ./client
```

Install the required Node packages:
```sh
$ npm install
```

Update the CSS compiled from SASS:
```sh
$ npm run sass:update
```

Build the frontend bundle:
```sh
$ npm run build
```

## Development
When booting up the app, you should have two terminal windows open.

In the first, navigate to the `client` directory and initiate the job to watch changes to files in `styles/scss`:
```sh
$ cd ./client
$ npm run sass:watch
```

Then in the other tab, start both the backend and frontend servers with:
```sh
$ rake start
```
