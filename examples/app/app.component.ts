import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Router } from "@angular/router";
import { PipThemesService, Theme } from 'pip-webui2-themes';
import { TranslateService } from '@ngx-translate/core';
import { ExmapleListItem } from "./examples-list/shared/examples-list.model";

export const AppTranslations = {
  en: {
    'en': 'English',
    'ru': 'Русский',
    'EXAMPLES.SIMPLE_EDITING': 'Simple editing',
    'EXAMPLES.MOVE_MARKER': 'Change location',
    'EXAMPLES.IP_ADDRESS': 'Ip address',
    'EXAMPLES.SHOW_INPUT': 'Show input field',
    'EXAMPLES.DISABLED': 'Disable'
  },
  ru: {
    'en': 'English',
    'ru': 'Русский',
    'EXAMPLES.SIMPLE_EDITING': 'Простое редактирование',
    'EXAMPLES.MOVE_MARKER': 'Изменить местоположение',
    'EXAMPLES.IP_ADDRESS': 'Ip адрес',
    'EXAMPLES.SHOW_INPUT': 'Показать поле ввода',
    'EXAMPLES.DISABLED': 'Отключить'
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public themes: Theme[];
  public selectedTheme: Theme;
  public activeMediaQuery: boolean;
  public mode: string;
  public app: string = 'Locations';
  public url: string;
  public langs: string[] = [];
  public selectedLang: string = 'en';

  public list: any[] = [
    {
      name: 'Location', id: 'location', route: 'location'
    },
    {
      name: 'Location Ip', id: 'location_ip', route: 'location_ip'
    },
    {
      name: 'Location Edit', id: 'location_edit', route: 'location_edit'
    }
  ];
  public listIndex: number = 0;
  @ViewChild('sidenav') sidenav: MatSidenav;

  public constructor(
    private themeService: PipThemesService,
    private router: Router,
    public media: ObservableMedia,
    private translate: TranslateService
  ) {
    this.selectedTheme = this.themeService.selectedTheme;
    this.themes = this.themeService.themes;

    translate.setDefaultLang(this.selectedLang);
    translate.use(this.selectedLang);
    this.langs = translate.getLangs();
    this.translate.setTranslation('en', AppTranslations.en, true);
    this.translate.setTranslation('ru', AppTranslations.ru, true);

    media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change && change.mqAlias == 'xs' ? true : false;
      this.mode = change && change.mqAlias == 'xs' ? null : 'side';
    })

    router.events.subscribe((url: any) => {

      if (url.url && url.url != this.url) {
        this.url = url.url;
        this.listIndex = this.list.findIndex((item) => {
          return "/" + item.route == this.url;
        })
        this.listIndex = this.listIndex == -1 ? 0 : this.listIndex;
      }
    });

  }

  public ngOnInit() { }

  public ngAfterViewInit() { }

  public onListItemIndexChanged(index: number) {

    this.listIndex = index;
    this.sidenav.close();
  }

  public changeTheme(theme) {
    this.selectedTheme = theme;
    this.themeService.selectedTheme = this.selectedTheme;
  }

  public changeLanguage(lang) {
    this.selectedLang = lang;
    this.translate.use(lang);
  }

}
