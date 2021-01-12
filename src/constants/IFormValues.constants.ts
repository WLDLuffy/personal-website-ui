export interface IBlog {
    UUID?: String;
    Title: String;
    PostContent: String;
}

export interface IBlogOptional {
    UUID?: String;
    Title?: String;
    PostContent?: String;
}

export interface IResume {
    UUID?: String;
    CompanyName: String;
    PositionHeld: String;
    Date: String;
    Description: String;
    ImageUrl: String;
}

export interface IResumeOptional {
    UUID?: String;
    CompanyName?: String;
    PositionHeld?: String;
    Date?: String;
    Description?: String;
    ImageUrl?: String;
}