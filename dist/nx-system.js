'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  window.nxQuerySystem = document.querySelector("nx-system");
  window.nxQueryLocalize = {};

  var NxSystem = function () {
    function NxSystem() {
      _classCallCheck(this, NxSystem);
    }

    _createClass(NxSystem, [{
      key: 'beforeRegister',
      value: function beforeRegister() {
        this.is = 'nx-system';
        this.properties = {
          role: {
            type: Object,
            value: [{ path: 'app1/page1', role: ['admin', 'manager', 'user1'] }]
          }
        };
      }
    }, {
      key: 'created',
      value: function created() {
        if (typeof localStorage.nxLanguage == 'undefined') {
          localStorage.setItem("nxLanguage", initSystem.language);
        }

        var decoded = jwt_decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVXNlcjEiLCJyb2xlIjoiYWRtaW4ifQ.oRx_ieJoxSZPv7Y8lM03Qv8Qb24PVmuFpWBUxWEkBcg');
        this.auth = decoded;
      }
    }, {
      key: '_routePageChanged',
      value: function _routePageChanged(getRoute) {
        var _this = this;

        var routeData = {};
        if (getRoute.path == "/") {
          var indexPath = initSystem.indexPath.split('/');
          routeData = { app: indexPath[1], page: indexPath[2] };
        } else if (typeof getRoute.path.split('/')[2] == "undefined") {
          routeData = { app: 'error', page: '404' };
        } else {
          routeData = this.routeData;
        }

        var renderPage = function renderPage() {
          var getPage = document.createElement(routeData.app + '-' + routeData.page);
          getPage.route = routeData;

          _this.getLocales(_this.layout, routeData.app, function (data) {
            window.mergeLocales = data;
            if (_this.layout != _this.oldLayout) {

              if (initSystem.layout != "layout-main") {

                var renderLayout = function renderLayout() {
                  var queryTag = _this.$$('tag-app-load');
                  queryTag.innerHTML = '';
                  var getLayout = document.createElement(_this.layout);
                  getLayout.route = routeData;
                  getLayout.page = getPage;
                  queryTag.appendChild(getLayout);
                };

                _this.importHref(_this.resolveUrl('/src/template/' + _this.layout + '/' + _this.layout + '.html'), function (e) {
                  renderLayout();
                }, function (e) {
                  _this.changePath('/error/404');
                }, true);
              } else {
                renderLayout();
              }
            } else if (typeof _this.layout == "undefined") {
              var queryTag = _this.$$('tag-app-load');
              queryTag.innerHTML = '';
              queryTag.appendChild(getPage);
            } else {
              var queryTag = _this.$$('tag-app-load>' + _this.layout);
              queryTag.route = routeData;
              queryTag.page = getPage;
            }

            _this.oldLayout = _this.layout;
          });
        };

        if (this.checkRole(routeData)) {
          routeData = { app: 'error', page: '403' };
        }

        this.importHref(this.resolveUrl('/src/apps/' + routeData.app + '/' + routeData.page + '.html'), function (e) {
          renderPage();
        }, function (e) {
          routeData = { app: 'error', page: '404' };
          _this.importHref(_this.resolveUrl('/src/apps/' + routeData.app + '/' + routeData.page + '.html'), function (e) {
            renderPage();
          }, null, true);
        }, true);
      }
    }, {
      key: 'changePath',
      value: function changePath(path) {
        this.$.changePath.setAttribute("href", path);
        this.$.changePath.click();
      }
    }, {
      key: 'getLocales',
      value: function getLocales(layout, app, callback) {

        var mergeLocales = function mergeLocales() {

          var mergeData = JSON.parse(JSON.stringify(locales.global));

          if (typeof locales.layouts[layout] != "undefined") {
            for (var key in locales.layouts[layout]) {
              for (var key2 in locales.layouts[layout][key]) {
                mergeData[key][key2] = locales.layouts[layout][key][key2];
              }
            }
          }

          for (var key in locales.apps[app]) {
            for (var key2 in locales.apps[app][key]) {
              mergeData[key][key2] = locales.apps[app][key][key2];
            }
          }
          callback(mergeData);
        };

        var localesLoaded = {
          global: false,
          layout: false,
          app: false,
          loaded: function loaded(pointer) {
            this[pointer] = true;
            if (this.global && this.layout && this.app) {
              mergeLocales();
            }
          }
        };

        if (typeof locales == 'undefined') {
          window.locales = { global: null, apps: {}, layouts: {} };
        }

        if (locales.global == null) {
          axios.get('/src/apps/localize.json').then(function (response) {
            locales.global = response.data;
            localesLoaded.loaded('global');
          });
        } else {
          localesLoaded.loaded('global');
        }

        if (typeof locales.layouts[layout] == 'undefined') {
          axios.get('/src/template/' + layout + '/localize.json').then(function (response) {
            locales.layouts[layout] = response.data;
            localesLoaded.loaded('layout');
          });
        } else {
          localesLoaded.loaded('layout');
        }

        if (typeof locales.apps[app] == 'undefined') {
          axios.get('/src/apps/' + app + '/localize.json').then(function (response) {
            locales.apps[app] = response.data;
            localesLoaded.loaded('app');
          });
        } else {
          localesLoaded.loaded('app');
        }
      }
    }, {
      key: 'checkRole',
      value: function checkRole(app) {
        var _this2 = this;

        var redirect = true;
        this.role.map(function (obj, index) {
          if (obj.path == app.app + '/' + app.page) {
            obj.role.map(function (sObj) {
              if (_this2.auth.role == sObj) {
                redirect = false;
              }
            });
          } else {
            redirect = false;
          }
        });

        return redirect;
      }
    }, {
      key: 'observers',
      get: function get() {
        return ['_routePageChanged(route)'];
      }
    }]);

    return NxSystem;
  }();

  Polymer(NxSystem);
})();