"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var mohit = { name: "mohit", id: 222 };
mohit = { username: "admin", id: 23232 };
function getDbId(id) {
    // making some API Calls
    //   console.log(`DB id is ${id}`);
    if (typeof id === "string") {
        id.toUpperCase();
    }
    else {
        id + 2;
    }
}
getDbId(4);
getDbId("A");
