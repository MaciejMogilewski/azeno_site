import apiCall from "@/api/api";
import Card from "@/components/Card";

interface Employee {
    fullName: string;
    position: string;
    phone: string;
    seniority: number;
    github: string;
    linkedin: string;
}

interface EmployeeId extends Employee {
    id: number;
}

async function Employees() {

    const employees = await apiCall<EmployeeId[]>({endpoint: 'employees'})

    return (
        <>
            <h1 className="text-center mb-3 text-5xl">
                Azeno heroes:
            </h1>
            <div className="flex gap-4 flex-wrap max-w-5xl m-auto">
                {employees.map(({fullName, photo, seniority, position, id, github, linkedin}) => (
                    <Card
                        key={id}
                        fullName={fullName}
                        photo={photo}
                        position={position}
                        seniority={seniority}
                        github={github}
                        linkedin={linkedin}
                    />
                ))}
            </div>
        </>
    );
}

export default Employees;