import ChevronLeftRegular from "@/assets/chevron-left-regular.svg";

const UploadContainer = () => {
  return (
    <div className="flex">
      <ChevronLeftRegular className="w-5 h-5" />
      <h2 className="typo-mo-title-l700">글쓰기</h2>

      <button className="bg-blue-500 text-white p-2 rounded">Upload</button>
    </div>
  );
};

export default UploadContainer;
