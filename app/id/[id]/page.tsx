import React from "react";

type Props = {
    params: { id: string } | Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
    const { id } = await params;

    return (
        <div style={{ padding: 20, fontFamily: "system-ui, sans-serif", color: "#fff" }}>
            <h1>Dynamic route</h1>
            <p>Requested id: {id}</p>
        </div>
    );
}