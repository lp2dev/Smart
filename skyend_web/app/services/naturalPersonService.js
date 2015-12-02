backendApp


.factory("naturalPersonService", function($http) {
    var url = "http://localhost:8000/configs/naturalpersons/";
    return {
        "list": function() {
            return $http.get(url).then(function(r) {
                return r;
            });
        },
        "select-todo": function(id) {
            return $http.get(url + id + "/").then(function(r) {
                return r;
            });
        },
        "create": function(d) {
            return $http.post(url, d).then(function(r) {
                return r;
            });
        },
        "update": function(id, d) {
            return $http({
                "url": url + d.id + "/",
                "method": "put",
                "data": d,
            }).then(function(r) {
                return r;
            });
        },
        "delete": function(d) {
            return $http.delete(url + d.id + "/").then(function(r) {
                return r;
            });
        },
    }
});