type technologiesType = {
    id: number,
    title: string
}

export type StudentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: {
        streetTitle: string,
        city: {
            title: string,
            countryTitle: string
        }
    },
    technologies: technologiesType[]

}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive =  true
}