backendApp
.factory("API", function($resource) {
    var url = "http://localhost:8000/configs/unidadmedidas";
    var url = "http://localhost:8000/configs/contratos";
    var url = "http://localhost:8000/configs/documentos";
    return {
        UnidadMedida:  $resource(''+url+'/:id/', {'id': "@id"},
        {
            'update': { method:'PUT' },
            {
        Contrato:  $resource(''+url+'/:id/', {'id': "@id"},
        {
            'update': { method:'PUT' },
            {
        Documento:  $resource(''+url+'/:id/', {'id': "@id"},
        {
            'update': { method:'PUT' },

        }),

    };

});
