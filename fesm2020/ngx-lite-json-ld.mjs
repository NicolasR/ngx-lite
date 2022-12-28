import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, HostBinding, NgModule } from '@angular/core';
import * as i1 from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

class NgxJsonLdComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    set json(currentValue) {
        this.jsonLD = this.getSafeHTML(currentValue);
    }
    getSafeHTML(value) {
        const json = value
            ? JSON.stringify(value, null, 2).replace(/<\/script>/g, '<\\/script>')
            : '';
        const html = `<script type="application/ld+json">${json}</script>`;
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
NgxJsonLdComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxJsonLdComponent, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
NgxJsonLdComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: NgxJsonLdComponent, selector: "ngx-json-ld", inputs: { json: "json" }, host: { properties: { "innerHTML": "this.jsonLD" } }, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxJsonLdComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-json-ld',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; }, propDecorators: { json: [{
                type: Input
            }], jsonLD: [{
                type: HostBinding,
                args: ['innerHTML']
            }] } });

class NgxJsonLdModule {
}
NgxJsonLdModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxJsonLdModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxJsonLdModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: NgxJsonLdModule, declarations: [NgxJsonLdComponent], imports: [CommonModule], exports: [NgxJsonLdComponent] });
NgxJsonLdModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxJsonLdModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxJsonLdModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [NgxJsonLdComponent],
                    exports: [NgxJsonLdComponent],
                }]
        }] });

/*
 * Public API Surface of ngx-json-ld
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxJsonLdComponent, NgxJsonLdModule };
//# sourceMappingURL=ngx-lite-json-ld.mjs.map
