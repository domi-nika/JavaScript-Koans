
module("About Asserts (topics/about_asserts.js)");

test("ok", function() {
    ok(2>1 === true, 'what will satisfy the ok assertion?');
    ok(!false === true, 'what will satisfy the ok assertion?');
});

test("not ok", function() {
    ok(3>4 === false, 'what is a false value?');
    ok(3>4 === false, 'what is a false value?');
});

test("equal", function() {
    equal(2, 1 + 1, 'what will satisfy the equal assertion?');
});
