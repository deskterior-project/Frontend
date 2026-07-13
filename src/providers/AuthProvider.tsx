"use client";
import { useEffect } from "react";

import { useAuthStore } from "@/store/authStore";
import { createClient } from "@/utils/supabase/client";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const setAuth = useAuthStore((s) => s.setAuth);
    const setReady = useAuthStore((s) => s.setReady);

    useEffect(() => {
        const supabase = createClient();

        supabase.auth.getSession().then(({ data }) => {
            setAuth(data.session);
            setReady(true);
        });

        const { data: sub } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setAuth(session);
            },
        );

        return () => sub.subscription.unsubscribe();
    }, [setAuth, setReady]);

    return <>{children}</>;
};

export default AuthProvider;
