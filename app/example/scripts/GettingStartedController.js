angular
    .module('example')
    .controller('GettingStartedController', function ($scope, supersonic) {
        supersonic.device.ready.then(function () {
            console.log("Registering Back Button Listener");
            supersonic.device.buttons.back.whenPressed(function () {
                console.log("Device back button was pressed.");
            });
        });
    });
