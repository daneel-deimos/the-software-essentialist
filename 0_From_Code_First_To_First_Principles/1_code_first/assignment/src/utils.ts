import { UserData } from "./database";

export const areInputsValid = ({ email, username, firstName, lastName }: UserData):boolean => {

    if (!email || email.length === 0)
        return false;

    if (!username || username.length === 0)
        return false;

    if (!firstName || firstName.length === 0)
        return false;

    if (!lastName || lastName.length === 0)
        return false;

    return true;
}