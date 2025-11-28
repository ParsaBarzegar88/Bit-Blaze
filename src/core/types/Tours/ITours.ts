export interface IToursItem {
    id: number,
    userId: number,
    title:string,
    address:string,
    photos: string[],
    description: string,
    tag: string,
    price: string,
    startDate: string,
    endDate: string,
    services:string[],
    facilities: string[],
    cancellationPeriodDays: number,
    locations: [
        {
            lat: string,
            lng: string,
            name: string
        },
        {
            lat: string,
            lng: string,
            name: string
        }
    ],
    schedule: [
        {
            title: string,
            todos: [
                {
                    time: string,
                    todo:string
                },
                {
                    time: string,
                    todo:string
                }
            ]
        },
        {
            title:string,
            todos: [
                {
                    time: string,
                    todo:string
                },
                {
                    time: string,
                    todo: string
                }
            ]
        }
    ],
    createdAt: string,
    updatedAt: string,
    TourRegistrations: string[]
}
export interface ITours {
    totalCount: number,
    tours: IToursItem[]
}

export interface IUserTours {
    totalCount: number,
    tours: IToursItem[],
    currentPage: number,
    totalPages: number
}

export interface IRegisterTour {
  fullName: string,
  phoneNumber: string,
  email:string,
  description: string,
  tourId: string
}

export interface ICreateTour {
    userId: number,
    title: string,
    address: string,
     photos: File[] | null,
    description: string,
    tag: string,
    price: string,
    startDate: string,
    endDate: string,
    services: [
        string
    ],
    facilities: [
        string
    ],
    cancellationPeriodDays: number,
    locations: [
        {
            name: string,
            lat: string, 
            lng: string 
        },
        {
            name: string, 
            lat: string,
            lng: string 
        }
    ],
    schedule: [
        {
            title: string,
            todos: [
                {
                    time: string,
                    todo: string
                },
                {
                    time: string,
                    todo: string
                }
            ]
        },
        {
            title: string,
            todos: [
                {
                    time: string,
                    todo: string
                },
                {
                    time: string,
                    todo: string
                }
            ]
        },
    ]
}

export interface IUpdateTour {
  title: string,
  price: string,
  description: string,
  photos?: string[],
  cancellationPeriodDays: number | undefined,
  services: string[],
  facilities: string[]
}
