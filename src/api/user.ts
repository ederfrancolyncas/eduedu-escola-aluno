import { useCallback } from "react";
import { API } from "./base";
import { Paginated } from "./api-types";
import { useQuery } from "@tanstack/react-query";

const KEY = {
    SCHOOL_CLASSES_ALL: 'SCHOOL_CLASSES_ALL'
}
const URL = {
    SCHOOL_CLASSES_ALL: 'user/school-classes/all'
}

type SchoolClass = {
    id: string;
    name: string;
};

type SchoolClassSearch = {
    "page-number"?: number;
    "page-size"?: number;
    name?: string;
    schoolGrade?: string;
    schoolPeriod?: string;
    schoolYearId?: string;
    teacherIds?: any;
};

export class UserAPI extends API {
    static async getSchoolClassesAll(params?: SchoolClassSearch) {
        const { data } = await this.api.get<Paginated<SchoolClass>>(URL.SCHOOL_CLASSES_ALL, {
            params,
        });
        return data;
    }
}

export function useSchoolClassesAll(
    options?: QueryOptions<
        Paginated<SchoolClass>,
        [string, SchoolClassSearch | undefined]
    > & { search?: SchoolClassSearch }
) {
    const handler = useCallback(
        function () {
            return UserAPI.getSchoolClassesAll(options?.search);
        },
        [options?.search]
    );

    return useQuery([KEY.SCHOOL_CLASSES_ALL, options?.search], handler, options);
}