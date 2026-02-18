import { DioAccount } from "./DioAccount";

export class NewAccountType extends DioAccount {
    
    deposit = (valueDeposit: number): void => {
        this.balance = this.balance + valueDeposit + 10
    }
}