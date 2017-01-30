var express = require('express')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

var html = '<div class="field required">' +
    '<form action="/" method="post">' + 
    '<label for="id_gabatch">Gabatch</label>' +
    '<textarea name="gabatch" cols="40" rows="5"></textarea>' +
    '<input type="submit" value="Submit">' + 
    '</form>' +
    '</div>'

app.get('/', function (req, res) {
    res.send(html)
})

app.post('/', function(req, res) {
    var gaevents = req.body.gabatch
    var processedGaEvents = processGAEvents(gaevents)
    // console.log(gaevents)
    res.send(processedGaEvents)
})

function processGAEvents(originalGaEvents) {
    var result = []
    var splitEvents = originalGaEvents.split('\n').forEach(function(gaRow) {
        var dataSetRow = {}
        gaRow.split('&').forEach(function(gaDataSet) {
            var arr = gaDataSet.split('=')

            switch (arr[0]) {
                case 'cd':
                    arr[1] && (dataSetRow['Screen Name'] = arr[1]);
                    break
                case 't':
                    arr[1] && (dataSetRow['Hit Type'] = arr[1]);
                    break
                case 'ea':
                    arr[1] && (dataSetRow['Event Action'] = arr[1]);
                    break
                case 'ec':
                    arr[1] && (dataSetRow['Event Cateory'] = arr[1]);
                    break
                case '_s':
                    arr[1] && (dataSetRow['Hit Sequence'] = arr[1]);
                    break
                case 'ht':
                    // console.log(new Date(parseInt(arr[1])))
                    arr[1] && (dataSetRow['Hit Time'] = new Date(parseInt(arr[1])));
                    break
                default: 
                    // arr[1] && (dataSetRow[arr[0]] = arr[1]);
            }
        })
        result.push(dataSetRow)
    })
    return result
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})