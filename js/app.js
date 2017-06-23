angular
    .module('myApp', [])
    .controller('TodoCtrl', function($scope){
        $scope.todos = [
            {text: 'Create a To do!', date: 'Now', done: false},
        ];
        $scope.completed = [
            {text: 'Complete Task', date: 'Now', done:true},
        ]
        $scope.addTodo = function() {
            $scope.todos.push({text:$scope.formTodoText, date:$scope.formTodoDate, done:false});
            $scope.formTodoText = '';
            $scope.formTodoDate = '';
        };
        $scope.delete = function(){
            $scope.todos.splice(this.$index, 1);
        };
        $scope.completeItem = function(index) {
            $scope.completed.push($scope.todos[index]);
            $scope.todos.splice(index, 1);
        };
    });