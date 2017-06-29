angular
    .module('myApp', [])
    .controller('TodoCtrl', function ($scope) {
        $scope.current = localStorage.getItem('todos');
        $scope.done = localStorage.getItem('done');
        $scope.todos = (localStorage.getItem('todos') !== null) ? JSON.parse($scope.current) : [
            {
                text: 'Create a To do!',
                date: 'Now',
            },
        ];
        localStorage.setItem('todos', JSON.stringify($scope.todos));
        $scope.completed = (localStorage.getItem('done') !== null) ? JSON.parse($scope.done) : [];
        localStorage.setItem('done', JSON.stringify($scope.completed));
        $scope.addTodo = function () {
            $scope.todos.push({
                text: $scope.formTodoText,
                date: $scope.formTodoDate,
            });
            $scope.formTodoText = '';
            $scope.formTodoDate = '';
            localStorage.setItem('todos', JSON.stringify($scope.todos));
        };
        $scope.delete = function () {
            $scope.todos.splice(this.$index, 1);
        };
        $scope.completeItem = function (index) {
            $scope.completed.push($scope.todos[index]);
            $scope.todos.splice(index, 1);
            localStorage.setItem('done', JSON.stringify($scope.completed));
            localStorage.setItem('todos', JSON.stringify($scope.todos));
        };
        $scope.uncompleteItem = function (index) {
            $scope.todos.push($scope.completed[index]);
            $scope.completed.splice(index, 1);
            localStorage.setItem('done', JSON.stringify($scope.completed));
            localStorage.setItem('todos', JSON.stringify($scope.todos));
        }
    });
