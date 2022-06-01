import { RoommatePostDTO } from "./roommate-post.dto";

export class UserDTO {

    public userId?: number;

    public firstName?: string;

    public lastName?: string;

    public password?: string;

    public email?: string;

    public username?: string;

    public profilePhoto?: string;

    public role?: string;

    public phoneNumber?: string;

    public gender?: String;

    public roommatePost?: RoommatePostDTO;
}