import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-test-translation',
 imports: [TranslatePipe, TranslateDirective],
  templateUrl: './test-translation.html',
  styleUrl: './test-translation.scss'
})
export class TestTranslation {

}
