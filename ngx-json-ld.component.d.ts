import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class NgxJsonLdComponent {
    private sanitizer;
    set json(currentValue: any);
    jsonLD?: SafeHtml;
    constructor(sanitizer: DomSanitizer);
    getSafeHTML(value: any): SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxJsonLdComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxJsonLdComponent, "ngx-json-ld", never, { "json": "json"; }, {}, never, never, false>;
}
