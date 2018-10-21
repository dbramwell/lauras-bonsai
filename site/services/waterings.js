var AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient()

exports.getWaterings = async function(event, context, callback) {

  const error = () => {
    callback(null, {
      statusCode: 418,
      body: JSON.stringify({
        message: 'you must specify at least a year to search by'
      })
    })
  }

  if (!event["queryStringParameters"]) {
    return error()
  }

  var params = {
    TableName: process.env.WATERINGS_TABLE,
    KeyConditionExpression: "#key = :value",
    ExpressionAttributeNames:{
        "#key": "year"
    },
    ExpressionAttributeValues: {
        ":value": 1985
    }
  }

  const year = event["queryStringParameters"].year
  const month = event["queryStringParameters"].month

  if (year) {
    if (month) {
      params.IndexName = 'monthYearGlobalIndex'
      params.ExpressionAttributeNames['#key'] = 'monthYear'
      params.ExpressionAttributeValues[':value'] = month + ' ' + year 
    } else {
      params.IndexName = 'yearGlobalIndex'
      params.ExpressionAttributeNames['#key'] = 'year'
      params.ExpressionAttributeValues[':value'] = year 
    }
  } else {
    return error()
  }

  const results = await db.query(params).promise()
  console.log(results)
  callback(null, {statusCode: 200, body: JSON.stringify(results)})
}