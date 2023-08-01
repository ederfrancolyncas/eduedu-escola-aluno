import { Student } from './student';
import { useCallback } from "react";
import { MutationOptions, QueryOptions } from "./api-types";
import { API } from "./base"
import { useMutation, useQuery } from "@tanstack/react-query";
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

const KEY = {
    GET_STUDENT_PLANET_TRACK: 'GET_STUDENT_PLANET_TRACK'
}
const URL = {
    GET_STUDENT: (id: string) => `student/${id}`,
    GET_STUDENT_PLANET_TRACK: (id: string) => `student/${id}/planet-track`,
}

// RESERVED STUDENT:
const reservedStudent = useStudent.getState()

export class StudentAPI extends API {
    static async getStudent(id: string) {
        const { data } = await this.api.get(URL.GET_STUDENT(id));
        return data;
    }
    static async getStudentPlanetTrack(id: string) {
        const { data } = await this.api.get(URL.GET_STUDENT_PLANET_TRACK(id));
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

export function useGetStudentPlanetTrackMutation(
    options?: MutationOptions
) {
    const handler = useCallback(function (id: string) {
        return StudentAPI.getStudentPlanetTrack(id);
    }, []);

    return useMutation(handler, options);
}


export function useGetStudentPlanetTrackQuery(
    options?: QueryOptions
) {
    const handler = useCallback(
        function () {
            return StudentAPI.getStudentPlanetTrack(reservedStudent.id);
        },
        []
    );

    return useQuery([KEY.GET_STUDENT_PLANET_TRACK, options?.search], handler, options);
}