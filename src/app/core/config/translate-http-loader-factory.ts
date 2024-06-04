import {IModuleTranslationOptions, ModuleTranslateLoader} from "@larscom/ngx-translate-module-loader";
import {HttpClient} from '@angular/common/http';


export function moduleHttpLoaderFactory(http: HttpClient) {
  const baseTranslateUrl = './assets/i18n';

  const options: IModuleTranslationOptions = {
    translateError: (error, path) => {
      console.error('Oops! an error occurred: ', {error, path});
    },
    modules: [
      // final url: ./assets/i18n/en.json
      {baseTranslateUrl},
      {baseTranslateUrl,moduleName:'home'},
      { baseTranslateUrl,moduleName: 'restaurant'},
    ]
  };

  return new ModuleTranslateLoader(http, options);
}
