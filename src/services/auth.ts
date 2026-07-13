import type { Provider } from "@supabase/supabase-js";

import { createClient } from "@/utils/supabase/client";

export const signInWithProvider = async (provider: Provider) => {
    const supabase = createClient();
    const redirectTo = `${window.location.origin}/auth/callback`;

    return supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo,
        },
    });
};

export const signOut = async () => {
    const supabase = createClient();
    return supabase.auth.signOut();
};
