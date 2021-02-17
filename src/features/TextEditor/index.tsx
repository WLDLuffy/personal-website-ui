import React, { FC, useState } from 'react';
import ReactQuill from 'react-quill';

interface ITextEditorProps {

}


const TextEditor: FC<ITextEditorProps> = () => {

    const [initialValue, setInitialValue] = useState<string>('')
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    },

        formats = [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
        ]

    return (
        <div className="container">
            <ReactQuill value={initialValue} onChange={(e) => { setInitialValue(e); console.log(initialValue) }} theme='snow' modules={modules} />
        </div>
    )
}

export default TextEditor;
