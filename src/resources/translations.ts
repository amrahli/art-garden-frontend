const translations :any = {
    az: {
        components: {
            home: {
                whoWeAre:"Biz kimik",
                services:"Xidmətlər",
                projects:"",
                events:""
            },
            about: {
                aboutUs: 'Haqqımızda',
                ourStory: 'Hekayəmiz',
                partnership: 'Tərəfdaşlıq',
                contact: 'Əlaqə',
                joinUs:'Bizə qoşul',
                whoWeAre:'Biz kimik?!'
            },
            services:{
                services:"Xidmətlər"
            },
            projects:{
                projects:"Layihələr"
            },
            events:{
                events:"Tədbirlər"
            },
            footer: {
                copyright:"Bütün hüquqları qorunur &copy; ArtGarden " + new Date().getFullYear()
            },
            header: {
                menu:{
                    services:"Xidmətlər",
                    aboutUs:"Haqqımızda",
                    projects:"Layihələr",
                    events:"Tədbirlər",
                    joinUs:"Bizə qoşul"
                }
            }
        }
    },
    en: {
        pages: {
            home: {},
            about: {
                pageHeader: 'About Us'
            }
        },
        global: {
            footer: {},
            header: {}
        }
    }
}

const getContent = (component: string, language: string) => {
    //console.log(123)

    return {...translations[language].components[component]}
}

export default getContent
