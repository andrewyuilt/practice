"use strict";

function first(){
    //Do something
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function done() {
    console.log(`Я прошел данный урок`);
}

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS(`JavaScript`, done);

learnJS(`JavaScript`, function() {
    console.log(`Я прошел этот урок`);
});