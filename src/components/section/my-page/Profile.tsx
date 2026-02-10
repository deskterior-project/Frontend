import { formatStat } from "@/utils/format-stat";
import Image from "next/image";
const userInfo = {
  id: 1,
  profileImageUrl: "/image.png",
  nickname: "nickname",
  following: 999,
  followers: 999,
};

const Profile = () => {
  const followStats = [
    { label: "팔로잉", count: formatStat(userInfo.following) },
    { label: "팔로워", count: formatStat(userInfo.followers) },
  ];
  return (
    <article className="flex items-center gap-4 pc:gap-8">
      <div className="w-11 h-11 pc:w-14 pc:h-14 rounded-full overflow-hidden relative bg-black-400">
        <Image
          src={userInfo.profileImageUrl}
          alt="profile-image"
          fill
          className="object-center"
        />
      </div>

      <div className="flex flex-col gap-0.75 pc:gap-0">
        <div className="typo-mo-title-s700 pc:typo-pc-title-s700">
          {userInfo.nickname}
        </div>
        <div className="flex items-center gap-2">
          {followStats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-0.5 pc:gap-1"
            >
              <span className="typo-mo-body-m400 pc:typo-pc-body-m400">
                {stat.label}
              </span>
              <span className="typo-mo-body-m400 pc:typo-pc-body-m400 w-6 pc:w-7">
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
