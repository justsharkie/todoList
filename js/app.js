angular
    .module('myApp', [])
    .controller('TodoCtrl', function($scope){
        $scope.todos = [
            {text: 'Create a To do!', date: 'Now', done: false},
        ];
        $scope.addTodo = function() {
            $scope.todos.push({text:$scope.formTodoText, date:$scope.formTodoDate, done:false});
            $scope.formTodoText = '';
        };
        $scope.delete = function(){
            $scope.todos.splice(this.$index, 1);
        }
    })