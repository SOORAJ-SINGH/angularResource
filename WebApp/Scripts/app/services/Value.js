(function () {
    'use strict'

    app.factory('Value', function ($resource) {
        return $resource('http://localhost:53122/api/values/:id', 'id:@id', {
            update: { method:'PUT'}
        }); // Note the full endpoint address
    });

})();