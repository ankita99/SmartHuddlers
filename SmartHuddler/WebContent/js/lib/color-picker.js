angular.module('ngColorPicker', [])
.provider('ngColorPickerConfig', function(){
    
    var templateUrl = 'partials/color-picker.html';
    var defaultColors =  [
		'#001934',
		'#61BBB8',
		'#F04E37',
		'#D7DF23',
    ];
    this.setTemplateUrl = function(url){
        templateUrl = url;
    };
    this.setDefaultColors = function(colors){
        defaultColors = colors;
    };
    this.$get = function(){
        return {
            templateUrl : templateUrl,
            defaultColors: defaultColors
        }
    }
})
.directive('ngColorPicker', ['ngColorPickerConfig',function(ngColorPickerConfig) {
    
    return {
        scope: {
            selected: '=',
            customizedColors: '=colors'
        },
        restrict: 'AE',
        templateUrl: ngColorPickerConfig.templateUrl,
        link: function (scope, element, attr) {
            scope.colors = scope.customizedColors || ngColorPickerConfig.defaultColors;
            scope.selected = scope.selected || scope.colors[0];

            scope.pick = function (color) {
                scope.selected = color;
            };

        }
    };

}]);