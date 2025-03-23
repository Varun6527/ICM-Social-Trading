// src/app/web/shared/ui-model/web.ui.model.ts
var ProviderMetricUIModal = class {
  monthlyFeesArr = [];
  followers;
  followerGrowth;
  closedProfit;
  closedProfitClass;
  currencyType;
  constructor(proMetObj) {
    this.closedProfitClass = this.getClosedProfitCssClass(proMetObj);
    this.monthlyFeesArr = this.getFeesMonthArr(proMetObj.feesHistory, proMetObj.currency);
    this.followers = proMetObj.followers;
    this.followerGrowth = proMetObj.followersGrowth;
    this.closedProfit = new ConvertValueToCurrency(proMetObj.closedPnL, proMetObj.currency, false).getConvertedValue();
    this.currencyType = proMetObj.currency;
  }
  getClosedProfitCssClass(proMetObj) {
    if (proMetObj.closedPnL > 0) {
      return "green-color";
    } else if (proMetObj.closedPnL < 0) {
      return "red-color";
    } else {
      return "";
    }
  }
  getFeesMonthArr(arr, currency) {
    let array = [];
    arr.forEach((obj) => {
      const fees = new ConvertValueToCurrency(obj.value, currency, true).getConvertedValue();
      array.push({ feesValue: fees, month: obj.time });
    });
    return array;
  }
};
var ProviderDashboardUIModal = class {
  activeCount;
  inActiveCount;
  popularProvidersArr = [];
  profitableProvidersArr = [];
  currentMonthPerformanceFee = "";
  previousMonthPerformanceFee = "";
  currencyType = "USD";
  constructor(proDashObj) {
    this.activeCount = proDashObj.activeCount;
    this.inActiveCount = proDashObj.inActiveCount;
    this.popularProvidersArr = proDashObj.popularProviders;
    this.profitableProvidersArr = this.getProfitableProvidersArr(proDashObj.profitableProviders, this.currencyType);
    this.currentMonthPerformanceFee = new ConvertValueToCurrency(proDashObj.thisMonthPerformanceFee, this.currencyType, false).getConvertedValue();
    this.previousMonthPerformanceFee = new ConvertValueToCurrency(proDashObj.previousMonthPerformanceFee, this.currencyType, false).getConvertedValue();
  }
  getProfitableProvidersArr(arr, currency) {
    let array = [];
    arr.forEach((obj) => {
      const value = new ConvertValueToCurrency(obj.value, currency, false).getConvertedValue();
      array.push({ value, name: obj.name });
    });
    return array;
  }
};
var FollowerMetricUIModal = class {
  monthlyTradeArr = [];
  tradeProfit;
  copiedPos;
  paidFees;
  tradeProfitClass;
  currencyType;
  constructor(folObj) {
    this.tradeProfitClass = this.getTradeProfitCssClass(folObj);
    this.monthlyTradeArr = this.getMonthTradeProfitArr(folObj.profitHistory, folObj.currency);
    this.tradeProfit = new ConvertValueToCurrency(folObj.totalProfit, folObj.currency, false).getConvertedValue();
    this.copiedPos = folObj.copiedPositions;
    this.paidFees = new ConvertValueToCurrency(folObj.paidFees, folObj.currency, false).getConvertedValue();
    this.currencyType = folObj.currency;
  }
  getTradeProfitCssClass(folObj) {
    if (folObj.totalProfit > 0) {
      return "green-color";
    } else if (folObj.totalProfit < 0) {
      return "red-color";
    } else {
      return "";
    }
  }
  getMonthTradeProfitArr(arr, currency) {
    let array = [];
    arr.forEach((obj) => {
      const profit = new ConvertValueToCurrency(obj.value, currency, true).getConvertedValue();
      array.push({ monthTradeProfit: profit, month: obj.time });
    });
    return array;
  }
};
var ProviderDetailsUIModal = class {
  providerId;
  nickName = "";
  providerFees = "";
  followers;
  followersGrowth;
  registerTime = "";
  closedProfit = "";
  visibility = "";
  constructor(proDetailObj) {
    this.providerId = proDetailObj.providerId;
    this.nickName = proDetailObj.nickname;
    this.providerFees = new ConvertValueToCurrency(proDetailObj.fees, proDetailObj.currency, false).getConvertedValue();
    this.followers = proDetailObj.followers;
    this.followersGrowth = proDetailObj.followersGrowth;
    this.closedProfit = new ConvertValueToCurrency(proDetailObj.closedPnL, proDetailObj.currency, false).getConvertedValue();
    this.registerTime = this.transformDate(proDetailObj.registerTime);
    this.visibility = proDetailObj.visibility;
  }
  transformDate(value) {
    return new Date(value).toLocaleString("en-US", {
      year: "2-digit",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).replace(",", "");
  }
};
var ProviderTableUIModal = class {
  nickName = "";
  providerId;
  state = "";
  tradingAccount;
  externalName = "";
  strategyMode = "";
  equity = "";
  registerTime = "";
  constructor(proTabObj) {
    this.nickName = proTabObj.nickname;
    this.providerId = proTabObj.id;
    this.state = proTabObj.state;
    this.tradingAccount = proTabObj.externalAccount;
    this.externalName = proTabObj.externalName;
    this.strategyMode = proTabObj.strategy.mode == "OutOnly" ? "Out only" : "All";
    this.equity = new ConvertValueToCurrency(proTabObj.equity, proTabObj.currency, false).getConvertedValue();
    this.registerTime = this.transformDate(proTabObj.registerTime);
  }
  transformDate(value) {
    return new Date(value).toLocaleString("en-US", {
      year: "2-digit",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).replace(",", "");
  }
};
var TradingAccountUIModal = class {
  clientId;
  type = "";
  tradingAccName = "";
  tradingAccountNo;
  balance = "";
  equity = "";
  connectTime = "";
  state = "";
  tradeGroupType = "";
  tradeType = "";
  currency = "";
  credit = "";
  floatingPoint = "";
  avialableInMetaTrade = "";
  constructor(tradeObj) {
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
    this.avialableInMetaTrade = tradeObj.externalVisibility == "Visible" ? "Available" : "Not Available";
  }
  transformDate(value) {
    return new Date(value).toLocaleString("en-US", {
      year: "2-digit",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).replace(",", "");
  }
};
var TransactionHistoryUiModal = class {
  transactionObj = { id: null, state: "", reason: "" };
  externalAccount = "";
  platformId;
  transactionAmountObj = { amount: null, type: "", direction: "" };
  processedAmountObj = { amount: null, type: "", direction: "" };
  tradeResultId = "";
  senderObj = { reasonId: null, name: "", account: "", ownerType: "", providerId: null, subscriptionId: null, server: "" };
  reciepentObj = { name: "", id: null, account: "", server: "", ownerType: "" };
  processTime = "";
  constructor(transactObj, providerData) {
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
  senderObjDetais(transactObj) {
    let obj = { reasonId: null, name: "", account: "", ownerType: "", providerId: null, subscriptionId: null, server: "" };
    if (transactObj.ownerType == "Provider") {
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
  recipentObjDetails(transactObj, providerData) {
    let obj = { name: "", id: null, account: "", server: "", ownerType: "" };
    if (transactObj.ownerType == "Provider") {
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
  transformDate(value) {
    return new Date(value).toLocaleString("en-US", {
      year: "2-digit",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).replace(",", "");
  }
};
var FollowerDetailsUIModal = class {
  followerId;
  providerName = "";
  tradingProfit = "";
  copiedPosition;
  paidFees = "";
  registerTime;
  constructor(followDetailObj) {
    this.followerId = followDetailObj.subscriptionId;
    this.providerName = followDetailObj.refs.provider.name;
    this.tradingProfit = new ConvertValueToCurrency(followDetailObj.totalProfit, followDetailObj.currency, false).getConvertedValue();
    this.copiedPosition = followDetailObj.copiedPositions;
    this.paidFees = new ConvertValueToCurrency(followDetailObj.paidFees, followDetailObj.currency, false).getConvertedValue();
    this.registerTime = this.transformDate(followDetailObj.registerTime);
  }
  transformDate(value) {
    return new Date(value).toLocaleString("en-US", {
      year: "2-digit",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).replace(",", "");
  }
};
var ProvidersEarningModal = class {
  providerId;
  nickName = "";
  amount = "";
  constructor(obj) {
    this.providerId = obj.providerId;
    this.nickName = obj.providerNickname;
    this.amount = new ConvertValueToCurrency(obj.amount, "USD", false).getConvertedValue();
  }
};
var ProvidersOffersModal = class {
  offerId;
  offerTitle = "";
  nickName = "";
  amount = "";
  constructor(obj) {
    this.offerId = obj.offerId;
    this.offerTitle = obj.offerName;
    this.nickName = obj.providerNickname;
    this.amount = new ConvertValueToCurrency(obj.amount, "USD", false).getConvertedValue();
  }
};
var FeesModal = class {
  followerId;
  providerFeesObj;
  amount = "";
  name = "Subscription";
  constructor(obj) {
    this.followerId = obj.subscriptionId;
    this.providerFeesObj = {
      performanceFee: new ConvertValueToCurrency(obj.totalPerformanceFee, "USD", false).getConvertedValue(),
      managementFee: new ConvertValueToCurrency(obj.totalManagementFee, "USD", false).getConvertedValue(),
      registrationFee: new ConvertValueToCurrency(obj.totalRegistrationFee, "USD", false).getConvertedValue()
    };
    this.amount = new ConvertValueToCurrency(obj.totalAmount, "USD", false).getConvertedValue();
  }
};
var PublishPostionModal = class {
  providerId;
  nickName = "";
  count = "";
  constructor(obj) {
    this.providerId = obj.providerId;
    this.nickName = obj.nickname;
    this.count = obj.count;
  }
};
var CopiedPostionModal = class {
  followerId;
  name = "Subscription";
  count = "";
  constructor(obj) {
    this.followerId = obj.subscriptionId;
    this.count = obj.count;
  }
};
var OfferDetailsUIModel = class {
  offerTitle = "";
  visibility = "";
  subscriptionCount = "";
  joinLinksCount = "";
  offerId;
  offerState = "";
  constructor(offerObj) {
    this.offerTitle = offerObj.name;
    this.offerId = offerObj.id;
    this.offerState = offerObj.state;
    this.visibility = offerObj.visibility;
    this.subscriptionCount = `Count: ${offerObj.followers.count}`;
    this.joinLinksCount = `Count: ${offerObj.registration.links.length}`;
  }
};
var ConvertValueToCurrency = class {
  tradingCurrency = [
    { currency: "USD", sign: "$" },
    { currency: "EUR", sign: "\u20AC" },
    { currency: "JPY", sign: "\xA5" },
    { currency: "GBP", sign: "\xA3" },
    { currency: "AUD", sign: "A$" },
    { currency: "CAD", sign: "C$" },
    { currency: "CHF", sign: "CHF" },
    { currency: "CNY", sign: "\xA5" },
    { currency: "INR", sign: "\u20B9" },
    { currency: "BRL", sign: "R$" }
  ];
  val;
  currency;
  skipifZeroFound = false;
  constructor(val, currency, skipifZeroFound) {
    this.val = val;
    this.currency = currency;
    this.skipifZeroFound = skipifZeroFound;
  }
  getConvertedValue() {
    if (typeof Intl !== "undefined" && typeof Intl.NumberFormat === "function") {
      if (this.val == 0 && this.skipifZeroFound)
        return "";
      return new Intl.NumberFormat("en-IN", { style: "currency", currency: this.currency ? this.currency : "USD" }).format(this.val);
    } else {
      const currencySign = this.tradingCurrency.filter((obj) => obj.currency == this.currency).map((o) => o.sign);
      if (this.val < 0) {
        let posNum = Math.abs(this.val);
        return `-${currencySign}${parseFloat(posNum).toFixed(2)}`;
      } else if (this.val == 0 && this.skipifZeroFound) {
        return ``;
      } else {
        return `${currencySign}${parseFloat(this.val).toFixed(2)}`;
      }
    }
  }
};
var SubscriptionUiModal = class {
  subscriptionId;
  state = "";
  isActivated = false;
  volume = "";
  offerTitle = "";
  offerId;
  externalName = "";
  tradingAccountNo;
  equity = "";
  registerTime = "";
  providerId;
  constructor(obj, offerData) {
    this.providerId = obj.providerId;
    this.subscriptionId = obj.id;
    this.state = obj.state;
    this.isActivated = obj.isActivated;
    this.volume = obj.strategy.type;
    this.offerTitle = offerData.filter((o) => o.offerId == obj.offerId)[0]?.offerTitle;
    this.offerId = obj.offerId;
    this.externalName = obj.externalName;
    this.tradingAccountNo = obj.externalAccount;
    this.equity = new ConvertValueToCurrency(obj.equity, obj.currency, false).getConvertedValue();
    this.registerTime = this.transformDate(obj.registerTime);
  }
  transformDate(value) {
    return new Date(value).toLocaleString("en-US", {
      year: "2-digit",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).replace(",", "");
  }
};
var PositionUiModal = class {
  position;
  positionId;
  state = "";
  status = "";
  symbol = "";
  openTime = "";
  volume;
  openDirection = "";
  profit = "";
  closeTime = "";
  providerId;
  copyPosition;
  subscriptionId;
  constructor(obj) {
    this.position = obj.position;
    this.providerId = obj.providerId;
    this.positionId = obj.id;
    this.state = obj.state;
    this.status = obj.status;
    this.symbol = obj.symbol;
    this.openTime = this.transformDate(obj.openTime);
    this.volume = obj.openVolume;
    this.openDirection = obj.openDirection;
    this.profit = new ConvertValueToCurrency(obj.profit, "USD", false).getConvertedValue();
    this.closeTime = this.transformDate(obj.closeTime);
    this.copyPosition = obj.copyPosition;
    this.subscriptionId = obj.subscriptionId;
  }
  transformDate(value) {
    return new Date(value).toLocaleString("en-US", {
      year: "2-digit",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).replace(",", "");
  }
};
var DealsUiModal = class {
  dealKey = "";
  id;
  state = "";
  entry = "";
  position;
  symbol = "";
  volume;
  direction = "";
  price;
  time = "";
  entryType = "";
  providerId;
  status = "";
  positionId;
  subscriptionId;
  profit;
  error;
  attempts;
  copyDealKey;
  type;
  constructor(obj) {
    this.dealKey = obj.dealKey;
    this.id = obj.id;
    this.state = obj.state;
    this.entry = obj.entry;
    this.position = obj.position;
    this.symbol = obj.symbol;
    this.volume = obj.volume;
    this.direction = obj.direction;
    this.price = new ConvertValueToCurrency(obj.price, "USD", false).getConvertedValue();
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
  transformDate(value) {
    return new Date(value).toLocaleString("en-US", {
      year: "2-digit",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).replace(",", "");
  }
};
var TradingResultUiModal = class {
  resultId;
  state = "";
  offerTitle = "";
  offerId;
  startTime = "";
  endTime = "";
  amount = "";
  subscriptionId;
  providerId;
  constructor(obj, offerData) {
    this.subscriptionId = obj.subscriptionId;
    this.resultId = obj.id;
    this.state = obj.state;
    this.offerTitle = offerData.name;
    this.offerId = offerData.id;
    this.providerId = offerData.providerId;
    this.startTime = this.transformDate(obj.startTime);
    this.endTime = this.transformDate(obj.endTime);
    this.amount = new ConvertValueToCurrency(obj.amount, obj.currency, false).getConvertedValue();
    ;
  }
  transformDate(value) {
    return new Date(value).toLocaleString("en-US", {
      year: "2-digit",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).replace(",", "");
  }
};
var ProfitsUiModal = class {
  id;
  finalProfit;
  origin;
  positionId;
  position;
  processTime;
  constructor(obj) {
    this.id = obj.id;
    this.finalProfit = new ConvertValueToCurrency(obj.finalProfit, obj.currency, false).getConvertedValue();
    this.origin = obj.origin;
    this.positionId = obj.positionId;
    this.position = obj.uniqueId;
    this.processTime = this.transformDate(obj.updatedUtc);
  }
  transformDate(value) {
    return new Date(value).toLocaleString("en-US", {
      year: "2-digit",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).replace(",", "");
  }
};

export {
  ProviderMetricUIModal,
  ProviderDashboardUIModal,
  FollowerMetricUIModal,
  ProviderDetailsUIModal,
  ProviderTableUIModal,
  TradingAccountUIModal,
  TransactionHistoryUiModal,
  FollowerDetailsUIModal,
  ProvidersEarningModal,
  ProvidersOffersModal,
  FeesModal,
  PublishPostionModal,
  CopiedPostionModal,
  OfferDetailsUIModel,
  SubscriptionUiModal,
  PositionUiModal,
  DealsUiModal,
  TradingResultUiModal,
  ProfitsUiModal
};
//# sourceMappingURL=chunk-H2VRCKB7.js.map
