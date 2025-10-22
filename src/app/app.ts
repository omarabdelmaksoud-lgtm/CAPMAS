import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import translationsEN from "../../public/i18n/en.json";
import { TestTranslation } from './shared/components/test-translation/test-translation';
import { LanguageSwitcher } from './shared/components/language-switcher/language-switcher';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TestTranslation,LanguageSwitcher,Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
   private translate = inject(TranslateService);
  protected readonly title = signal('CAPMAS-Census');
   constructor() {
        this.translate.setTranslation('en', translationsEN);
        this.translate.addLangs(['de', 'en']);
        this.translate.setFallbackLang('en');
        this.translate.use('en');
    }

    currentLang = signal('en'); // Track current language
    
    switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang.set(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; // switch direction
  }
}
