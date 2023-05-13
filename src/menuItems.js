
export const Items=[
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'About Us',
        url: '/about',
        submenu:[
            {
                title: 'Our School',
                url: 'ourschool'
            },
            {
                title: 'Mission & Vision',
                url: 'mission'
            },
            {
                title: "Director's Message",
                url: 'director'
            },
            {
                title: "Principal's Message",
                url: 'principal'
            },
            
            
        ]
    },
    {
        title:'Gallery',
        url: '/gallery',
    },
    {
        title:'Admissions',
        url: '/admissions',
    },
    {
        title:'News & Events',
        url: '/news',
    },
    {
        title:'Facilities',
        url: '/facilities',
        submenu:[
            {
                title: 'Transportation',
                url: 'transportation',
            },
            {
                title: 'Innovation Labs',
                url: 'innovation',
            },
        ]
    },
]
export function menuItems(){
    return Items;
}