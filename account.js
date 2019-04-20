'use strict'

let Account = {

    Balance:0,
    Withdrawal:0,
    Deposits:0,

    getSummary: function () {
        return (`This account has a balance of R ${this.Balance}. 
            There have been deposits totalling R ${this.Deposits} 
            and withdrawals totalling R ${this.Withdrawal}`)
    }
}

const cashDeposit = function (amount) {
    Account.Balance += amount
    Account.Deposits += amount
}

const cashWithdrawal = function(amount){
    Account.Balance -= amount
    Account.Withdrawal += amount
}


cashDeposit(300)
cashWithdrawal(100)
console.log(Account)


