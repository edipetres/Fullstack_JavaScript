const {expect} = require('chai');

describe("Testing async behaviour", function () {
    var foo = false;
    before(function (done) {
        setTimeout(function () {
            foo = true;
            done();
        }, 1000);
    });

    it("Should pass (with done called)", function () {
        expect(foo).to.equal(true);
    });

});

