"use strict";Polymer({is:"nx-param",properties:{pattern:{type:String},params:{type:Object,notify:!0}},observers:["_getParam(route)"],_getParam:function(){var t=this.route.path,a=t.split("/"),r=this.pattern;if(r)var e=r.split("/");var p={app:a[1],page:a[2]};e&&e.map(function(t,r){p[t]=a[r+3]}),this.params=p}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm54LXBhcmFtLmpzIl0sIm5hbWVzIjpbIlBvbHltZXIiLCJpcyIsInBhdHRlcm4iLCJwcm9wZXJ0aWVzIiwiU3RyaW5nIiwidHlwZSIsIk9iamVjdCIsInBhcmFtcyIsIm9ic2VydmVycyIsIl9nZXRQYXJhbSIsInBhdGgiLCJ0aGlzIiwicm91dGUiLCJzcGxpdCIsImdldFZhciIsImdldFByYXJhbXMiLCJhcHAiLCJwYWdlIiwibWFwIiwib2JqIiwiaW5kZXgiXSwibWFwcGluZ3MiOiJZQUFBQSxVQUNNQyxHQUFHLFdBRFRELFlBQ1NFLFNBQ0hDLEtBQVdDLFFBRVBDLFFBRk9BLEtBQUFDLE9BSVRDLFFBQU8sSUFNVEMsV0FaRSxvQkFlRkMsVUFBVSxXQUNKQyxHQUFBQSxHQUFPQyxLQUFLQyxNQUFoQkYsS0FDSUgsRUFBU0csRUFBS0csTUFBbEIsS0FFSVgsRUFBVVMsS0FBS1QsT0FDaEJBLElBQUFBLEVBQ0dZLEdBQUFBLEdBQVNaLEVBQVFXLE1BQXJCLElBR0VFLElBQUFBLElBQ0ZDLElBQUlULEVBRFcsR0FFZlUsS0FBS1YsRUFBQSxHQUdKTyxJQUNEQSxFQUFXSSxJQUFBLFNBQUFDLEVBQWFDLEdBQ3RCTCxFQUFBSSxHQUFrQlosRUFBT2EsRUFBekIsS0FJSlQsS0FBS0osT0FBU1EiLCJmaWxlIjoibngtcGFyYW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJQb2x5bWVyKHtcbiAgICAgIGlzOidueC1wYXJhbScsXG4gICAgICBwcm9wZXJ0aWVzOntcbiAgICAgICAgcGF0dGVybjp7XG4gICAgICAgICAgdHlwZTpTdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zOntcbiAgICAgICAgICB0eXBlOk9iamVjdCxcbiAgICAgICAgICBub3RpZnk6dHJ1ZVxuICAgICAgICB9XG5cbiAgICAgIH0sXG4gICAgICBvYnNlcnZlcnM6W1xuICAgICAgICAnX2dldFBhcmFtKHJvdXRlKSdcbiAgICAgIF0sXG4gICAgICBfZ2V0UGFyYW06ZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHBhdGggPSB0aGlzLnJvdXRlLnBhdGg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcblxuICAgICAgICB2YXIgcGF0dGVybiA9IHRoaXMucGF0dGVybjtcbiAgICAgICAgaWYocGF0dGVybil7XG4gICAgICAgICAgdmFyIGdldFZhciA9IHBhdHRlcm4uc3BsaXQoXCIvXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGdldFByYXJhbXMgPSB7XG4gICAgICAgICAgYXBwOnBhcmFtc1sxXSxcbiAgICAgICAgICBwYWdlOnBhcmFtc1syXVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKGdldFZhcil7XG4gICAgICAgICAgZ2V0VmFyLm1hcChmdW5jdGlvbihvYmosaW5kZXgpe1xuICAgICAgICAgICAgZ2V0UHJhcmFtc1tvYmpdID0gcGFyYW1zW2luZGV4KzNdO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYXJhbXMgPSBnZXRQcmFyYW1zO1xuICAgICAgfVxuICAgIH0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
