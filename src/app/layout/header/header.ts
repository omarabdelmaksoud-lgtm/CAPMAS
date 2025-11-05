import { Component, inject } from '@angular/core';
import { LanguageSwitcher } from '../../shared/components/language-switcher/language-switcher';
import { TestTranslation } from '../../shared/components/test-translation/test-translation';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService } from '../../core/services/translation-service';

@Component({
  selector: 'app-header',
 imports: [
    LanguageSwitcher,
    TestTranslation,
    TranslatePipe,
    TranslateDirective,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
 private translation = inject(TranslationService);

  switch(lang: string) {
    this.translation.useLanguage(lang);
  }
}
