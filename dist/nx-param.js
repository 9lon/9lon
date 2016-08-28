'use strict';

Polymer({
  is: 'nx-param',
  properties: {
    pattern: {
      type: String
    },
    params: {
      type: Object,
      notify: true
    }

  },
  observers: ['_getParam(route)'],
  _getParam: function _getParam() {
    var path = this.route.path;
    var params = path.split("/");

    var pattern = this.pattern;
    if (pattern) {
      var getVar = pattern.split("/");
    }

    var getPrarams = {
      app: params[1],
      page: params[2]
    };

    if (getVar) {
      getVar.map(function (obj, index) {
        getPrarams[obj] = params[index + 3];
      });
    }

    this.params = getPrarams;
  }
});