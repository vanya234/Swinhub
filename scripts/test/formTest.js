const assert = require("chai").assert;
const expect = require("chai").expect;
const form = require("../form");

// Test variables
var id = form.idTest(" 123456789 ");
var name = form.nameTest("kenji");
var pwd = form.pwdTest("Qwerty12");

// Test modules
describe("Form Test", function() {

    describe("Student ID Test", function() {

        it("Is not empty", function() {
            assert.isNotEmpty(id);
        });

        it("Has only numbers", function() {
            expect(id).to.match(/^[0-9]+$/);  // id must not contain character other than digits
        });

        it("Must be 9 characters", function() {
            expect(id.length).to.be.equal(9);
        });

    });

    describe("Name Test", function() {

        it("Is not empty", function() {
            assert.isNotEmpty(name);
        });

        it("Has no characters other than alphabets", function() {
            expect(name).to.match(/^[a-zA-Z]+$/);
        });

        it("Should have between 4 and 10 alphabets", function() {
            assert.isAtLeast(name.length, 4);
            assert.isAtMost(name.length, 10);
        });

    });

    describe ("Password Test", function() {

        it("Is not empty", function() {
            assert.isNotEmpty(pwd);
        });

        it("Has no characters other than alphabets", function() {
            expect(pwd).to.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/);
            // https://www.w3resource.com/javascript/form/password-validation.php
        });

        it("Should have between 8 and 20 characters", function() {
            assert.isAtLeast(pwd.length, 8);
            assert.isAtMost(pwd.length, 20);
        });

    });

});