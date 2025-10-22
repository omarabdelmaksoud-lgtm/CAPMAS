import { Component } from '@angular/core';
import { LanguageSwitcher } from '../../shared/components/language-switcher/language-switcher';
import { TestTranslation } from '../../shared/components/test-translation/test-translation';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

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

}
