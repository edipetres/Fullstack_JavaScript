var dbfacade = require('../model/jokes')
var connection = require('../db/db')
var connection_string = "mongodb://localhost/test";
var expect = require('chai').expect;




describe("Server with API", function () {

    before(function (done) {
        connection.connect(connection_string, function (err, db) {
            if (err) {
                console.log(err)
            };
            done();
        });
    });

    it("should connect to database", function () {
        var db = connection.get();
        expect(db).to.not.equal(undefined);
    });

    it("should return a joke without error", function () {
        dbfacade.findJoke('58cff668ad6dbf60c14067ce', function (err, docs) {
            expect(err).to.equal(undefined);
            expect(docs.length).to.be.greaterThan(0);
        });
    });

});





