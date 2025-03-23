import {
  AuthService
} from "./chunk-GZS32W6K.js";
import {
  Router,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-G46OV5IL.js";

// src/app/shared/guard/auth.guard.ts
var AuthGuard = class _AuthGuard {
  _authService;
  _router;
  constructor(_authService, _router) {
    this._authService = _authService;
    this._router = _router;
  }
  canActivate() {
    let flag = this._authService.isAccessTokenGenerated();
    if (!flag) {
      this._router.navigate(["./portal/login"], { queryParams: { redirectUrl: window.location.pathname }, queryParamsHandling: "merge" });
      return false;
    } else {
      return true;
    }
  }
  static \u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
};

export {
  AuthGuard
};
//# sourceMappingURL=chunk-ODG4QN4H.js.map
