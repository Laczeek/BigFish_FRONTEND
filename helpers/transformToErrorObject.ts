import { IValidationError } from "@/store/auth-slice";
const transformToErrorObject = (objArray: IValidationError[] | []) => {
    const obj: {[key: string]: string} = {};

   objArray.forEach(error => obj[error.field] = error.msg);

   return obj;
}

export default transformToErrorObject;