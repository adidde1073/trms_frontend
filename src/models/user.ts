export default interface User {
    username: string;
    password: string;    
    address?: string;
    phoneNumber?: string;
    role: Role;
    id: string;
}

export type Role = 'Employee' | 'DirSupervisor' | 'DepHead' | 'BenCo';