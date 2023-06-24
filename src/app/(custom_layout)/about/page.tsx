'use client'

import React, {useEffect, useState} from "react";
import apiCall from "@/api/api";
import {faker} from "@faker-js/faker";

interface Paragraph {
    type: "paragraph";
    content: string;
}

interface List {
    type: "list";
    content: string[];
}

interface Content {
    mainTitle: string;
    subTitle: string;
    image: string;
    texts: Array<Paragraph | List>;
}

function Page() {
    const [content, setContent] = useState<Content | undefined>(undefined);

    useEffect(() => {
        apiCall<Content>({endpoint: 'contents/1'})
            .then(setContent)
    }, [])

    if (content === undefined) {
        return <h2>Loading</h2>
    }

    return (
        <>
            <h1 className="text-center mb-3 text-5xl">{content.mainTitle}</h1>
            <div className="max-w-5xl m-auto grid grid-cols-2">
                <div className="col-span-1">
                    <img src={faker.image.urlPicsumPhotos({width: 500})} alt=""/>
                </div>
                <div className="col-span-1">
                    <h3>{content.subTitle}</h3>
                    {content.texts.map((text, idx) => (
                        <React.Fragment key={idx}>
                            {text.type === 'paragraph' ? (
                                <p>{text.content}</p>
                            ) : (
                                <ul>
                                    {text.content.map((item) => (
                                        <li key={item}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Page;