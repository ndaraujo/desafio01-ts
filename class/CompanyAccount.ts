import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  private statusCompany: boolean = true

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valueLoan:number): void => {
    if(this.validateStatusLoan()){
      this.balance = this.balance + valueLoan
      console.log('Empréstimo efetuado com sucesso!')
    }
  }

  private validateStatusLoan = (): boolean => {
    if (this.statusCompany) {
      return this.statusCompany
    }

    throw new Error('Conta inválida')
  }
}
