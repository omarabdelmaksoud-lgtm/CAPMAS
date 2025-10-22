import { Component } from '@angular/core';
import { LanguageSwitcher } from '../../shared/components/language-switcher/language-switcher';
import { TestTranslation } from '../../shared/components/test-translation/test-translation';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    LanguageSwitcher,
    TestTranslation,
    TranslatePipe,
    TranslateDirective,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
