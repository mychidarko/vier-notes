## this is Vier Notes..
It's a simple app I created to keep my notes

### setting up project
- clone this repo
- run `npm i` to install dependencies
- `cd vier-notes && npm start` or open `serve.bat` to start app on [localhost:8010] 
- configure your own backend or use the existing Vier API

### UI
Vier Notes uses the [element UI library](https://element.eleme.io/#/en-US) and it's components, additionally, scoped CSS has been added for each component

### backend
This app is wired to the [vier-api](https://vier-api.000webhostapp.com) and uses [axios](https://github.com/axios/axios) to send XMLHttpRequests to the Vier API.
All available routes for the vier-api are listed in apiRoutes.json.

### dependencies
- vue
- vue-router
- lodash
- marked
- axios 
- element-ui