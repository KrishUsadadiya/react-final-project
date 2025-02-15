
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';


export const loading = () => {
    return {
        type: "LOADING"
    }
}

export const addNewstudent = () => {
    return {
        type: "ADD_NEW_STUDENT",
    }
}

export const addstudentRej = (msg) => {
    return {
        type: "ADD_NEW_STUDENT_REJ",
        payload: msg
    }
}


export const getAllstudents = (data) => {
    return {
        type: "GET_ALL_STUDENTS",
        payload: data
    }
}

export const singlestudent = (data) => {
    return {
        type: "SINGLE_STUDENT",
        payload: data
    }
}

export const updatestudent = () => {
    return {
        type: "UPDATE_STUDENT",
    }
}


export const addstudentAsync = (data) => {

    return async (dispatch) => {
        dispatch(loading())
        try {
            let addNewDoc = await setDoc(doc(db, 'students', `${data.id}`), data)
            dispatch(addNewstudent())

        } catch (err) {
            console.log(err)
        }
    }
}

export const getAllstudentAsync = () => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let students = await getDocs(collection(db, "students"))

            let result = students.docs.map((student) => {
                return {
                    id: student.id,
                    ...student.data()
                }
            })
            dispatch(getAllstudents(result))
        } catch (err) {
            console.log(err);
        }

    }
}

export const deletestudentAsync = (id) => {
    return async (dispatch) => {
        try {
            let record = await deleteDoc(doc(db, 'students', `${id}`))
            dispatch(getAllstudentAsync())
        } catch (error) {
            console.log(err);
        }
    }
}

export const singlestudentAsync = (id) => {
    return async(dispatch) => {
        try {
            let res = await getDoc(doc(db, 'students', `${id}`))
            let result = res.data();
            result.id = res.id;
            dispatch(singlestudent(result))
        } catch (err) {
            console.log(err);
        }
    }   
}

export const updatestudentAsync = (data) => {
    return async (dispatch) => {
        try {
            await updateDoc(doc(db, 'students', `${data.id}`), data);
            dispatch(updatestudent())
        } catch (error) {
            console.log(error);
        }
    }
}

