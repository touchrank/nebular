import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { NgdVersionService } from '../../services';

@Component({
  selector: 'ngd-header',
  styleUrls: ['./header.component.scss'],
  template: `
    <button *ngIf="sidebarTag" class="sidebar-toggle" (click)="toggleSidebar()">
      <i class="nb-menu"></i>
    </button>
    <div class="logo">
      <a routerLink="/">Nebular</a>
      <span class="version">v{{ currentVersion }}</span>
    </div>
    <nb-menu [items]="mainMenu"></nb-menu>
    <iframe class="stars"
            src="https://ghbtns.com/github-btn.html?user=akveo&repo=nebular&type=star&count=true"
            frameborder="0"
            scrolling="0">
    </iframe>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgdHeaderComponent {
  currentVersion: string;

  constructor(
    versionService: NgdVersionService,
    private sidebarService: NbSidebarService,
  ) {
    this.currentVersion = versionService.getNebularVersion();
  }

  mainMenu: NbMenuItem[] = [
    {
      title: 'Docs',
      link: '/docs',
    },
    {
      title: 'Components',
      link: '/docs/components',
    },
    {
      title: 'Theme',
      link: '/docs/theme',
    },
    {
      title: 'Auth',
      link: '/docs/auth',
    },
    {
      title: 'Security',
      link: '/docs/security',
    },
  ];

  @Input() sidebarTag: string;

  toggleSidebar() {
    this.sidebarService.toggle(false, this.sidebarTag);
  }
}
