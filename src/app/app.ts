import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslationService } from '../../src/app/core/services/translation-service';
import { Header } from './layout/header/header';
import { LanguageSwitcher } from './shared/components/language-switcher/language-switcher';
import { TestTranslation } from './shared/components/test-translation/test-translation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestTranslation, LanguageSwitcher, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('CAPMAS-Census');
  translateService = inject(TranslationService);
}
