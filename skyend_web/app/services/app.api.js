backendApp
.factory("API", function($resource, config ) {
    return {
        UnidadMedida:  $resource(config.baseUrl+'configs/unidadmedidas/:id/', {'id': '@id'},
        {
            'update': { method:'PUT' },
            'list': { method:'GET', params: { page: '@page', query:'@query', page_size: '@page_size'} }
        }),

  Contrato:  $resource(config.baseUrl+'configs/contratos/:id/', {'id': '@id'},
        {
            'update': { method:'PUT' },
            'list': { method:'GET', params: { page: '@page', query:'@query', page_size: '@page_size'} }
        }),

    Documento:  $resource(config.baseUrl+'configs/documentos/:id/', {'id': '@id'},
        {
            'update': { method:'PUT' },
            'list': { method:'GET', params: { page: '@page', query:'@query', page_size: '@page_size'} }
        }),

        Curso:  $resource(config.baseUrl+'configs/cursos/:id/', {'id': '@id'},
        {
            'update': { method:'PUT' },
            'list': { method:'GET', params: { page: '@page', query:'@query', page_size: '@page_size'} }
        }),
    };
});


