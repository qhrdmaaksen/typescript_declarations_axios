import axios from 'axios';
import { sample, add, PI } from './utils';
import { User as UserClass } from './Users';
// 단일 사용자 정보 조회
axios.get("https://jsonplaceholder.typicode.com/users/1")
    .then(function (res) {
    console.log(res.data);
    printUser(res.data);
}).catch(function (e) {
    console.log("error : ", e);
});
// 전체 사용자 정보 조회
axios.get("https://jsonplaceholder.typicode.com/users")
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
console.log('=========================module===================');
// src/utils.ts 에 있는 함수 가져오기
console.log(sample([1, 2, 3, 4, 5]));
console.log(add(1, 2));
console.log(PI);
console.log(UserClass);
