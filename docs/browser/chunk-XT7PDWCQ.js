import {
  ElementRef,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdirectiveInject
} from "./chunk-G46OV5IL.js";

// src/app/shared/directive/icmloadingoverlay/icm.loading.overlay.directive.ts
var IcmLoadingOverlayDirective = class _IcmLoadingOverlayDirective {
  elementRef;
  IcmLoadingOverlay;
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  ngOnChanges(changes) {
    let nativeEle = this.elementRef.nativeElement;
    if (null == nativeEle.parentElement.querySelector("img")) {
      var img = document.createElement("img");
      img.src = "/assets/icons/ajax-loader.gif";
      img.setAttribute("class", "no-css");
      img.style.position = "absolute";
      img.style.width = "42px";
      img.style.left = "50%";
      img.style.top = "50%";
      img.style["margin-top"] = "-21px";
      img.style["margin-left"] = "-21px";
      nativeEle.appendChild(img);
    }
    let imgObj = nativeEle.parentElement.querySelector("img.no-css");
    let displayStatus = "none";
    nativeEle.style.removeProperty("position");
    nativeEle.style.removeProperty("opacity");
    nativeEle.style.removeProperty("cursor");
    nativeEle.style.removeProperty("pointer-events");
    if (changes.IcmLoadingOverlay.currentValue) {
      displayStatus = "block";
      nativeEle.style.position = "relative";
      nativeEle.style.opacity = "0.56";
      nativeEle.style["pointer-events"] = "none";
      nativeEle.style.cursor = "default";
    }
    if (imgObj) {
      imgObj.style.display = displayStatus;
    }
  }
  static \u0275fac = function IcmLoadingOverlayDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IcmLoadingOverlayDirective)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _IcmLoadingOverlayDirective, selectors: [["", "IcmLoadingOverlay", ""]], inputs: { IcmLoadingOverlay: "IcmLoadingOverlay" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature] });
};

export {
  IcmLoadingOverlayDirective
};
//# sourceMappingURL=chunk-XT7PDWCQ.js.map
