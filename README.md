# SetLife

SetOceans's React app boiler plate repo

Libaries used: Express, React, Redux, React Router, Webpack

## Setup

1. Clone the repo `git clone https://github.com/brgarciarivas/setlife`

2. Move into the directory `cd setlife`

3. Install dependencies `npm install` 

## Directory Layout

Get familiar with the **setlife** folder structure

```
|-- /public/                        # Holds all compiled and static files such as fonts and images
	|-- /fonts/						# Avenir Font included
	|-- /images/					# Store all photos here
|-- /src/							# Application source code
	|-- /actions/					# Redux Actions 
	|-- /components/			    # React components
	|-- /constants/					# Any constant variable used throughout the app
	|-- /reducers/					# Redux Reducers
	|-- /scripts/					# Functions for API calls, data formatters, validators, etc
	|-- /styles/					# All .less stylesheets
```

# Usage

## Development

Development files are served from webpack-dev-server, configured with webpack.config.js, and hot-reloaded automatically.

to start webpack-dev-server run:

	npm run dev

this command will bundle up files for webpack-dev-sever and host them on: 

	http://localhost:8080

**_anything outside of the ~/src folder will not be hot-reloaded when changed_**

## Production	

In development, the bundle is created behind the scenes and is not production ready. The production-ready bundle is served from webpack using the configuration file ~/webpack.config.production.js. To create a production-ready bundle run: 

	npm run deploy

this command will bundle up files and export them to public folder:

	Setlife/public

## Testing your production bundle 

Testing the production bundle can be done by running an express server from server.js in the root directory. To start the server run:

	npm run start
	
or

	node server
	
This script will serve your app from the production bundle in the public folder. To access the app visit 

	http://localhost:3000

**_Make sure to terminate the server when finished testing_**

to terminate the express server run:

	npm run stop

## Using the CLI tools

- Run `npm install -g` to enable `setlife` CLI tools
- `setlife create-component <name>` creates a standard component in /src/components
- Add the option `--redux` or `-r` for Redux-enabled components with `mapStateToProps` and `mapDispatchToProps` functions connected to the component
- Add the option `--style` or `-s` to generate the corresponding stylesheet and add it to the index
---
- `setlife create-model <name>` creates a standard model in /api/models
- Add the option `--type` or `-t` to create the associated Bookshelf-GraphQL Type

