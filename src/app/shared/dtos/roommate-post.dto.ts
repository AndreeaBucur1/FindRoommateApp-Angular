import { UserDTO } from "./user.dto";

export class RoommatePostDTO {

    public id?: number;

    public smoker?: boolean = false;

    public acceptSmoker?: boolean;

    public hasGender?: "Female" | "Male";

    public roommateGenderPreference?: "Female" | "Male" | "Any";

    public hasAge?: number;

    public city?: string;

    public roommateMinAgePreference?: number;

    public roommateMaxAgePreference?: number;

    public hasApartment?: boolean;

    public hasPets?: boolean;

    public acceptPets?: boolean;

    public working?: boolean;

    public acceptNotWorking?: boolean;

    public organized?: boolean;

    public acceptUnorganized?: boolean;

    public likesParties?: boolean;

    public acceptPartyingRoommate?: boolean;

    public communicative?: boolean;

    public acceptUncommunicative?: boolean;

    public patient?: boolean;

    public acceptNotPatient?: boolean;

    public friendly?: boolean;

    public acceptNotFriendly?: boolean;

    public responsible?: boolean;

    public acceptNotResponsible?: boolean;

    public hasHomeParties?: boolean;

    public acceptHomeParties?: boolean;

    public hasGuests?: boolean;

    public acceptGuests?: boolean;

    public lookingForAFriend?: boolean;

    public user?: UserDTO;

    public description?: string;

    public score?: number;

}