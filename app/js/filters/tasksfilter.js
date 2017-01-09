function TasksFilter() {

    return function (input, condition) {
        input = input || [];
        let defComparator = (el)=> {
            var isArchived = ()=> {
                return !!(typeof el.isArchived != 'undefined' && !el.isArchived);
            };
            var isCorrectDate = ()=> {
                let timeNow = new Date();
                timeNow.setHours(0, 0, 0, 0);
                return Date.parse(el.finishDate) >= Date.parse(timeNow)

            };
            var isCorrectState = ()=> {
                return el.state >= 1 && el.state <= 3
            };
            if (el.finishDate.length &&
                isCorrectDate() &&
                isArchived() &&
                isCorrectState()
            ) {
                return true;
            }
        };
        let comporator = condition || defComparator;

        return input.filter(comporator);
    }
}

export default {
    name: 'TasksFilter',
    fn: TasksFilter
};