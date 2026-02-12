import { formatStat } from "@/utils/format-stat";
import Image from "next/image";

interface ProfileProps {
    isMe: boolean;
    userInfo: {
        profileImageUrl: string;
        nickname: string;
        following: number;
        followers: number;
    };
}

const Profile = ({ isMe, userInfo }: ProfileProps) => {
    const followStats = isMe
        ? [
              { label: "팔로잉", count: formatStat(userInfo.following) },
              { label: "팔로워", count: formatStat(userInfo.followers) },
          ]
        : [{ label: "팔로워", count: formatStat(userInfo.followers) }];

    return (
        <article className="pc:gap-8 flex items-center gap-4">
            <div className="pc:w-14 pc:h-14 bg-black-400 relative h-11 w-11 overflow-hidden rounded-full">
                <Image
                    src={userInfo.profileImageUrl}
                    alt="profile-image"
                    fill
                    className="object-center"
                />
            </div>

            <div className="pc:gap-0 flex flex-col gap-0.75">
                <div className="typo-mo-title-s700 pc:typo-pc-title-s700">
                    {userInfo.nickname}
                </div>
                <div className="flex items-center gap-2">
                    {followStats.map((stat) => (
                        <div
                            key={stat.label}
                            className="pc:gap-1 flex items-center gap-0.5"
                        >
                            <span className="typo-mo-body-m400 pc:typo-pc-body-m400">
                                {stat.label}
                            </span>
                            <span className="typo-mo-body-m400 pc:typo-pc-body-m400 pc:w-7 w-6">
                                {stat.count}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Profile;
