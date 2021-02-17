import React, { FC, useState } from 'react';
import ReactQuill from 'react-quill';

interface ITextEditorProps {
    height: string;
    width?: string;
    onChange?(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | any): any;
    value?: string;

}


const TextEditor: FC<ITextEditorProps> = ({ height, width, onChange, value }) => {

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean'], ['code-block']
        ],
    },

        formats = [
            'header', 'font', 'size',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image', 'code-block'
        ]

    return (
        <div className="container" style={{ height: height }}>
            <ReactQuill style={{ height: '100%' }} value={value} onChange={onChange} theme='snow' modules={modules} formats={formats} />
        </div>
    )
}

export default TextEditor;
