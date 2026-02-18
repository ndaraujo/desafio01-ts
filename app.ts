import { CompanyAccount } from './class/CompanyAccount'
import { NewAccountType } from './class/NewAccountType'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(1000)
console.log(peopleAccount.getBalance())
peopleAccount.withdraw(500)
console.log(peopleAccount.getBalance())

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.getLoan(10000)
console.log(companyAccount.getBalance())

const newAccountType: NewAccountType = new NewAccountType('Fernando', 11)
console.log(newAccountType)
newAccountType.deposit(100)
console.log(newAccountType.getBalance())

