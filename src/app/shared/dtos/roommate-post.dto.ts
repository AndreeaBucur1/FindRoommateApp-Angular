export class RoommatePostDTO {

    public id?: number;

    public isSmoker?: boolean;

    public acceptSmoker?: boolean;

    public hasGender?: "Female" | "Male";

    public genderPreference?: "Female" | "Male" | "Any";

    public hasAge?: number;

    public roommateMinAgePreference?: number;

    public roommateMaxAgePreference?: number;

    public hasApartment?: boolean;

    public hasPets?: boolean;

    public acceptPets?: boolean;

    public isWorking?: boolean;

    public acceptNotWorking?: boolean;

    public isOrganized?: boolean;

    public acceptUnorganized?: boolean;

    public likesParties?: boolean;

    public acceptPartyingRoommate?: boolean;

    public isCommunicative?: boolean;

    public acceptUncommunicative?: boolean;

    public isPatient?: boolean;

    public acceptNotPatient?: boolean;

    public isFriendly?: boolean;

    public acceptNotFriendly?: boolean;

    public isResponsible?: boolean;

    public acceptNotResponsible?: boolean;

    public hasHomeParties?: boolean;

    public acceptHomeParties?: boolean;

    public hasGuests?: boolean;

    public acceptGuests?: boolean;

    public isLookingForAFriend?: boolean;

}