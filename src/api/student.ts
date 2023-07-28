import { Student } from './student';
import { useCallback } from "react";
import { MutationOptions } from "./api-types";
import { API } from "./base"
import { useMutation } from "@tanstack/react-query";
import { SchoolGrade, SchoolPeriod } from "./school-class";
import { useStudent } from '~/stores/student';

export type Student = {
    id: string;
    name: string;
    registry: string;
    schoolClassId: string;
    schoolClassName: string;
    schoolPeriod: SchoolPeriod;
    schoolGrade: SchoolGrade;
    cfo?: string;
    sea?: string;
    lct?: string;
};

const URL = {
    GET_STUDENT: (id: string) => `student/${id}`
}
const KEY = {
    BY_ID: "STUDENT_BY_ID",
};

export class StudentAPI extends API {
    static async getStudent(id: string) {
        const { data } = await this.api.get(URL.GET_STUDENT(id));
        return data;
    }
}


export function useGetStudent(
    options?: MutationOptions
) {
    const handler = useCallback(function (id: string) {
        return StudentAPI.getStudent(id);
    }, []);


    return useMutation(handler, {
        ...options,

        onSuccess: (data, vars, ctx) => {
            useStudent.setState({ ...data });
            options?.onSuccess?.(data, vars, ctx);
        },
    });
}