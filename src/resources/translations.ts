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
                whoWeAre:'Biz kimik?!',
                fullName: 'Adınız və soyadınız',
                email: 'E-poçt ünvanı',
                phoneNumber: "Telefon nömrəsi",
                yourMessage: "Mesajınız",
                typeYourName: "Ad və soyadınızı daxil edin",
                typeYourEmail:"E-poçt ünvanınızı daxil edin",
                typeYourPhone:"Telefon nömrənizi daxil edin",
                typeYourMessage:"Mesajınızı yazın",
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
        },
        common:{
            more:"Ətraflı"
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

    return {...translations[language].components[component],...translations[language].common}
}

export default getContent
