export const createWork = (work) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        //makeasync call to database
        const firestore = getFirestore();
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        
        firestore.collection('works').add({
            ...work,
            userFirstname:'test',
            userLastname: 'test',
            userId: 1,
            StartTime: time,
            EndTime: '',
            BreakStart: '',
            BreakEnd: '',
            Date: today

        }).then(() => {
            dispatch({ type: 'CREATE_WORK', work});
        }).catch((err)=> {
            dispatch({ type: 'CREATE_WORK_ERROR', err})
        })

        
    }
};