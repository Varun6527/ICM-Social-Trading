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
                brief_Offers: '/api/brief/providers/:providerId/offers'
            },
            follower: {
                subscriptions_Metric: '/api/metrics/subscriptions',
                subscriptions_Details: '/api/metrics/subscriptions/details',
                create: '/api/subscriptions'
            },
            trading: {
                account_Details: '/api/accounts',
            }
        },
        transactionsHistory: {
            get: '/api/transactions'
        }
    };
    errorMessageObj: any = {
        AccountIsProvider: 'This account is used as a provider',
        ClientSameOne: 'The account and provider belong to the same client',
        ProviderDuplicated: 'Provider already exists in the system',
        AccountIsSubscriber: 'This account is used as a subscriber'
    }

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
}