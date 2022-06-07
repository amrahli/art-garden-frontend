export interface Project {
    Title:string,
    Description: string
    form_fields: Array<FormFields>
}

export interface FormFields {
    Name:string,
    Label:string
}