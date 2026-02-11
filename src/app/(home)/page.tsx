"use client";

import BookIcon from "@/assets/book-regular.svg";
import ChartIcon from "@/assets/chart-multiple-regular.svg";
import CodeIcon from "@/assets/code-block-regular.svg";
import DesignIcon from "@/assets/design-ideas-regular.svg";
import LightbulbIcon from "@/assets/lightbulb-regular.svg";
import StarbulbIcon from "@/assets/star-regular.svg";
import FormSelect from "@/components/ui/SelectBox/SelectBox";

const OPTIONS = [
  {
    value: "student",
    label: "학생",
    icon: <BookIcon />,
  },
  {
    value: "designer",
    label: "디자이너",
    icon: <DesignIcon />,
  },
  {
    value: "developer",
    label: "개발자",
    icon: <CodeIcon />,
  },
  {
    value: "marketer",
    label: "마케터",
    icon: <ChartIcon />,
  },
  {
    value: "planner",
    label: "기획자",
    icon: <LightbulbIcon />,
  },
  {
    value: "other",
    label: "그외 직업군",
    icon: <StarbulbIcon />,
  },
];

import { FormProvider, useForm } from "react-hook-form";

export default function JobSelectionPage() {
  // 1. useForm 선언
  const methods = useForm({
    defaultValues: {
      myJob: "", // name과 일치해야 함
    },
  });

  const onSubmit = (data: any) => {
    console.log("선택된 데이터:", data);
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      {/* 2. 반드시 FormProvider로 감싸야 FormSelect 내부의 useFormContext가 작동함 */}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            직업을 선택해주세요
          </label>

          {/* 3. FormSelect 사용 */}
          <FormSelect
            name="myJob"
            items={OPTIONS}
            sizeW="M"
            sizeH="S"
            rules={{ required: "직업 선택은 필수입니다!" }}
          />

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            저장하기
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
