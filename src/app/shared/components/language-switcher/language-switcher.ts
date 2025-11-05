import { Component, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../../core/services/translation-service';

@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcher {
      translation = inject(TranslationService);
     currentLang = this.translation.currentLang();
     constructor() {
      console.log(this.currentLang);
     }

  switch(lang: string) {
    this.translation.useLanguage(lang);
  }
  

}
