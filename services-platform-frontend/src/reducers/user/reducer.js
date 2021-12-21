const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));
const initialState = {
    user: user ? user : {},
    token: token ? token : undefined,
    isLogedIn: false,
};

const userReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case "ADD_USER":
            localStorage.setItem("user", JSON.stringify(payload));
            return {
                user: state.user,
                token: payload,
                isLogedIn: true
            };
            case "ADD_TOKEN":
                localStorage.setItem("token", JSON.stringify(payload));
                return {
                    user: state.user,
                    token: payload,
                    isLogedIn: true
                };
            case "REMOVE_USER":
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                return {
                    user: {},
                    token: undefined,
                    isLogedIn: false
                };
            default:
                return state;
    }
}

export default userReducer;