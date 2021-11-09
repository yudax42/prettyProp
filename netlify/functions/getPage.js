const axios = require('axios')
require('dotenv').config()
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.secret}`

exports.handler = async function (event, context) {
  try {
    console.log(event.body)
    let { pageId } = JSON.parse(event.body)

    // const res = await axios.post(`https://api.notion.com/v1/pages/${pageId}`)
    const res = await axios({
      url: `https://api.notion.com/v1/pages/${pageId}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.secret}`,
        'Notion-Version': '2021-08-16',
      },
    })
    return {
      statusCode: 200,
      body: JSON.stringify({
        post: res.data,
      }),
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      body: JSON.stringify({
        err: err,
      }),
    }
  }
}
