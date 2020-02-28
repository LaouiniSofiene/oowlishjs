export const createWork = (work) => {
    return (dispatch, getState, { getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid;
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        firestore.collection('works').doc(authorId).set({
            userId: authorId,
            StartTime: time,
            EndTime: '',
            StartBreak: '',
            EndBreak: '',
            Date: today

        }).then(() => {
            dispatch({ type: 'CREATE_WORK', work});
        }).catch((err)=> {
            dispatch({ type: 'CREATE_WORK_ERROR', err})
        })

        
    }
};

export const endWork = (work) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const authorId = getState().firebase.auth.uid;
        
        firestore.collection('works').doc(authorId).update({
            EndTime: time
        }).then(() => {
            dispatch({ type: 'END_WORK', work});
        }).catch((err)=> {
            dispatch({ type: 'END_ERROR', err})
        })

        
    }
};

export const startBreak = (work) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const authorId = getState().firebase.auth.uid;

        
        firestore.collection('works').doc(authorId).update({
            StartBreak: time
        }).then(() => {
            dispatch({ type: 'START_BREAK', work});
        }).catch((err)=> {
            dispatch({ type: 'START_BREAK_ERROR', err})
        })

        
    }
};


export const endBreak = (work) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        
        firestore.collection('works').doc(authorId).update({
            EndBreak: time
        }).then(() => {
            dispatch({ type: 'END_BREAK', work});
        }).catch((err)=> {
            dispatch({ type: 'END_BREAK_ERROR', err})
        })

        
    }
};


