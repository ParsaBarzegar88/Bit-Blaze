"use server";

import { IProfileResponse } from "@/app/(public)/(auth)/register/profile/page";

export const ProfileFetch = async (
    prevState: IProfileResponse,
    formData: FormData,
): Promise<IProfileResponse> => {

    const phoneNumber = formData.get("phoneNumber");
    const password = formData.get("password");
    const userId = formData.get("userId");

    const baseURL = process.env.API_BASE_URL;

    console.log("API_BASE_URL:", baseURL);

    if (!phoneNumber && !password && !userId) {
        return {
            error: "لطفا مقادیر مورد نیاز  را وارد کنید",
            success: false
        }
    }

    try {
        console.log("Sending request with email:", phoneNumber, password);
        const response = await fetch(`${baseURL}/api/auth/complete-registration`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: userId,
                password: password,
                phoneNumber: phoneNumber
            }),
        });

        console.log("Response status:", response.status);
        const data = await response.json();
        console.log("Response data:", data);

        if (!response.ok) {
            return {
                message: "",
                user: data.user,
                error: "لطفا مقادیر مورد نیاز  را وارد کنید",
                success: false
            };
        }

        if(data.error) {
        return {
            message: data.message,
            user: data.user,
            error: "لطفا مقادیر مورد نیاز  را وارد کنید",
            success: false
        };    
        
        }
        return {
            message: data.message,
            user: data.user,
            error: "",
            success: true
        };
    } catch (error) {
        console.error("Error in PostUserEmail:", error);
        return { message: "خطای شبکه رخ داده است", error: "" };
    }
};