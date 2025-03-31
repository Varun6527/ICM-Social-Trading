export class ProviderMetricUIModal {
    monthlyFeesArr?: any[] = [];
    followers?: number;
    followerGrowth?: number;
    closedProfit?: string;
    closedProfitClass?: string;
    currencyType: string;

    constructor(proMetObj: any) {
        this.closedProfitClass = this.getClosedProfitCssClass(proMetObj);
        this.monthlyFeesArr = this.getFeesMonthArr(proMetObj.feesHistory, proMetObj.currency);
        this.followers = proMetObj.followers;
        this.followerGrowth = proMetObj.followersGrowth;
        this.closedProfit = new ConvertValueToCurrency(proMetObj.closedPnL, proMetObj.currency, false).getConvertedValue(); 
        this.currencyType = proMetObj.currency;
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

export class ProviderDashboardUIModal {
    activeCount?: any;
    inActiveCount? : any;
    popularProvidersArr?: any[] = [];
    profitableProvidersArr?: any[] = [];
    currentMonthPerformanceFee?: string = "";
    previousMonthPerformanceFee?: string = "";
    currencyType: string = "USD";

    constructor(proDashObj: any) {
        this.activeCount = proDashObj.activeCount;
        this.inActiveCount = proDashObj.inActiveCount;
        this.popularProvidersArr = proDashObj.popularProviders;
        this.profitableProvidersArr = this.getProfitableProvidersArr(proDashObj.profitableProviders, this.currencyType);
        this.currentMonthPerformanceFee = new ConvertValueToCurrency(proDashObj.thisMonthPerformanceFee, this.currencyType, false).getConvertedValue();
        this.previousMonthPerformanceFee = new ConvertValueToCurrency(proDashObj.previousMonthPerformanceFee, this.currencyType, false).getConvertedValue();
    }

    getProfitableProvidersArr(arr: any, currency: any) {
        let array: any = [];
        arr.forEach((obj: any) => {
            const value = new ConvertValueToCurrency(obj.value, currency, false).getConvertedValue();
            array.push({value: value, name: obj.name});
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
    currencyType: any;
    constructor(folObj: any) {
        this.tradeProfitClass = this.getTradeProfitCssClass(folObj);
        this.monthlyTradeArr = this.getMonthTradeProfitArr(folObj.profitHistory, folObj.currency);
        this.tradeProfit = new ConvertValueToCurrency(folObj.totalProfit, folObj.currency, false).getConvertedValue(); 
        this.copiedPos = folObj.copiedPositions;
        this.paidFees = new ConvertValueToCurrency(folObj.paidFees, folObj.currency, false).getConvertedValue();
        this.currencyType = folObj.currency; 
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
        this.providerFees = proDetailObj.fees;
        this.followers = proDetailObj.followers;
        this.followersGrowth = proDetailObj.followersGrowth;
        this.closedProfit = proDetailObj.closedPnL;
        this.registerTime = proDetailObj.registerTime;
        this.visibility = proDetailObj.visibility;
    }
}

export class ProviderTableUIModal {
    nickName: string = "";
    providerId: any;
    state: string = "";
    tradingAccount: any;
    externalName: string = "";
    strategyMode: string = "";
    equity: string = "";
    registerTime: string = "";

    constructor(proTabObj: any) {
        this.nickName = proTabObj.nickname;
        this.providerId = proTabObj.id;
        this.state = proTabObj.state;
        this.tradingAccount = proTabObj.externalAccount;
        this.externalName = proTabObj.externalName;
        this.strategyMode = proTabObj.strategy.mode == "OutOnly" ? "Out only" : "All";
        this.equity = new ConvertValueToCurrency(proTabObj.equity, proTabObj.currency, false).getConvertedValue();
        this.registerTime = this.transformDate(proTabObj.registerTime);
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
        this.balance = tradeObj.balance;
        this.equity = tradeObj.equity;
        this.connectTime = tradeObj.connectTime;
        this.tradingAccName = tradeObj.externalName;
        this.state = tradeObj.state;
        this.tradeGroupType = tradeObj.externalGroupType;
        this.tradeType = tradeObj.platformType;
        this.currency = tradeObj.currency;
        this.credit = tradeObj.credit;
        this.floatingPoint = tradeObj.floating;
        this.avialableInMetaTrade = tradeObj.externalVisibility == 'Visible' ? 'Available' : 'Not Available';
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
            obj.account = transactObj.counterpartyExternalAccount;
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
        this.tradingProfit = followDetailObj.totalProfit;
        this.copiedPosition = followDetailObj.copiedPositions;
        this.paidFees = followDetailObj.paidFees
        this.registerTime = followDetailObj.registerTime;
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

export class OfferDetailsUIModel {
    offerTitle: string = "";
    visibility: string = "";
    subscriptionCount: string = "";
    joinLinksCount: string = "";
    offerId: any;
    offerState: string = "";
    constructor(offerObj: any) {
        this.offerTitle = offerObj.name;
        this.offerId = offerObj.id;
        this.offerState = offerObj.state;
        this.visibility = offerObj.visibility;
        this.subscriptionCount = `Count: ${offerObj.followers.count}`;
        this.joinLinksCount = `Count: ${offerObj.registration.links.length}`;
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
            return new Intl.NumberFormat('en-IN', { style: 'currency', currency: this.currency ? this.currency : 'USD' }).format(this.val);
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

export class SubscriptionUiModal {
    subscriptionId: any; 
    state: string = "";
    isActivated: boolean = false;
    volume: string = "";
    offerTitle: string = "";
    offerId: any;
    externalName: string = "";
    tradingAccountNo: any;
    equity: string = "";
    registerTime: string = "";
    providerId: any;
    constructor(obj: any, offerData: any) {
        this.providerId = obj.providerId;
        this.subscriptionId = obj.id;
        this.state = obj.state;
        this.isActivated = obj.isActivated;
        this.volume = obj.strategy.type;
        this.offerTitle = offerData.filter((o: any) => o.offerId == obj.offerId)[0]?.offerTitle;
        this.offerId = obj.offerId;
        this.externalName = obj.externalName;
        this.tradingAccountNo = obj.externalAccount;
        this.equity = new ConvertValueToCurrency(obj.equity, obj.currency, false).getConvertedValue();
        this.registerTime = this.transformDate(obj.registerTime);
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

export class PositionUiModal {
    position: any;
    positionId: any;
    state: string = "";
    status: string = "";
    symbol: string = "";
    openTime: string = "";
    volume: any;
    openDirection: string = "";
    profit: string = "";
    closeTime: string = "";
    providerId: any;
    copyPosition: any;
    subscriptionId: any;

    constructor(obj: any) {
        this.position = obj.position;
        this.providerId = obj.providerId;
        this.positionId = obj.id;
        this.state = obj.state;
        this.status = obj.status;
        this.symbol = obj.symbol;
        this.openTime = this.transformDate(obj.openTime);
        this.volume = obj.openVolume;
        this.openDirection = obj.openDirection;
        this.profit =  new ConvertValueToCurrency(obj.profit, 'USD', false).getConvertedValue();
        this.closeTime = this.transformDate(obj.closeTime);
        this.copyPosition = obj.copyPosition;
        this.subscriptionId = obj.subscriptionId;
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

export class DealsUiModal {
    dealKey: string = "";
    id: any;
    state: string = "";
    entry: string = "";
    position: any;
    symbol: string = "";
    volume: any;
    direction: string = "";
    price: any;
    time: string = "";
    entryType: string = "";
    providerId: any;
    status: string = "";
    positionId: any;
    subscriptionId: any;
    profit: any;
    error: any;
    attempts: any;
    copyDealKey: any;
    type: any;
    constructor(obj: any) {
        this.dealKey = obj.dealKey;
        this.id = obj.id;
        this.state = obj.state;
        this.entry = obj.entry;
        this.position = obj.position;
        this.symbol = obj.symbol;
        this.volume = obj.volume;
        this.direction = obj.direction;
        this.price = new ConvertValueToCurrency(obj.price, 'USD', false).getConvertedValue();
        this.time = this.transformDate(obj.time);
        this.entryType = obj.entryType;
        this.providerId = obj.providerId;
        this.status = obj.status;
        this.positionId = obj.positionId;
        this.subscriptionId = obj.subscriptionId;
        this.profit = obj.profit;
        this.error = obj.error;
        this.attempts = obj.attempts;
        this.copyDealKey = obj.copyDealKey;
        this.type = obj.type;
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

export class TradingResultUiModal {
    resultId: any;
    state: string = "";
    offerTitle: string = "";
    offerId: any;
    startTime: string = "";
    endTime: string = "";
    amount: string = "";
    subscriptionId: any;
    providerId: any;

    constructor(obj: any, offerData: any) {
        this.subscriptionId = obj.subscriptionId;
        this.resultId = obj.id;
        this.state = obj.state;
        this.offerTitle = offerData.name;
        this.offerId = offerData.id;
        this.providerId = offerData.providerId;
        this.startTime = this.transformDate(obj.startTime);
        this.endTime = this.transformDate(obj.endTime);
        this.amount = new ConvertValueToCurrency(obj.amount, obj.currency, false).getConvertedValue();;
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

export class ProfitsUiModal {
    id: any;
    finalProfit: string;
    origin: any;
    positionId: any;
    position: any;
    processTime: any;

    constructor(obj: any) {
        this.id = obj.id;
        this.finalProfit = new ConvertValueToCurrency(obj.finalProfit, obj.currency, false).getConvertedValue();
        this.origin = obj.origin;
        this.positionId = obj.positionId;
        this.position = obj.uniqueId;
        this.processTime = this.transformDate(obj.updatedUtc);
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

export class RatingUiModal {
    widgetId: any;
    accountId: any;
    avatarPath: string;
    accountName: string;
    countryFlagUrl: string;
    isWatchListed: boolean;
    returnMonth: any;
    historyGraph: any = {value: [], valueInPercent: []};
    extension: any = {};
    winRatio: any;
    maxDrawdown: any;
    account: any;

    constructor(obj: any, fileServer: string, ratingServer: string, watchListArr: any) {
       this.widgetId = obj.widgetId;
       this.accountId = obj.accountId;
       this.avatarPath = this.prepareRatingAvatarPath(obj.public.avatarPath, fileServer);
       this.accountName = obj.accountName;
       this.countryFlagUrl = `${ratingServer}/widgets/${obj.account.countryCode}.svg`;
       this.isWatchListed = watchListArr.includes(this.accountId);
       this.returnMonth = obj.returnMonth;
       this.historyGraph.value = obj.history.entries.length > 0 ? obj.history.entries.map((o: any) => o.rt) : [0, 0];
       this.historyGraph.valueInPercent = obj.history.entries.length > 0 ? obj.history.entries.map((o: any) => `${o.rt} %`) : ["0%", "0%"];
       this.extension = obj.extension;
       this.extension.performanceFee = this.extension.performanceFee == "-" ? 0 : this.extension.performanceFee;
       this.winRatio = obj.winRatio;
       this.maxDrawdown = obj.maxDrawdown;
       this.account = obj.account;
    }

    prepareRatingAvatarPath(path: string, fileServer: string) {
      if(path) {
        const part = path.split("/files/")[1]; 
        const result = `${fileServer}/files/${part}`;
        return result;
      } else {
        return "../../../../assets/icons/default-user-profile.png";
      }
    }
}
