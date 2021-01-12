import axios from 'axios';
import { IBlog, IBlogOptional } from '../constants/IFormValues.constants';
import { LOCAL_BACKEND_URL } from '../constants/api.constants';

export const getAllBlogPosts = async () => {
    return new Promise((resolve, reject) => {
        try {
            axios.get(LOCAL_BACKEND_URL + '/api/blog/find/all').then((res: any) => {
                resolve(res.data);
            }).catch((e) => {
                reject(e.response);
            });
        } catch (err) {
            reject(err);
        };
    });
};

export const submitBlogPost = async (body: IBlog) => {
    return new Promise((resolve, reject) => {
        try {
            axios.post(LOCAL_BACKEND_URL + '/api/blog/create', body).then((res: any) => {
                resolve(res.data);
            }).catch((e) => {
                reject(e.response);
            });
        } catch (err) {
            reject(err);
        };
    });
};

export const updateBlogPost = async (body: IBlogOptional) => {
    return new Promise((resolve, reject) => {
        try {
            axios.put(LOCAL_BACKEND_URL + '/api/blog/update', body).then((res: any) => {
                resolve(res.data);
            }).catch((e) => {
                reject(e.response);
            });
        } catch (err) {

        };
    });
};

export const deleteBlogPost = async (_id: string) => {
    return new Promise((resolve, reject) => {
        try {
            axios.delete(LOCAL_BACKEND_URL + '/api/blog/delete/' + _id).then((res: any) => {
                resolve(res.data);
            }).catch((e) => {
                reject(e.response);
            });
        } catch (err) {
            reject(err);
        };
    });
};