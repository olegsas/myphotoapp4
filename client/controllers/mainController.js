angular.module('myApp').controller('mainController', ['$scope', '$http', 'Upload', '$timeout',
    function($scope, $http, Upload, $timeout) {
        $scope.test = "Hello";

        $scope.pictures = [
        'http://www.petsworld.in/blog/wp-content/uploads/2014/07/golden-puppy-with-kittens.jpg',
        'https://s-media-cache-ak0.pinimg.com/originals/30/27/d0/3027d0b550958fa1871e0a4dd475fba6.jpg',
        'http://data.whicdn.com/images/897396/large.png'
        ];

        $scope.uploadPic = function(file) {
            console.log(file);
            file.upload = Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {file: file},
            });

            file.upload.then(function(response){
                $timeout(function(){
                    file.result = response.data;
                });
            }, function(response){
                if(response.status >0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function(evt){
                // Math.min is to fix IE which reports 200% sometimes
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }
    }

]);