"use client";

import BasicButton from "@/components/ui/Button/BasicButton";
import HeaderMo from "@/components/ui/Header/HeaderMo";

import BookIcon from "@/assets/book-regular.svg";
import ChartIcon from "@/assets/chart-multiple-regular.svg";
import CodeIcon from "@/assets/code-block-regular.svg";
import DesignIcon from "@/assets/design-ideas-regular.svg";
import LightbulbIcon from "@/assets/lightbulb-regular.svg";
import StarbulbIcon from "@/assets/star-regular.svg";
import EditorToolBarSection from "@/components/section/posts/upload/EditorToolBarSection";
import Carousel from "@/components/ui/Carousel/Carousel";
import PostContentInput from "@/components/ui/Input/PostContentInput";
import PostTitleInput from "@/components/ui/Input/PostTitleInput";
import SelectBox from "@/components/ui/SelectBox/SelectBox";
import axios from "axios";
import { useState } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import AddedProductListSection from "./AddedProductListSection";
import ProductLinkAddSection from "./ProductLinkAddSection";

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

export interface UploadImage {
    id: number;
    url: string;
    file?: File;
}

export interface ProductLink {
    id: number;
    productName: string;
    productLink: string;
    favicon?: string;
    domain?: string;
}

export interface UploadFormData {
    category: string;
    title: string;
    content: string;
    images: UploadImage[];
    products: ProductLink[];
    tempProductName: string;
    tempProductLink: string;
}
const UploadFormSection = () => {
    const methods = useForm<UploadFormData>({
        defaultValues: {
            category: "",
            title: "",
            content: "",
            images: [],
            products: [],
            tempProductName: "",
            tempProductLink: "",
        },
    });
    const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);

    const { control, setValue, getValues, resetField } = methods;

    const category = useWatch({ control, name: "category" });
    const title = useWatch({ control, name: "title" });
    const content = useWatch({ control, name: "content" });
    const images = useWatch({ control, name: "images" });
    const products = useWatch({ control, name: "products" });

    const handleRemoveImage = (id: number) => {
        const updatedImages = images.filter((img: any) => img.id !== id);
        setValue("images", updatedImages);
    };

    const isSubmitDisabled =
        !category || !title.trim() || !content.trim() || images.length === 0;
    const onSubmit = (data: UploadFormData) => {
        console.log("최종 제출 데이터:", data);
    };

    const handleAddProductAction = async () => {
        const productName = getValues("tempProductName");
        const rawLink = getValues("tempProductLink");

        if (!rawLink?.trim()) return;

        const formattedLink = rawLink.startsWith("http")
            ? rawLink
            : `https://${rawLink}`;

        try {
            const response = await axios.get(
                `/api/extract-meta?url=${encodeURIComponent(formattedLink)}`
            );
            const { favicon, domain } = response.data;

            const newProduct = {
                id: Date.now(),
                productName: productName,
                productLink: formattedLink,
                domain: domain,
                favicon: favicon,
            };

            setValue("products", [...products, newProduct]);

            resetField("tempProductName");
            resetField("tempProductLink");
        } catch (err) {
            console.error("상품 추가 실패:", err);
            alert(
                "상품 링크에서 메타데이터를 가져오는 데 실패했습니다. 링크를 확인해주세요."
            );
        }
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="bg-white-200 space-y-4"
            >
                <HeaderMo
                    showBackButton={true}
                    title="글쓰기"
                    rightContent={
                        <BasicButton
                            variant="primary"
                            size="medium"
                            type="submit"
                            disabled={isSubmitDisabled}
                            className="whitespace-nowrap"
                        >
                            올리기
                        </BasicButton>
                    }
                />
                <main className="mo:pb-19 pc:pb-33 flex flex-col items-center justify-center gap-6 px-6 pt-14">
                    <SelectBox name="category" items={OPTIONS} />

                    <div className="flex flex-col gap-4">
                        <PostTitleInput name="title" placeholder="제목" />
                        <Carousel
                            images={images}
                            onRemove={handleRemoveImage}
                            aspectRatio="3 / 2"
                        />
                        <PostContentInput
                            name="content"
                            placeholder="내용을 입력해주세요."
                        />

                        {products.length > 0 && (
                            <div className="mo:gap-4 pc:gap-5 flex w-full flex-col">
                                <div className="border-black-500 w-full border-t" />
                                <h3 className="mo:typo-mo-title-s700 pc:type-pc-title-s700 text-black-900 text-left">
                                    추가된 상품
                                </h3>

                                <AddedProductListSection />
                            </div>
                        )}
                    </div>
                </main>
                <EditorToolBarSection
                    onLinkClick={() => setIsLinkModalOpen(true)}
                />
            </form>

            <ProductLinkAddSection
                isOpen={isLinkModalOpen}
                onClose={() => setIsLinkModalOpen(false)}
                onAdd={handleAddProductAction}
            />
        </FormProvider>
    );
};

export default UploadFormSection;
