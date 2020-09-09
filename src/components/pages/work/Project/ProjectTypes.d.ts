export interface IProjectInformation {
    title: string;
    image: string;
    link: string;
    tech: string[];
    content: React.ReactNode;
}

export interface IProject extends IProjectInformation {
    minHeight: number;
}