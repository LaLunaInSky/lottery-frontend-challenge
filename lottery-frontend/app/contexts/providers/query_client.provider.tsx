"use client"

import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";

const ProviderQueryClient = ({
    children
} : React.PropsWithChildren) => {
    const Client = new QueryClient();
    
    return (
        <QueryClientProvider
            client={
                Client
            }
        >
            { children }
        </QueryClientProvider>
    );
};

export default ProviderQueryClient;