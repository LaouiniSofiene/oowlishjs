const initState = {
    works: [
        {id: '1',userId: '1',date: '2020-2-24',startTime: '08:20:20',endTime: '08:20:20',breakStart:'08:20:20',breakEnd: '08:20:20'},
        {id: '2',userId: '1',date: '2020-1-15',startTime: '08:20:20',endTime: '08:20:20',breakStart:'08:20:20',breakEnd: '08:20:20'}
    ]
};

const workReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_WORK':
            console.log('created work', action.work);
            return state;
        case 'CREATE_WORK_ERROR':
            console.log('created work error', action.console.err);
            return state;
        case 'END_WORK':
            console.log('Ended work', action.work);
            return state;
        case 'END_WORK_ERROR':
            console.log('Eended work error', action.console.err);
            return state;
        case 'START_BREAK':
            console.log('Started Break', action.work);
            return state;
        case 'START_BREAK_ERROR':
            console.log('Started Break error', action.console.err);
            return state;
        case 'END_BREAK':
            console.log('Ended Break', action.work);
            return state;
        case 'END_BREAK_ERROR':
            console.log('Ended Break error', action.console.err);
            return state;
        default: 
            return state;
    }
}
export default workReducer;