export class ConstantVariable {
    languageArr: any = [];
    http_Api_Url: any = {
        commonUser: {
            get_User_Details: '/api/portal/user'
        },
        loginPage: {
            get_Token_URL: '/api/oauth2/token'
        },
        webLayoutPage: {
            get_User_Profile_details: '/api/profile'
        },
        webHomePage:{
            provider: {
                metric: '/api/metrics/providers',
                details: '/api/metrics/providers/details',
                create: '/api/providers',
                brief: '/api/brief/providers',
                brief_Offers: '/api/brief/providers/:providerId/offers',
                providers_View: '/api/dashboards/providers/user-view'
            },
            follower: {
                subscriptions_Metric: '/api/metrics/subscriptions',
                subscriptions_Details: '/api/metrics/subscriptions/details',
                create: '/api/subscriptions'
            },
            trading: {
                account_Details: '/api/accounts',
            },
            sideNav: {
                clientDetails: '/api/profile/client'
            }
        },
        transactionsHistory: {
            get: '/api/transactions'
        },
        reports: {
            provider: '/api/reports/provider-earnings',
            offers: '/api/reports/offer-earnings',
            recieved_Fees: '/api/reports/payments?type=ReceivedFees',
            published: '/api/reports/publishing',
            paid_Fees: '/api/reports/payments?type=PaidFees',
            copied_Position: '/api/reports/copying'
        },
        offers: {
          offers_details: '/api/providers/:providerId/offers'
        },
        provider_profile: {
          subscriptions: "/api/providers/:providerId/subscriptions",
          position: "/api/providers/:providerId/positions",
          deals: "/api/providers/:providerId/deals"
        }
    };
    errorMessageObj: any = {
        AccountIsProvider: 'This account is used as a provider',
        ClientSameOne: 'The account and provider belong to the same client',
        ProviderDuplicated: 'Provider already exists in the system',
        AccountIsSubscriber: 'This account is used as a subscriber'
    }
    providerLabelArr: any = [
        { key: "Registered", value: "Registered" },
        { key: "Archived", value: "Archived" },
        { key: "FollowerSubscribed", value: "Follower subscribed" },
        { key: "FollowerUnsubscribed", value: "Follower unsubscribed" }
    ]
    followerLabelArr: any = [
        { key: "Registered", value: "Registered" },
        { key: "Activated", value: "Activated" },
        { key: "Suspended", value: "Suspended" },
        { key: "Archived", value: "Archived" },
        { key: "ManagementFeePaid", value: "Management fee paid" },
        { key: "ManagementFeeDeclined", value: "Management fee declined" },
        { key: "RiskManagementRuleReached", value: "Risk actions performed" },
        { key: "ProviderProfileChanged", value: "Provider profile changed" },
        { key: "OfferProfileChanged", value: "Offer profile changed" }
    ]
    
    providerAvatarPath: string = "/files/avatars/";

    homePageMonthlyChartConfig: any = {
        series: [
          {
            name: 'Fees',
            data: [] // Sample counts for each category
          }
        ],
        chart: {
          type: "area",
          height: '100%',
          width: '100%',
          padding: 0,
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          curve: "smooth",
          width: 3,
        },
        colors: ['#146BB2'],
        xaxis: {
          labels: {
            show: true, // Hide x-axis labels
          },
          axisTicks: {
            show: false // Hide x-axis ticks
          },
          axisBorder: {
            show: false // Hide x-axis border line
          },
          categories: [] // Sample month labels
        },
        yaxis: {
          labels: {
            show: false, // Hide y-axis labels
            // offsetY: 190 
          },
          axisBorder: {
            show: false // Hide y-axis border line
          },
          axisTicks: {
            show: false // Hide y-axis ticks
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.5,
            gradientToColors: ['#ECFDF3'],
            inverseColors: false,
            opacityFrom: 0.85,
            opacityTo: 0.35,
            stops: [0, 100]
          }
        },
        grid: {
          show: false, // Hide background grid lines
          padding: {
            left: 0,
            right: 0,
            top:0,
            bottom: 0
          }
        },
        tooltip: {
          enabled: true,
          y: {}
        },
        responsive: [
          {
            breakpoint: 600,
            options: {
              chart: {
                height: 120
              },
              stroke: {
                width: 2
              },
              grid: {
                padding: {
                  left: 0,
                  right: 0,
                  top:0,
                  bottom: 0
                }
              }
            }
          },
          {
            breakpoint: 768,
            options: {
              chart: {
                height: 130
              },
              grid: {
                padding: {
                  left: 0,
                  right: 0,
                  top:0,
                  bottom: 0
                }
              }
            }
          }
        ]
    };

    constructor() {
        this.setLanguageArr();
    }

    setLanguageArr() {
        this.languageArr = [
            { code: 'en', name: 'English', displayLabel: 'English', icon: 'GB.png' },
            { code: 'ar', name: 'Arabic', displayLabel: 'عربى', icon: 'UAE.png' },
            { code: 'ms', name: 'Malay', displayLabel: 'Melayu', icon: 'MALAY.png' },
            { code: 'es', name: 'Spanish', displayLabel: 'Español', icon: 'SPANISH.png' },
            { code: 'pt-br', name: 'Portuguese', displayLabel: 'Português', icon: 'PORTUGUESE.png' },
            { code: 'ru', name: 'Russian', displayLabel: 'Русский', icon: 'Russian.png' },
            { code: 'zh-cn', name: 'Chinese', displayLabel: '中文 (中国)', icon: 'Chinese.png' },
            { code: 'zh-tw', name: 'Chinese (TW)', displayLabel: '中文 (中国)', icon: 'Chinese(TW).png' },
            { code: 'vi', name: 'Vietnamese', displayLabel: 'Tiếng Việt', icon: 'Vietnamese.png' },
            { code: 'fa', name: 'Persian', displayLabel: 'فارسی', icon: 'Persian.png' },
            { code: 'ja', name: 'Japanese', displayLabel: '日本語', icon: 'Japanese.png' },
            { code: 'tr', name: 'Turkish', displayLabel: 'Türk', icon: 'Turkish.png' },
            { code: 'th', name: 'Thai', displayLabel: 'ไทย', icon: 'Thai.png' },
            { code: 'ko', name: 'Korean', displayLabel: '한국어', icon: 'Korean.png' },
            { code: 'it', name: 'Italian', displayLabel: 'Italiano', icon: 'Italian.png' },
            { code: 'hi', name: 'Hindi', displayLabel: 'हिन्दी', icon: 'Hindi.png' },
            { code: 'pl', name: 'Polish', displayLabel: 'Polski', icon: 'Polish.png' },
            { code: 'id', name: 'Indonesia', displayLabel: 'Indonesia', icon: 'Indonesia.png' },
            { code: 'de', name: 'German', displayLabel: 'Deutsch', icon: 'German.png' }
        ];
    }

    getHomePageChartConfig(valuesArr: number[], labelsArr: string[], currencyType: string, chartName: string) {
      if(valuesArr.length == 1) valuesArr.push(...valuesArr);
      if(labelsArr.length == 1) labelsArr.push(...labelsArr);
      this.homePageMonthlyChartConfig.series[0].data = valuesArr;
      this.homePageMonthlyChartConfig.series[0].name = chartName;
      this.homePageMonthlyChartConfig.xaxis.categories  = labelsArr;
      this.homePageMonthlyChartConfig.tooltip.y.formatter = function (val: number) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: currencyType
        }).format(val);
      }
      return this.homePageMonthlyChartConfig;
    }
}