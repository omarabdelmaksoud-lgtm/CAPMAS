import { Component, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcher {
     private translate = inject(TranslateService);
    currentLang = signal('en'); // Track current language
     switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang.set(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; // switch direction
  }

}
