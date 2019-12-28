export interface Card {
    name: string;
    slug: string;
    owner: string;
    id?: string;
    description?: string;
    imageUrl?: string;
    attributes: { [key: string]: any };
}
