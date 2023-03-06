import type {Person} from './types'

export class User implements Person{
	constructor(public username: string, public email: string){}
	logout () {
		console.log(`${this.username} is logged out`)
	}
}

export function userHelper  () {
	console.log('userHelper')
}
