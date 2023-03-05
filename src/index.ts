import axios from 'axios';
import _ from 'lodash';
import {sample, add} from './utils'

interface User {
	id: number;
	name: string;
	username: string;
email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		}
	},
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	}
}
// 단일 사용자 정보 조회
axios.get<User>("https://jsonplaceholder.typicode.com/users/1")
		.then(res => {
			console.log(res.data)
			printUser(res.data)
		}).catch(e => {
	console.log("error : ", e)
})

// 전체 사용자 정보 조회
axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
		.then(res => {
			console.log(res.data)
			//printUser(res.data)
			res.data.forEach(printUser)
		}).catch(e => {
	console.log("error : ", e)
})
function printUser(user: User) {
	console.log('user info')
	console.log(user.name)
	console.log(user.email)
	console.log(user.address.city)
	console.log(user.phone)
}

console.log('=========================module===================')
// src/utils.ts 에 있는 함수 가져오기
console.log(sample([1,2,3,4,5]))
console.log(add(1,2))


