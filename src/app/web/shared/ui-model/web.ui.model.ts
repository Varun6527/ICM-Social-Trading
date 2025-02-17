export class ProviderMetricUIModal {
    monthlyFeesArr?: any[] = [];
    followers?: number;
    followerGrowth?: number;
    closedProfit?: string;
    closedProfitClass?: string;

    constructor(proMetObj: any) {
        this.closedProfitClass = this.getClosedProfitCssClass(proMetObj);
        this.monthlyFeesArr = this.getFeesMonthArr(proMetObj.feesHistory, proMetObj.currency);
        this.followers = proMetObj.followers;
        this.followerGrowth = proMetObj.followersGrowth;
        this.closedProfit = new ConvertValueToCurrency(proMetObj.closedPnL, proMetObj.currency, false).getConvertedValue(); 
    }

    getClosedProfitCssClass(proMetObj: any) {
        if(proMetObj.closedPnL > 0) {
            return 'green-color';
        } else if(proMetObj.closedPnL < 0) {
            return 'red-color';
        } else {
            return '';
        }
    }

    getFeesMonthArr(arr: any, currency: any) {
        let array: any = [];
        arr.forEach((obj: any) => {
            const fees = new ConvertValueToCurrency(obj.value, currency, true).getConvertedValue();
            array.push({feesValue: fees, month: obj.time});
        });
        return array;
    }
}

export class FollowerMetricUIModal {
    monthlyTradeArr?: any[] = [];
    tradeProfit?: string;
    copiedPos?: number;
    paidFees?: string;
    tradeProfitClass?: string;
    constructor(folObj: any) {
        this.tradeProfitClass = this.getTradeProfitCssClass(folObj);
        this.monthlyTradeArr = this.getMonthTradeProfitArr(folObj.profitHistory, folObj.currency);
        this.tradeProfit = new ConvertValueToCurrency(folObj.totalProfit, folObj.currency, false).getConvertedValue(); 
        this.copiedPos = folObj.copiedPositions;
        this.paidFees = new ConvertValueToCurrency(folObj.paidFees, folObj.currency, false).getConvertedValue(); 
    }

    getTradeProfitCssClass(folObj: any) {
        if(folObj.totalProfit > 0) {
            return 'green-color';
        } else if(folObj.totalProfit < 0) {
            return 'red-color';
        } else {
            return '';
        }
    }

    getMonthTradeProfitArr(arr: any, currency: any) {
        let array: any = [];
        arr.forEach((obj: any) => {
            const profit = new ConvertValueToCurrency(obj.value, currency, true).getConvertedValue();
            array.push({monthTradeProfit: profit, month: obj.time});
        });
        return array;
    }
}

export class ProviderDetailsUIModal {
    providerId: any;
    nickName: string = "";
    providerFees: string = "";
    followers: any;
    followersGrowth: any;
    registerTime: string = "";
    closedProfit: string = "";
    visibility: string = "";

    constructor(proDetailObj: any) {
        this.providerId = proDetailObj.providerId;
        this.nickName = proDetailObj.nickname;
        this.providerFees = new ConvertValueToCurrency(proDetailObj.fees, proDetailObj.currency, false).getConvertedValue();
        this.followers = proDetailObj.followers;
        this.followersGrowth = proDetailObj.followersGrowth;
        this.closedProfit = new ConvertValueToCurrency(proDetailObj.closedPnL, proDetailObj.currency, false).getConvertedValue();
        this.registerTime = this.transformDate(proDetailObj.registerTime);
        this.visibility = proDetailObj.visibility;
    }

    transformDate(value: string): string {
        return new Date(value).toLocaleString('en-US', { 
            year: '2-digit', 
            month: 'numeric', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: true 
          }).replace(',', '');
      }
}

export class TradingAccountUIModal {
    clientId: any;
    type: string = "";
    tradingAccName: string = "";
    tradingAccountNo: any;
    balance: string = "";
    equity: string = "";
    connectTime: string = "";
    state: string = "";
    tradeGroupType: string = "";
    tradeType: string = "";
    currency: string = "";
    credit: string = "";
    floatingPoint: string = "";
    avialableInMetaTrade: string = "";

