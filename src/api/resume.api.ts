import axios from 'axios';
import { IResume, IResumeOptional } from '../constants/IFormValues.constants';
import { LOCAL_BACKEND_URL } from '../constants/api.constants';

export const getAllResumes = async () => {
    return new Promise((resolve, reject) => {
        try {
            axios.get(LOCAL_BACKEND_URL + '/api/resume/find/all').then((res: any) => {
                resolve(res.data);
            }).catch((e) => {
                reject(e.response);
            });
        } catch (err) {
            reject(err);
        };
    });
};


export const submitResume = async (body: IResume) => {
    return new Promise((resolve, reject) => {
        try {
            axios.post(LOCAL_BACKEND_URL + '/api/resume/create', body).then((res: any) => {
                resolve(res.data);
            }).catch((e) => {
                reject(e.response);
            });
        } catch (err) {
            reject(err);
        };
    });
};

export const updateResume = async (body: IResumeOptional) => {
    return new Promise((resolve, reject) => {
        try {
            axios.put(LOCAL_BACKEND_URL + '/api/resume/update', body).then((res: any) => {
                resolve(res.data);
            }).catch((e) => {
                reject(e.response);
            });
        } catch (err) {
            reject(err);
        };
    });
};

export const deleteResume = async (_id: string) => {
    return new Promise((resolve, reject) => {
        try {
            axios.delete(LOCAL_BACKEND_URL + '/api/resume/delete/' + _id).then((res: any) => {
                resolve(res.data);
            });
        } catch (err) {
            reject(err);
        };
    });
};