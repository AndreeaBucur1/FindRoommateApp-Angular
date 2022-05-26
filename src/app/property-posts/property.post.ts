import { UserDTO } from "../shared/user.dto";

export class PropertyPost {
	public id?: number;
	public title?: string;
	public propertyType?: string;
	public isForSale?: boolean;
	public numberOfRooms?: number;
	public numberOfBathrooms?: number;
	public floor?: number;
	public surface: number = 0;
	public hasParkingSpot?: boolean;
	public hasElevator?: boolean;
	public buildYear: number = 0;
	public price: number = 0;
	public description?: number;
	public creationDate?: Date | string;
	public user?: UserDTO;
	public city?: string;
	public photo?: string;

}