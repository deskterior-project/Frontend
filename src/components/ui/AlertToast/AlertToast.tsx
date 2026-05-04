"use client";

import React from "react";
import { Toast } from "radix-ui";
import { useAlertToast } from "@/store/alertToastStore";

const AlertToast = () => {
    const { open, firstMessage, secondMessage, duration, closeAlertToast } =
        useAlertToast();

    return (
        <Toast.Provider duration={duration} swipeDirection="down">
            <Toast.Root
                open={open}
                onOpenChange={(next) => {
                    if (!next) closeAlertToast();
                }}
                duration={duration}
                className="data-[state=open]:animate-toast-in data-[state=closed]:animate-toast-out"
            >
                <Toast.Description asChild>
                    <div className="bg-black-900 pc:px-4 pc:py-3 pc:min-w-147 min-w-82 px-4 py-3">
                        <p className="typo-mo-body-m400 pc:typo-pc-body-m400 text-white">
                            {firstMessage}
                        </p>
                        {secondMessage && (
                            <p className="typo-mo-body-m400 pc:typo-pc-body-m400 text-white">
                                {secondMessage}
                            </p>
                        )}
                    </div>
                </Toast.Description>
            </Toast.Root>

            <Toast.Viewport className="pc:bottom-12 fixed bottom-17 left-1/2 -translate-x-1/2" />
        </Toast.Provider>
    );
};

export default AlertToast;
