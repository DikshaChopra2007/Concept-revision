let permissions = {
    read: true,
    write: true,
    delete: false,
    admin: false
};
for (let perm in permissions){
    if(permissions[perm] === true){
        console.log(perm);
    }
}