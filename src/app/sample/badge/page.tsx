'use client";';

import Badge from "@/components/ui/Badge/Badge";

const Page = () => {
  const variants = ["outline", "solid", "outline_pastel"] as const;
  const colors = [
    "black",
    "success",
    "error",
    "bg-pink",
    "bg-blue",
    "bg-green",
  ] as const;

  return (
    <div className="p-10 flex flex-col justify-center items-center gap-10">
      <div className="text-xl font-bold">Badge 샘플페이지</div>

      <div className="flex flex-col gap-6">
        {variants.map((variant) => (
          <div key={variant}>
            <h2 className="mb-2 font-semibold">{variant}</h2>
            <div className="flex flex-wrap gap-4">
              {colors.map((color) => (
                <Badge
                  key={`${variant}-${color}`}
                  variant={variant}
                  color={color}
                  label="badge"
                />
              ))}
            </div>
          </div>
        ))}
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
