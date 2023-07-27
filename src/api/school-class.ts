import { useMutation } from "@tanstack/react-query";
import { API } from "./base";
import { useCallback } from "react";
import { MutationOptions } from "./api-types";

const URL = {
    GET_STUDENTS_BY_ID: (id: string) => `schoolClass/${id}/students`
}

type SchoolClass = {
    id: string;
    name: string;
};

export class SchoolClassAPI extends API {
    static async getStudentsById(id: string) {
        const { data } = await this.api.get<SchoolClass>(URL.GET_STUDENTS_BY_ID(id))
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