export interface IAddress {
    street: Number;
    suite: string;
    city: string;
    zipcode: string;
    client: string;
    geo: {
        lat: string;
        lng: string;
    }
}