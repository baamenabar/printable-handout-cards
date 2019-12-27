export interface UserState {
    isInitialized: boolean;
    isAnonymous: boolean;
    uid: string;
    name: string;
    email: string;
    userData: {
        displayName?: string;
        avatarUrl?: string;
    };
}
