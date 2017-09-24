(function () {
    'use strict'
    console.log('this is mainCtrl.js');
    app.controller('mainCtrl', ['Value', mainCtrl]);

    function mainCtrl(Value) {
        var vm = this;

        vm.hello = "hi main Controller";

        vm.getValues = getValues;
        vm.getValues1 = getValues1;
        vm.getValue = getValue;
        vm.saveValue = saveValue;
        vm.updateValue = updateValue;
        vm.deleteValue = deleteValue;


        function getValues() {
            console.log("getValues");
            var values = Value.query(function (a) { console.log('values:', values, "a:", a) });
            console.log('values after one line:',values);
        }

        function getValues1() {
            console.log("getValues");
            var values = Value.query();
            values.$promise.then(function (response) { console.log('success:', response) }, function (error) { console.log('error:', error) })
        }

        function getValue(id) {
            console.log("getValue for",id);

        }

        function saveValue(value) {
            console.log("save value:", value);

        }

        function updateValue(data) {
            console.log("update value:", data);
            var value = Value.get({ id: '1' });
            value.$promise.then(function (response) {
                console.log('success:', response);
                value.$update({id:data.id});
            }, function (error) { console.log('error:', error); });

            //Value.update({ id: data.id},value)
        }

        function deleteValue(data) {
            console.log("delete value:", data);
            var value = Value.get({ id: '1' });
            value.$promise.then(function (response) {
                console.log('success:', response);
                value.$delete({ id: data.id });
            }, function (error) { console.log('error:', error); });
        }

    }

})();