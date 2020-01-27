import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {environment} from '../../../../environments/environment';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

export function configureTranslation(translate: TranslateService) {
  translate.addLangs(environment.languages);
  translate.setDefaultLang(environment.defaultLanguage);

  const browserLang = translate.getBrowserLang();
  translate.use(browserLang.match('/' + environment.languages.join('|') + '/') ? browserLang : environment.defaultLanguage);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule
  ]
})
export class AppTranslateModule { }
