export interface IBlog {
    UUID?: string;
    Title: string;
    PostContent: string;
}

export const IBlogValues = {
    Title: '',
    PostContent: ''
}

export interface IBlogOptional {
    UUID?: string;
    Title?: string;
    PostContent?: string;
}

export interface IResume {
    UUID?: string;
    CompanyName: string;
    PositionHeld: string;
    Date: string;
    Description: string;
    ImageUrl: string;
}

export interface IResumeOptional {
    UUID?: string;
    CompanyName?: string;
    PositionHeld?: string;
    Date?: string;
    Description?: string;
    ImageUrl?: string;
}