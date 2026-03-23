import PlusIcon from "@/assets/add-circle-regular.svg";
import BasicButton from "@/components/ui/Button/BasicButton";
import ProductLinkInput from "@/components/ui/Input/ProductLinkInput";
import AddProductLinkModal from "@/components/ui/Modal/AddProductLinkModal/AddProductLinkModal";
import ModalHeader from "@/components/ui/Modal/ModalHeader";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useFormContext, useWatch } from "react-hook-form";
import AddedProductListSection from "./AddedProductListSection";
import { UploadFormData } from "./UploadFormSection";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onAdd: () => Promise<void>;
}

const ProductLinkAddSection = ({ isOpen, onClose, onAdd }: Props) => {
    const isMobile = useIsMobile(800);
    const { control } = useFormContext<UploadFormData>();

    const products = useWatch({ control, name: "products" }) || [];

    const tempProductName =
        useWatch({ control, name: "tempProductName" }) || "";
    const tempProductLink =
        useWatch({ control, name: "tempProductLink" }) || "";

    const isAddDisabled = !tempProductName.trim() || !tempProductLink.trim();

    if (!isOpen) return null;

    // 1. 모바일 버전: 전체 화면 오버레이
    if (isMobile) {
        return (
            <div className="bg-white-200 fixed inset-0 z-100 flex flex-col px-6 py-3.5">
                <ModalHeader title="상품링크추가" onClose={onClose} />
                <div className="flex flex-1 flex-col overflow-hidden pt-3">
                    <div className="flex flex-col gap-3">
                        <ProductLinkInput
                            name="tempProductName"
                            label="상품명"
                            placeholder="상품이름을 입력하세요."
                        />
                        <ProductLinkInput
                            name="tempProductLink"
                            label="링크"
                            placeholder="상품링크를 입력하세요."
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <BasicButton
                            variant="primary"
                            size="small"
                            onClick={onAdd}
                            className="mt-4 h-7 w-24.75"
                            disabled={isAddDisabled}
                        >
                            <span>상품추가</span>
                            <PlusIcon className="size-5" />
                        </BasicButton>
                    </div>

                    <div className="border-black-500 mt-6 flex flex-1 flex-col border-t pt-4">
                        {products.length === 0 ? (
                            <div className="text-black-600 typo-mo-body-m400 flex h-full items-center justify-center">
                                추가된 상품 링크가 없습니다.
                            </div>
                        ) : (
                            <div className="flex-1 overflow-y-auto">
                                <AddedProductListSection />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // 2. PC 버전: 팝업 모달
    return (
        <AddProductLinkModal
            open={isOpen}
            setOpen={onClose}
            onAdd={onAdd}
            disabled={isAddDisabled}
        />
    );
};

export default ProductLinkAddSection;
