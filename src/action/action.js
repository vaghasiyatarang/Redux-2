export const submitdata = (users) => {
    // console.log(users);
    return{
        type:"submit",
        payload:{
            name:users.name,
            email:users.email,
        }
    }
}