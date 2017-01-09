/* Directives */
function ModalDirective() {

    return {
        templateUrl: 'directives/modal.html',
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {
            modalShow: '=',
            modalTask: '=',
            myVariable: '='
        },
        link: function (scope, elem) {
            scope.closeModal = function () {
                this.modalShow = !this.modalShow;
            };
            scope.saveChanges = function () {
                this.modalTask.text = elem.find('textarea').val();
                this.modalTask.finishDate = elem.find('input').val();
                this.modalTask.state = elem.find('select').val();
                this.closeModal();
            };

            scope.$watch('modalTask', function () {
                var finishDate = scope.modalTask.finishDate;
                scope.myDate = new Date();
                if (finishDate) {
                    scope.myDate = new Date(finishDate);

                }
                scope.minDate = new Date();
            });

        }
    };
}

export default {
    name: 'modalDirective',
    fn: ModalDirective
};
