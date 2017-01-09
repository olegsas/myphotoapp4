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
            Upload.upload({
                url: 'http://127.0.0.1:3000/pictures/save',
                method: 'POST',
                file: file
            }).then(function(res){
                console.log(res)
                $scope.pictures.push('www.thegreatapps.com/application/upload/Apps/2016/10/cat-games-free-84.png');
            
            });
        }
    }

]);