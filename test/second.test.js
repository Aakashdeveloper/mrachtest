let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect
chai.use(chaiHttp);

describe("Testing Api" ,() => {
    it("Should return 200 for users",(done) => {
        chai.request(`http://localhost:9700`)
        .get('/users')
        .then((res) => {
            expect(res).to.have.status(200);
            done()
        })
        .catch((err) => {
            throw err
        })
    })
    it("Should return 404 for user",(done) => {
        chai.request(`http://localhost:9700`)
        .get('/user')
        .then((res) => {
            expect(res).to.have.status(404);
            done()
        })
        .catch((err) => {
            throw err
        })
    })
    it("Testing adding User",(done) => {
        chai.request(`http://localhost:9700`)
        .get('/user')
        .then((res) => {
            expect(res).to.have.status(404);
            done()
        })
        .catch((err) => {
            throw err
        })
    })
    it("Should return 200 for add user",(done) => {
        chai.request(`http://localhost:9700`)
        .post('/addUser')
        .send({"name":"Test User","city":"Test City","isActive":true})
        .then((res) => {
            expect(res).to.have.status(200);
            done()
        })
        .catch((err) => {
            throw err
        })
    })
})

