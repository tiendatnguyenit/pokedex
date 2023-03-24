

export type SocialLogin = 'apple' | 'facebook' | 'google-oauth2';
export type PayloadSignupEmail = {
    name: string;
    email: string;
    password: string;
};
export type PayloadSignupSSO = {
    type: SocialLogin;
};

// authentication
export type AuthStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Register: undefined;
};

// main app
export type AppTabParamList = {
    Home: undefined;
    Contract: undefined;
    LoanAmount: undefined;
    Asset: undefined;
    Setting: undefined;
};

export type AppStackParamList = {
    AuthStack: undefined;
    AppStack: undefined;
} & AppTabParamList;



export type AllRouteParamList = AppStackParamList &
    AuthStackParamList;
