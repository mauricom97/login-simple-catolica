const users = require("../../database/users.json")

module.exports = async (req, res) => {
    try {
        const requestData = extractData(req)
        await analyseData(requestData)
        const token = await getUser(requestData)
        return res.send({token: token})
    } catch (error) {
        console.log(error.message)
        return res.send(error.message)
    }
}

function extractData(request) {
    const { username, password } = request.body
    return { username, password }
}

async function analyseData(request) {
    if(!request.username || !request.password)
        throw Error('Data not found')
}

async function getUser(request) {
    let token = null
    for(let user of users.users) {
        if(user.username == request.username && user.password == request.password) {
            token = user.token
        }
    }
    if(token){
        return token
    }else{
        throw Error('User not exist')
    }
}