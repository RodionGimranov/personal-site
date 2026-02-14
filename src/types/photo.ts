export interface PhotoBase {
    id: number;
    name: {
        ru: string;
        en: string;
    };
    date: string;
    url: string;
}

export interface PhotoWithHeight extends PhotoBase {
    height: number;
}
