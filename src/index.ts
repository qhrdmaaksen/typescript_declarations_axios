import axios from 'axios';
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

axios.get<User>("https://jsonplaceholder.typicode.com/users/1")
		.then(res => {
			console.log(res.data)
		}).catch(e => {
	console.log("error : ", e)
})