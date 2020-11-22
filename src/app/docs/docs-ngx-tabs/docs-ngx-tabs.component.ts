import { Component } from '@angular/core';

@Component({
  selector: 'app-docs-ngx-tabs',
  templateUrl: './docs-ngx-tabs.component.html',
  preserveWhitespaces: true,
})
export class DocsNgxTabsComponent {
  index = 0;
}

@Component({
  selector: 'app-docs-ngx-tab-routes',
  template: `
    <ngx-code-example ngNonBindable language="html">
      <![CDATA[ <ngx-tab-routes [tabs]="[{ name: 'Routable Tab 1', path: './' },
      { name: 'Routable Tab 2', path: './2' }]"> <router-outlet></router-outlet>
      </ngx-tab-routes> ]]>
    </ngx-code-example>
  `,
  preserveWhitespaces: true,
})
export class DocsNgxTabRoutes1Component {}

@Component({
  selector: 'app-docs-ngx-tab-routes',
  template: ` Routable Tab 2 `,
})
export class DocsNgxTabRoutes2Component {}
