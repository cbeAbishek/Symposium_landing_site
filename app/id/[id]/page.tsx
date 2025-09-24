import React from "react";

type Props = {
    params: {
        id: string;
    };
};

export default function Page({ params }: Props) {
    const { id } = params;

    return (
        <div style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
            <h1>Dynamic route</h1>
            <p>Requested id: {id}</p>
        </div>
    );
}