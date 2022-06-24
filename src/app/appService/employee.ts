export interface persons {
    id:number;
    name: string;
    username: string;
    email: string;
    address: [street:string, city:string, zipcode:number, geo: [lat:number,lng:number],];

}