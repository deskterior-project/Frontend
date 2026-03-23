"use client";
import PlusIcon from "@/assets/add-circle-regular.svg";
import AddedProductListSection from "@/components/section/posts/upload/AddedProductListSection";
import { cn } from "@/hooks/cn";
import { useFormContext, useWatch } from "react-hook-form";
import BasicButton from "../../Button/BasicButton";
import ProductLinkInput from "../../Input/ProductLinkInput";
import Modal from "../Modal";
import ModalHeader from "../ModalHeader";

interface AddProductLinkModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    onAdd: () => void;
    disabled?: boolean;
}

const AddProductLinkModal = ({
    open,
    setOpen,
    onAdd,
    disabled,
}: AddProductLinkModalProps) => {
    const { control } = useFormContext();
    const products = useWatch({ control, name: "products" }) || [];

    return (
        <Modal
            open={open}
            setOpen={setOpen}
            border
            className={cn(
                "pc:w-[90vw] pc:max-w-160 pc:h-[90vh] pc:max-h-216 pc:px-4 pc:py-6"
            )}
            trigger={<div className="hidden" />}
        >
            <div className="flex h-full w-full flex-col gap-5">
                <ModalHeader
                    title="상품링크추가"
                    onClose={() => setOpen(false)}
                />

                <div className="space-y-4 px-1">
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
                        size="medium"
                        onClick={onAdd}
                        className="h-10 w-34.5"
                        disabled={disabled}
                    >
                        <span>상품추가</span>
                        <PlusIcon className="size-6" />
                    </BasicButton>
                </div>
                <div className="border-black-500 w-full border-t" />
                <div className="flex flex-1 flex-col gap-3 overflow-y-auto">
                    {products.length === 0 ? (
                        <div className="text-black-600 typo-pc-body-m400 flex h-full items-center justify-center">
                            추가된 상품 링크가 없습니다.
                        </div>
                    ) : (
                        <AddedProductListSection />
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default AddProductLinkModal;