    constructor(tradeObj: any) {
        this.clientId = tradeObj.clientId;
        this.type = tradeObj.type;
        this.tradingAccountNo = tradeObj.externalAccount;
        this.balance = new ConvertValueToCurrency(tradeObj.balance, tradeObj.currency, false).getConvertedValue();
        this.equity = new ConvertValueToCurrency(tradeObj.equity, tradeObj.currency, false).getConvertedValue();
        this.connectTime = this.transformDate(tradeObj.connectTime);
        this.tradingAccName = tradeObj.externalName;
        this.state = tradeObj.state;
        this.tradeGroupType = tradeObj.externalGroupType;
        this.tradeType = tradeObj.platformType;
        this.currency = tradeObj.currency;
        this.credit = new ConvertValueToCurrency(tradeObj.credit, tradeObj.currency, false).getConvertedValue();
        this.floatingPoint = new ConvertValueToCurrency(tradeObj.floating, tradeObj.currency, false).getConvertedValue();
        this.avialableInMetaTrade = tradeObj.externalVisibility == 'Visible' ? 'Available' : 'Not Available';
    }

    transformDate(value: string): string {
        return new Date(value).toLocaleString('en-US', { 
            year: '2-digit', 
            month: 'numeric', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: true 
          }).replace(',', '');
      }
}

export class TransactionHistoryUiModal {
    transactionObj: { id: any; state: string; reason: string; } = { id: null, state: '', reason: '' };
    externalAccount: string = "";
    platformId: any;
    transactionAmountObj: { amount: any; type: string; direction: string; } = { amount: null, type: '', direction: '' };
    processedAmountObj: { amount: any; type: string; direction: string; } = { amount: null, type: '', direction: '' };
    tradeResultId: string = "";
    senderObj: { reasonId:any; name: string; account: string; ownerType: string; providerId: any; subscriptionId: any; server: string; } = { reasonId: null, name: '', account: '', ownerType: '', providerId: null, subscriptionId: null, server: '' };
    reciepentObj: {name: string; id: any; account: string; server: string; ownerType:string; } = {name: '', id: null, account: '', server: '', ownerType: ''};
    processTime: string = "";
    
    constructor(transactObj: any, providerData: any) {
        this.transactionObj.id = transactObj.id;
        this.transactionObj.state = transactObj.state;
        this.transactionObj.reason = transactObj.reason == "PerformanceFee" ? transactObj.reason.replace("Fee", " fee") : transactObj.reason;
        
        this.externalAccount = transactObj.externalAccount;

        this.platformId = transactObj.platformId;

        this.transactionAmountObj.amount = new ConvertValueToCurrency(transactObj.amount, transactObj.currency, false).getConvertedValue();
        this.transactionAmountObj.type = transactObj.type;
        this.transactionAmountObj.direction = transactObj.direction;

        this.processedAmountObj.amount = new ConvertValueToCurrency(transactObj.processedAmount, transactObj.processedCurrency, false).getConvertedValue();
        this.processedAmountObj.type = transactObj.type;
        this.processedAmountObj.direction = transactObj.direction;

        this.tradeResultId = transactObj.reasonId;

        this.senderObj = this.senderObjDetais(transactObj);

        this.reciepentObj = this.recipentObjDetails(transactObj, providerData);
        
        this.processTime = this.transformDate(transactObj.processTime);
    }

    senderObjDetais(transactObj: any) {
        let obj = { reasonId: null, name: '', account: '', ownerType: '', providerId: null, subscriptionId: null, server: '' };
        if(transactObj.ownerType == "Provider") {
            obj.name = transactObj.counterpartyType;
            obj.account = transactObj.externalAccount;
            obj.providerId = transactObj.ownerId;
            obj.subscriptionId = transactObj.counterpartyId;
            obj.server = transactObj.refs.server.name;
        } else {
            obj.name = transactObj.ownerType;
            obj.account = transactObj.externalAccount;
            obj.providerId = transactObj.counterpartyId;
            obj.subscriptionId = transactObj.ownerId;
            obj.server = transactObj.refs.counterpartyServer.name;
        }
        obj.ownerType = transactObj.ownerType;
        obj.reasonId = transactObj.reasonId;
        return obj;
    }

    recipentObjDetails(transactObj: any, providerData: any) {
        let obj = {name: '', id: null, account: '', server: '', ownerType: ''};
        if(transactObj.ownerType == "Provider") {
            obj.name = providerData.nickname;
            obj.id = transactObj.ownerId;
            obj.account = transactObj.externalAccount;
            obj.server = transactObj.refs.server.name;
        } else {
            obj.name = providerData.nickname;
            obj.id = transactObj.counterpartyId;
            obj.account = transactObj.counterpartyExternalAccount;
            obj.server = transactObj.refs.counterpartyServer.name;
        }
        obj.ownerType = transactObj.ownerType;
        return obj;
    }

    transformDate(value: string): string {
        return new Date(value).toLocaleString('en-US', { 
            year: '2-digit', 
            month: 'numeric', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: true 
          }).replace(',', '');
      }
}

