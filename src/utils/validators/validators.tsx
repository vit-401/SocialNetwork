// export const requiredField = (value: string) => {
//     return value ? 'Error message' : "Field is required"
// }
//
// export const maxLengthCreator = (maxLength: number) => (value: string) => {
//     return value && value.length > maxLength ? `string length is more that ${maxLength} symbols` : "string length is good"
// }

export const required = (value: string) => (value || typeof value === 'number' ? undefined : 'Required')
export const maxLength = (max: number) => (value: string) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
// export const maxLengthCreator = (maxLength: number) => (value: string) => {
//     if( value.length>maxLength)return spa`string length is more that ${maxLength} symbols`
//     return "string length is good"
// }