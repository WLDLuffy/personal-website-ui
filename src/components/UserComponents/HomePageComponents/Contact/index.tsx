import React, { FC } from 'react';

interface IContactProps {

}

const Contact: FC<IContactProps> = () => {
    return (
        <div className="container-fluid contact" >
            <div className="">
                <h4 style={{ color: '#2f6fdc' }}>Hit me up!</h4>
                <p>Share with me your exciting ideas! I'd be more than willing to listen!</p>
            </div>



        </div>
    )
}

export default Contact
