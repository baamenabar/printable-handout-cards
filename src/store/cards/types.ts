export interface StoreCard {
    name: string;
    slug: string;
    weight?: string;
    price?: number;
    summary?: string;
    description?: string;
    imageUrl?: string;
}

export interface CardListState {
    list: StoreCard[];
}
