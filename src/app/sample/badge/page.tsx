'use client";';

import Badge from "@/components/ui/Badge/Badge";

const Page = () => {
  return (
    <div className="p-10 flex flex-col justify-center items-center gap-10">
      <div className="text-xl font-bold">Badge 샘플페이지</div>
      <h1>pc</h1>
      <div className="flex gap-6">
        {/* 검 / Success / Error */}

        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <Badge color="black" variant="outline" size="pc" />
            <Badge color="black" variant="solid" size="pc" />
            <Badge color="black" variant="outline_pastel" size="pc" />
          </div>
          <div className="flex flex-col gap-3">
            <Badge color="success" variant="outline" size="pc" />
            <Badge color="success" variant="solid" size="pc" />
            <Badge color="success" variant="outline_pastel" size="pc" />
          </div>
          <div className="flex flex-col gap-3">
            <Badge color="error" variant="outline" size="pc" />
            <Badge color="error" variant="solid" size="pc" />
            <Badge color="error" variant="outline_pastel" size="pc" />
          </div>
        </div>
        {/* bg-pink / bg-blue / bg-green */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <Badge color="bg-pink" variant="outline" size="pc" />
            <Badge color="bg-pink" variant="solid" size="pc" />
            <Badge color="bg-pink" variant="outline_pastel" size="pc" />
          </div>
          <div className="flex flex-col gap-3">
            <Badge color="bg-blue" variant="outline" size="pc" />
            <Badge color="bg-blue" variant="solid" size="pc" />
            <Badge color="bg-blue" variant="outline_pastel" size="pc" />
          </div>
          <div className="flex flex-col gap-3">
            <Badge color="bg-green" variant="outline" size="pc" />
            <Badge color="bg-green" variant="solid" size="pc" />
            <Badge color="bg-green" variant="outline_pastel" size="pc" />
          </div>
        </div>
      </div>
      <h1>mobile</h1>
      {/* 모바일 예시 */}
      <div className="flex gap-6 mt-6">
        {/* 검 / Success / Error */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <Badge color="black" variant="outline" size="mobile" />
            <Badge color="black" variant="solid" size="mobile" />
            <Badge color="black" variant="outline_pastel" size="mobile" />
          </div>
          <div className="flex flex-col gap-3">
            <Badge color="success" variant="outline" size="mobile" />
            <Badge color="success" variant="solid" size="mobile" />
            <Badge color="success" variant="outline_pastel" size="mobile" />
          </div>
          <div className="flex flex-col gap-3">
            <Badge color="error" variant="outline" size="mobile" />
            <Badge color="error" variant="solid" size="mobile" />
            <Badge color="error" variant="outline_pastel" size="mobile" />
          </div>
        </div>

        {/* bg-pink / bg-blue / bg-green */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <Badge color="bg-pink" variant="outline" size="mobile" />
            <Badge color="bg-pink" variant="solid" size="mobile" />
            <Badge color="bg-pink" variant="outline_pastel" size="mobile" />
          </div>
          <div className="flex flex-col gap-3">
            <Badge color="bg-blue" variant="outline" size="mobile" />
            <Badge color="bg-blue" variant="solid" size="mobile" />
            <Badge color="bg-blue" variant="outline_pastel" size="mobile" />
          </div>
          <div className="flex flex-col gap-3">
            <Badge color="bg-green" variant="outline" size="mobile" />
            <Badge color="bg-green" variant="solid" size="mobile" />
            <Badge color="bg-green" variant="outline_pastel" size="mobile" />
          </div>
        </div>
      </div>

      <h2>하드코딩한 부분----------------------------------</h2>

      {/* pc */}
      <p>pc</p>
      <div className="flex gap-6">
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border border-[var(--color-black-900)] [color:var(--color-black-900)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border border-[var(--color-black-900)] [color:var(--color-white-200)] [background-color:var(--color-black-900)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border-none [color:var(--color-black-900)] [background-color:var(--color-black-200)] flex items-center justify-center">
              badge
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border border-[var(--color-success-700)] [color:var(--color-success-700)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border border-[var(--color-black-900)] [color:var(--color-white-200)] [background-color:var(--color-success-700)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border-none [color:var(--color-success-700)] [background-color:var(--color-success-100)] flex items-center justify-center">
              badge
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border border-[var(--color-error-600)] [color:var(--color-error-600)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border border-[var(--color-error-600)] [color:var(--color-white-200)] [background-color:var(--color-error-600)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border-none [color:var(--color-error-600))] [background-color:var(--color-error-100)] flex items-center justify-center">
              badge
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border border-[var(--color-black-900)] [color:var(--color-black-900)] [background-color:var(--color-bg-pink)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border border-[var(--color-black-900)] [color:var(--color-bg-pink)] [background-color:var(--color-black-900)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border-none [color:var(--color-black-900)] [background-color:var(--color-bg-pink)] flex items-center justify-center">
              badge
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border border-[var(--color-black-900)] [color:var(--color-black-900)] [background-color:var(--color-bg-blue)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border border-[var(--color-black-900)] [color:var(--color-bg-blue)] [background-color:var(--color-black-900)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border-none [color:var(--color-black-900)] [background-color:var(--color-bg-blue)] flex items-center justify-center">
              badge
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border border-[var(--color-black-900)] [color:var(--color-black-900)] [background-color:var(--color-bg-green)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border border-[var(--color-black-900)] [color:var(--color-bg-green)] [background-color:var(--color-black-900)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-pc-body-s400 w-[59px] h-[30px] border-none [color:var(--color-black-900))] [background-color:var(--color-bg-green)] flex items-center justify-center">
              badge
            </span>
          </div>
        </div>
      </div>
      {/* mobile */}
      <p>mobile</p>
      <div className="flex gap-6">
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border border-[var(--color-black-900)] [color:var(--color-black-900)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border border-[var(--color-black-900)] [color:var(--color-white-200)] [background-color:var(--color-black-900)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border-none [color:var(--color-black-900)] [background-color:var(--color-black-200)] flex items-center justify-center">
              badge
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border border-[var(--color-success-700)] [color:var(--color-success-700)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border border-[var(--color-black-900)] [color:var(--color-white-200)] [background-color:var(--color-success-700)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border-none [color:var(--color-success-700)] [background-color:var(--color-success-100)] flex items-center justify-center">
              badge
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border border-[var(--color-error-600)] [color:var(--color-error-600)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border border-[var(--color-error-600)] [color:var(--color-white-200)] [background-color:var(--color-error-600)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border-none [color:var(--color-error-600)] [background-color:var(--color-error-100)] flex items-center justify-center">
              badge
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border border-[var(--color-black-900)] [color:var(--color-black-900)] [background-color:var(--color-bg-pink)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border border-[var(--color-black-900)] [color:var(--color-bg-pink)] [background-color:var(--color-black-900)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border-none [color:var(--color-black-900)] [background-color:var(--color-bg-pink)] flex items-center justify-center">
              badge
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border border-[var(--color-black-900)] [color:var(--color-black-900)] [background-color:var(--color-bg-blue)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border border-[var(--color-black-900)] [color:var(--color-bg-blue)] [background-color:var(--color-black-900)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border-none [color:var(--color-black-900)] [background-color:var(--color-bg-blue)] flex items-center justify-center">
              badge
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border border-[var(--color-black-900)] [color:var(--color-black-900)] [background-color:var(--color-bg-green)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border border-[var(--color-black-900)] [color:var(--color-bg-green)] [background-color:var(--color-black-900)] flex items-center justify-center">
              badge
            </span>
            <span className="typo-mo-body-s400 w-[49px] h-[24px] border-none [color:var(--color-black-900)] [background-color:var(--color-bg-green)] flex items-center justify-center">
              badge
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

// mobile(w-49px h-24px py-4px px-8px mo body s 400)

// size=mobile, type=outline_pastel, color=green
// size=mobile, type=outline_pastel, color=blue
// size=mobile, type=outline_pastel, color=pink
// size=mobile, type=outline_pastel, color=error
// size=mobile, type=outline_pastel, color=success
// size=mobile, type=outline_pastel, color=primary
// size=mobile, type=solid, color=green
// size=mobile, type=solid, color=blue
// size=mobile, type=solid, color=pink
// size=mobile, type=solid, color=error
// size=mobile, type=solid, color=success
// size=mobile, type=solid, color=primary
// size=mobile, type=outline, color=green
// size=mobile, type=outline, color=blue
// size=mobile, type=outline, color=pink
// size=mobile, type=outline, color=error
// size=mobile, type=outline, color=success
// size=mobile, type=outline, color=primary

// pc(w-59 h-30 py-4px px-8px pc body s 400)

// size=PC, type=outline_pastel, color=green
// size=PC, type=outline_pastel, color=blue
// size=PC, type=outline_pastel, color=pink
// size=PC, type=outline_pastel, color=error
// size=PC, type=outline_pastel, color=success
// size=PC, type=outline_pastel, color=primary
// size=PC, type=solid, color=green
// size=PC, type=solid, color=blue
// size=PC, type=solid, color=pink
// size=PC, type=solid, color=error
// size=PC, type=solid, color=success
// size=PC, type=solid, color=primary
// size=PC, type=outline, color=green
// size=PC, type=outline, color=blue
// size=PC, type=outline, color=pink
// size=PC, type=outline, color=error
// size=PC, type=outline, color=success
// size=PC, type=outline, color=primary
