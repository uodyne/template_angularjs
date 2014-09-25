/* **********************************************************************
 *
 * APP AngularJS
 *
 ********************************************************************** */

var app = angular.module("app", [], function ($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
});


/* **********************************************************************
 *
 * RUN
 *
 ********************************************************************** */

app.run(function () {
    // fastclick
    FastClick.attach(document.body);
});


/* **********************************************************************
 *
 * DIRECTIVES
 *
 ********************************************************************** */

// Blur on submit form
app.directive('uoSubmitBlur', [

function () {

        return {
            restrict: 'A',
            require: 'form',
            link: function (scope, element, attrs, ctrl) {

                element.on('submit', function () {
                    var inputTagType = scope.inputTag || 'input';
                    var inputElement = element.find(inputTagType);
                    if (inputElement.hasClass('clear-at-submit')) {
                        inputElement.val("");
                        inputElement.trigger('change');
                    }
                    inputElement.blur();
                });

            }
        };

}
]);

// Hide splash when app is loader
app.directive('uoSplash', [

function () {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                setTimeout(function () {
                    element.css('display', 'none');
                }, 990);

            }
        };

}
]);


app.service("mainService",
    function ($http, $q) {

        // API
        return ({
            firstMethod: firstMethod
        });


        // ---
        // Public methods
        // ---

        function firstMethod(what) {

            return what;

        }

        // ---
        // Private methods
        // ---

    }
);


/* **********************************************************************
 *
 * CONTROLLERS
 *
 ********************************************************************** */
app.controller("mainCtrl",
    function ($scope, $http, mainService) {

        // ---
        // Public methods
        // ---

        $scope.appready = true;

        $scope.firstMethod = function () {

            $scope.firstMessage = mainService.firstMethod("WELCOME");
        };


        // ---
        // Private methods
        // ---



    });
