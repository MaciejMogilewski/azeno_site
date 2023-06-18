'use client'

import {useEffect, useState} from "react";
import apiCall from "@/api/api";
import Card from "@/components/Card";

interface Employee {
    fullName: string;
    position: string;
    phone: string;
    seniority: number;
}

interface EmployeeId extends Employee {
    id: number;
}

function Page() {
    const [employess, setEmployees] = useState<EmployeeId[]>([]);

    useEffect(() => {
        const controller = new AbortController();

        apiCall<EmployeeId[]>({endpoint: 'employees', signal: controller.signal})
            .then(setEmployees)
            .catch(console.error)

        return () => {
            controller.abort();
        }
    }, [])

    return (
        <div className="flex gap-4 flex-wrap max-w-5xl m-auto">
            {employess.map(({fullName, photo, seniority, position, id}) => (
                <Card
                    key={id}
                    fullName={fullName}
                    photo={photo}
                    position={position}
                    seniority={seniority}
                />
            ))}
        </div>
    );
}

export default Page;