import { Component, HostBinding, Input, ChangeDetectionStrategy, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class NgxJsonLdComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWpzb24tbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvbmd4LWpzb24tbGQvc3JjL25neC1qc29uLWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDOzs7QUFRdkIsTUFBTSxPQUFPLGtCQUFrQjtJQU03QixZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUcsQ0FBQztJQUwvQyxJQUNJLElBQUksQ0FBQyxZQUFpQjtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUlELFdBQVcsQ0FBQyxLQUFVO1FBQ3BCLE1BQU0sSUFBSSxHQUFHLEtBQUs7WUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztZQUN0RSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1AsTUFBTSxJQUFJLEdBQUcsc0NBQXNDLElBQUksV0FBVyxDQUFDO1FBQ25FLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnSEFkVSxrQkFBa0I7b0dBQWxCLGtCQUFrQixtSUFIbkIsRUFBRTs0RkFHRCxrQkFBa0I7a0JBTDlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxFQUFFO29CQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDttR0FHSyxJQUFJO3NCQURQLEtBQUs7Z0JBSW9CLE1BQU07c0JBQS9CLFdBQVc7dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1qc29uLWxkJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmd4SnNvbkxkQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgc2V0IGpzb24oY3VycmVudFZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmpzb25MRCA9IHRoaXMuZ2V0U2FmZUhUTUwoY3VycmVudFZhbHVlKTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2lubmVySFRNTCcpIGpzb25MRD86IFNhZmVIdG1sO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuXG4gIGdldFNhZmVIVE1MKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBqc29uID0gdmFsdWVcbiAgICAgID8gSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpLnJlcGxhY2UoLzxcXC9zY3JpcHQ+L2csICc8XFxcXC9zY3JpcHQ+JylcbiAgICAgIDogJyc7XG4gICAgY29uc3QgaHRtbCA9IGA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCI+JHtqc29ufTwvc2NyaXB0PmA7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICB9XG59XG4iXX0=