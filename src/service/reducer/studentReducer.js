const initalState = {
    students: JSON.parse(localStorage.getItem('students')) || [],
    student: null,
    isCreated: false,
    isLoading: false,
    isUpdated:false,
    error: null,
}

export const studentReducer = (state = initalState , action ) => {

    switch (action.type) {
        case"LOADING" : 
        return{
            ...state,
            isLoading: true
        } 
        case "ADD_NEW_STUDENT":
        return{
            ...state,
            isCreated: true,
        }

        case "GET_ALL_STUDENTS":
            return {
                ...state,
                students: action.payload,
                isLoading: false,
                isCreated: false,
                isUpdated: false
            }

            case "ADD_NEW_STUDENT_REJ": 
        return {
            ...state,
            error: action.payload
        }

        case "SINGLE_STUDENT":
            return{
                ...state,
                student: action.payload
            }

            case "UPDATES_TUDENT":
                return{
                    ...state,
                    isUpdated:true,
                    student:null
                }
        default:
            return state;
    }
}
