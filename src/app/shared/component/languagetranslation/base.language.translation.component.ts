import { AuthService } from '../../../auth/service/auth.service';
import { ConstantVariable } from '../../../shared/model/constantVariable.model';
import { TranslateService } from '@ngx-translate/core';

export class BaseLanguageTranslationComponent {
    constantVaribale: ConstantVariable;
    languages: any = [];
    selectedLangObj: any = {};
    userConfig: any;
    constructor(private translate_base: TranslateService, private authService: AuthService) {
        this.constantVaribale = new ConstantVariable();
        this.userConfig = this.authService.userConfig;
        this.setDefaultLanguage();
    }

    setDefaultLanguage() {
        this.languages = this.constantVaribale.languageArr;
        this.languages = this.languages.filter((o: any) =>  this.userConfig.allowedLangs.includes(o.code));
        if(this.languages.length <= 0) return; //If none of the language is selected from admin
        let savedLangCode = localStorage.getItem('language') || 'en';
        savedLangCode = this.languages.some((o: any) => o.code == savedLangCode) ? savedLangCode : this.languages[0]?.code;
        this.selectedLangObj = this.languages.filter((o: any) => o.code == savedLangCode)[0] || this.languages[0];
        this.translate_base.setDefaultLang(this.selectedLangObj.name);
        this.translate_base.use(this.selectedLangObj.name);
    }

    selectLanguage(langObj: any) {
        this.selectedLangObj = langObj;
        this.selectedLangObj = this.languages.filter((o: any) => o.code == langObj.code)[0] || this.languages[0];
        this.translate_base.use(this.selectedLangObj.name);
        localStorage.setItem('language', langObj.code);
    }
}
