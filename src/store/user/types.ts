export interface UserState {
    isInitialized: boolean;
    isAnonymous: boolean;
    name: string;
    email: string;
    userData: {
        displayName?: string;
        avatarUrl?: string;
    };
}
