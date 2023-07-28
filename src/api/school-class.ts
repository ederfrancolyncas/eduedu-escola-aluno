import { useMutation } from "@tanstack/react-query";
import { API } from "./base";
import { useCallback } from "react";
import { MutationOptions } from "./api-types";

const URL = {
    GET_STUDENTS_BY_ID: (id: string) => `schoolClass/${id}/students`,
    RESERVE_STUDENT: (id: string, studentId: string) => `schoolClass/${id}/students/${studentId}/reserved`
}

type SchoolClass = {
    id: string;
    name: string;
};

type ReserveStudent = {
    id: string;
    studentId: string;
};

export class SchoolClassAPI extends API {
    static async getStudentsById(id: string) {
        const { data } = await this.api.get<SchoolClass>(URL.GET_STUDENTS_BY_ID(id))
        return data
    }
    static async reserveStudent(id: string, studentId: string) {
        const { data } = await this.api.patch(URL.RESERVE_STUDENT(id, studentId), { reserved: true })
        return data
    }
}

export function useStudentsBySchoolclass(
    options?: MutationOptions<
        { id: string },
        SchoolClass
    >
) {
    const handler = useCallback(function (data: {
        id: string;
    }) {
        return SchoolClassAPI.getStudentsById(data.id);
    },
        []);

    return useMutation(handler, options);
}

export function useReserveStudent(
    options?: MutationOptions<
        {
            id: string,
            studentId: string,
        },
        ReserveStudent
    >
) {
    const handler = useCallback(function (data: {
        id: string;
        studentId: string;
    }) {
        return SchoolClassAPI.reserveStudent(data.id, data.studentId)
    },
        []);

    return useMutation(handler, options);
}