import {addSkill, makeStudentActive, StudentType} from "./03";

let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        name: "Andrey",
        age: 18,
        isActive: false,
        address: {
            streetTitle: "sda",
            city: {
                title: "ekb",
                countryTitle: "Russia"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            }
        ]

    }
})
test("new tech skill should be added to student", () => {
    addSkill(student, "JS")
    expect(student.technologies[3].id).toBeDefined()
    expect(student.technologies[3].title).toBe("JS")

    // expect(student.isActive).toBe(false)
    // makeStudentActive(student)
    // expect(student.isActive).toBe(true)
})