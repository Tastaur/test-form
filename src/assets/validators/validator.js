export const required = value =>{
  if(value) return undefined;
   return 'Field is required';
};

export const englishCharters = value =>
    value && /[^a-zA-Z]/i.test(value)
        ? 'English characters only'
        : undefined

export const maxLengthCreator = maxLength => value =>{
  if(value && value.length > maxLength) return `Max length is ${maxLength} symbol`;

   return undefined;

}
export const minLengthCreator = minLength => value  =>{
  if(value && value.length < minLength) return `Min length is ${minLength} symbol`;

  return undefined;

}
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined

export const strongPassword = value =>
    value && !/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i.test(value)
        ? `Password must have: 1 charter, 1 number, min 8 charters`
        : undefined


