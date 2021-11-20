import React from "react";

export const imageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e && e.target.files) {
        return URL.createObjectURL(e.target.files[0])
    }
    return ""
}