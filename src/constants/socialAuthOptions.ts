import type { Provider } from "@supabase/supabase-js";

import google from "@/assets/icons/sns/google.png";
import kakao from "@/assets/icons/sns/kakao.png";

export interface SocialAuthOption {
  id: number;
  name: string;
  icon: typeof google;
  provider: Provider;
}

export const socialAuthOptions: SocialAuthOption[] = [
  {
    id: 1,
    name: "Google",
    icon: google,
    provider: "google",
  },
  {
    id: 2,
    name: "Kakao",
    icon: kakao,
    provider: "kakao",
  },
];
