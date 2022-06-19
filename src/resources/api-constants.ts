export const baseUrl =
'https://art-garden-admin.herokuapp.com'
//'http://localhost:1337'

export const getData = (userId: number): string => {
    return baseUrl + '/api/data/' + userId
}

export const getServiceFields = (populate:boolean, lang:string): string => {
    return baseUrl + '/api/service-fields' + populate?'?populate=*':'';
}

export const getProjects = (populate:boolean, lang:string): string => {
    return baseUrl + '/api/projects' + populate?'?populate=*':'';
}