angular
    .module('myApp', [])
    .controller('TodoCtrl', function ($scope) {
        $scope.saved = localStorage.getItem('todos');
        $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [
            {
                text: 'Create a To do!',
                date: 'Now',
                done: false
            },
        ];
        localStorage.setItem('todos', JSON.stringify($scope.todos));
        $scope.completed = [

        ];
        $scope.addTodo = function () {
            $scope.todos.push({
                text: $scope.formTodoText,
                date: $scope.formTodoDate,
                done: false
            });
            $scope.formTodoText = '';
            $scope.formTodoDate = '';
            
        };
        $scope.delete = function () {
            $scope.todos.splice(this.$index, 1);
        };
        $scope.completeItem = function (index) {
            $scope.completed.push($scope.todos[index]);
            $scope.todos.splice(index, 1);
        };
    });
