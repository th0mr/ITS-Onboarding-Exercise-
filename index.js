import { getUserValues } from "./user-processing.js";

const user = {
    id : 5,
    username : "abc123",
    firstName : "bob",
    lastName : "smith",
    studentId : "012345678"
};

console.log(getUserValues(user));