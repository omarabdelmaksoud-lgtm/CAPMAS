import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal('en');

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'de', 'ar']);
    this.translate.setFallbackLang('en');
    this.useLanguage('en');
  }

  useLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang.set(lang);
    console.log(`Language switched to: ${this.currentLang}`);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}
