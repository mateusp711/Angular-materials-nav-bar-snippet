import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular11App';
  isExpanded = false;
  element!: HTMLElement;
  isReport = false;
  languages: any[] = ['br', 'us'];
  language: string = 'pt-BR';
  languageEmit: string = '';

  @Output() languageChanged = new EventEmitter();

  sidebarItems: any[] = [
    {
      id: 1,
      icon: 'dashboard',
      label: 'Dashboard',
      link: 'dashboard',
      isActive: false,
      showOnReport: true,
      show: true,
    },
    {
      id: 2,
      icon: 'supervisor_account',
      label: 'Gerenciar membros',
      link: 'members',
      isActive: false,
      showOnReport: false,
      show: this.isReport,
    },
    {
      id: 3,
      icon: 'category',
      label: 'Gerenciar categorias',
      link: 'categories',
      isActive: false,
      showOnReport: false,
      show: this.isReport,
    },
    {
      id: 4,
      icon: 'compare_arrows',
      label: 'Gerenciar entradas / saídas',
      link: 'records',
      isActive: false,
      showOnReport: true,
      show: true,
    },
    {
      id: 5,
      icon: 'trending_up',
      label: 'Visualizar Fluxo de caixa',
      link: 'cash-flow',
      isActive: false,
      showOnReport: true,
      show: true,
    },
    {
      id: 6,
      icon: 'add_chart',
      label: 'Gerenciar Cenários',
      link: 'scenarios',
      isActive: false,
      showOnReport: false,
      show: this.isReport,
    },
    {
      id: 7,
      icon: 'cloud_upload',
      label: 'Importações',
      link: 'imports',
      isActive: false,
      showOnReport: false,
      show: this.isReport,
    },
  ];

  toggleActive(event: any) {
    event.preventDefault();
    if (this.element !== undefined) {
      // this.element.style.backgroundColor = '#67cdf2ce';
    }
    var target = event.currentTarget;
    // target.style.backgroundColor = '#67cdf2ce';
    this.element = target;
  }

  toggleButton() {
    if (
      document.getElementById('toggle-button')!.textContent ===
      'keyboard_arrow_right'
    ) {
      document.getElementById('toggle-button')!.textContent =
        'keyboard_arrow_left';
    } else if (
      document.getElementById('toggle-button')!.textContent ===
      'keyboard_arrow_left'
    ) {
      document.getElementById('toggle-button')!.textContent =
        'keyboard_arrow_right';
    }
  }

  private getIsReport() {
    const paths = window.location.pathname.split('/').slice(1);
    return paths.length > 1 && paths[1]?.length > 36;
  }

  constructor(public Router: Router) {}

  name!: string;
  email!: string;

  ngOnInit(): void {
    this.userInformation();
    this.showSideBarItems();
    this.setLanguage(this.language);
  }

  showSideBarItems() {
    return true;
  }

  logOut() {
    console.log('log out');
  }

  userInformation() {
    console.log('takes user information');
    this.name = 'Mateus Florindo';
    this.email = 'mateus@gmail.com';
    /*     this.auth.user.subscribe((user) => {
      this.name = user?.displayName!;
      this.email = user?.email!;
    }); */
  }

  redirectToSelected(route: string) {
    console.log('redirect to' + route);
    /*     const id = this.Router.url.split('/').slice(1)[1];
    if (route === 'companies') this.Router.navigate(['companies']);
    else
      this.Router.navigate(['companies', id, route], {
        queryParamsHandling: 'preserve',
      }); */
  }

  setLanguage(language: string) {
    console.log('set Language');
    /*     this.language = language;
    navigator.language.split('-')[0] === 'pt'
      ? (this.language = 'br')
      : (this.language = 'us'); */
  }

  emitLanguageChange() {
    console.log('language was changed');
    /*  this.language === 'br'
      ? (this.languageEmit = 'pt')
      : (this.languageEmit = 'en');
    this.languageChanged.emit(this.languageEmit); */
  }
  teste() {
    console.log(this.sidebarItems)
  }
}
