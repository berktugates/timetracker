export interface ITimelaneEventFinishedOptions{
    label:string;
    value:boolean;
    children? : ITimelaneEventFinishedOptions[];
}
export interface ICompany{
    title:string;
}

export interface ICompanyOptions{
    label:string;
    value:number;
    children?: ICompanyOptions[];
}