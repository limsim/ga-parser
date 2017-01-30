# ga-parser
A simple to tool to parse Google Universal Analytics URL collect parameters

## How to use ga-parser
### Prerequisites
* nodejs
* npm

### Using ga-parser
Start ga-parser by running these two commands from your commandline.
```
npm install
node index.js
```

Then browse to http://localhost:3000

Copy and paste the payload from your `/batch` request and submit the form and the data will be formated into a nice JSON object. At this point it would be really helpful to have a JSON formatter plugin installed on your browser.

##TO-DOs
Currently I'm only printing out the fields that I need but feel free to contribute to the project or fork the repo and include you own. This cheatsheet has been very useful for identifying what all the fields mean https://www.cheatography.com/dmpg-tom/cheat-sheets/google-universal-analytics-url-collect-parameters/