export class FollowerDetailsUIModal {
    followerId: any;
    providerName: string = "";
    tradingProfit: string = "";
    copiedPosition: any;
    paidFees: string = "";
    registerTime: any;

    constructor(followDetailObj: any) {
        this.followerId = followDetailObj.subscriptionId;
        this.providerName = followDetailObj.refs.provider.name;
        this.tradingProfit = new ConvertValueToCurrency(followDetailObj.totalProfit, followDetailObj.currency, false).getConvertedValue();
        this.copiedPosition = followDetailObj.copiedPositions;
        this.paidFees = new ConvertValueToCurrency(followDetailObj.paidFees, followDetailObj.currency, false).getConvertedValue();
        this.registerTime = this.transformDate(followDetailObj.registerTime);
    }

    transformDate(value: string): string {
        return new Date(value).toLocaleString('en-US', { 
            year: '2-digit', 
            month: 'numeric', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: true 
          }).replace(',', '');
      }
}

export class ProvidersEarningModal {
    providerId: any;
    nickName: string = "";
    amount: string = "";
    constructor(obj: any) {
        this.providerId = obj.providerId;
        this.nickName = obj.providerNickname;
        this.amount = new ConvertValueToCurrency(obj.amount, 'USD', false).getConvertedValue();
    }
}

export class ProvidersOffersModal {
    offerId: any;
    offerTitle: string = "";
    nickName: string = "";
    amount: string = "";
    constructor(obj: any) {
        this.offerId = obj.offerId;
        this.offerTitle = obj.offerName;
        this.nickName = obj.providerNickname;
        this.amount = new ConvertValueToCurrency(obj.amount, 'USD', false).getConvertedValue();
    }
}

export class FeesModal {
    followerId: any;
    providerFeesObj: any;
    amount: string = "";
    name: string = "Subscription";
    constructor(obj: any) {
        this.followerId = obj.subscriptionId;
        this.providerFeesObj = {
            performanceFee: new ConvertValueToCurrency(obj.totalPerformanceFee, 'USD', false).getConvertedValue(),
            managementFee: new ConvertValueToCurrency(obj.totalManagementFee, 'USD', false).getConvertedValue(),
            registrationFee: new ConvertValueToCurrency(obj.totalRegistrationFee, 'USD', false).getConvertedValue()
        }
        this.amount = new ConvertValueToCurrency(obj.totalAmount, 'USD', false).getConvertedValue();
    }
}

export class PublishPostionModal {
    providerId: any;
    nickName: string = "";
    count: string = "";
    constructor(obj: any) {
        this.providerId = obj.providerId;
        this.nickName = obj.nickname;
        this.count = obj.count;
    }
}

export class CopiedPostionModal {
    followerId: any;
    name: string = "Subscription";
    count: string = "";
    constructor(obj: any) {
        this.followerId = obj.subscriptionId;
        this.count = obj.count;
    }
}

export class ConvertValueToCurrency {
    tradingCurrency: any[] = [
        { currency: 'USD', sign: '$' },
        { currency: 'EUR', sign: '€' },
        { currency: 'JPY', sign: '¥' },
        { currency: 'GBP', sign: '£' },
        { currency: 'AUD', sign: 'A$' },
        { currency: 'CAD', sign: 'C$' },
        { currency: 'CHF', sign: 'CHF' },
        { currency: 'CNY', sign: '¥' },
        { currency: 'INR', sign: '₹' },
        { currency: 'BRL', sign: 'R$' }
      ];
      val: any;
      currency: any
      skipifZeroFound: boolean = false;

      constructor(val: any, currency: any, skipifZeroFound: any) {
        this.val = val;
        this.currency = currency;
        this.skipifZeroFound = skipifZeroFound;
      }

    getConvertedValue() {
        if (typeof Intl !== "undefined" && typeof Intl.NumberFormat === "function") {
            if(this.val == 0 && this.skipifZeroFound) return "";
            return new Intl.NumberFormat('en-IN', { style: 'currency', currency: this.currency }).format(this.val);
        } else {
            const currencySign = this.tradingCurrency.filter(obj => obj.currency == this.currency).map(o => o.sign);
            if (this.val < 0) {
                let posNum: any = Math.abs(this.val);
                return `-${currencySign}${parseFloat(posNum).toFixed(2)}`;
            } else if(this.val == 0 && this.skipifZeroFound) {
                return ``;
            } else {
                return `${currencySign}${parseFloat(this.val).toFixed(2)}`;
            }
        }
    }
}
