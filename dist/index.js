"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
// 단일 사용자 정보 조회
axios_1.default.get("https://jsonplaceholder.typicode.com/users/1")
    .then(function (res) {
    console.log(res.data);
    printUser(res.data);
}).catch(function (e) {
    console.log("error : ", e);
});
// 전체 사용자 정보 조회
axios_1.default.get("https://jsonplaceholder.typicode.com/users")
    .then(function (res) {
    console.log(res.data);
    //printUser(res.data)
    res.data.forEach(printUser);
}).catch(function (e) {
    console.log("error : ", e);
});
function printUser(user) {
    console.log('user info');
    console.log(user.name);
    console.log(user.email);
    console.log(user.address.city);
    console.log(user.phone);
}
