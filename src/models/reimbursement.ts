export default interface Reimbursement {
    username: string;
    date: number;
    location: string;
    description: string;
    cost: number;
    amount: number;
    category: Category;
    rStat: rStat;
    id: string;
}

export type Category = 'University Course' | 'Seminar' | 'Certification Preparation Class' | 'Certification' | 'Technical Training' | 'Other';
export type rStat = 'initiated' | 'approved by DirSupervisor' | 'approved by DepHead' | 'approved by BenCo';
