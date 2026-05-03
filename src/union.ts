// union 
type UserRole= 'admin ' | 'user' | "gust"
const getDashbord = (role: UserRole )=>{
    if(role === "admin "){
        return "Admin Dashboard";
    }else{
        return "guest dashbord";

    }

};

getDashbord ('gust')


/////////////////////////////

type CommonUser = {
    id: number;
    email: string;
};

type AdminPermissions = {
    canDelete: boolean;
    canEdit: boolean;
};

// Intersection ব্যবহার করে Admin টাইপ তৈরি
type Admin = CommonUser & AdminPermissions;

const adminUser: Admin = {
    id: 1,
    email: "admin@web.com",
    canDelete: true,
    canEdit: true
};