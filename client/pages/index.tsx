
import React from 'react';
import Navbar from '../components/navbar';
import MyLayout from '../layout/MyLyout';


const Index = () => {
    return (
        <>
            <MyLayout>
                <div className="center">
                    <h1>Добро пожаловать!</h1>
                    <h3>Здесь собраны лучшие треки!</h3>
                </div>
            </MyLayout>

            <style jsx>
                {`
                    .center {
                        margin-top: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                `}
            </style>
        </>
    );
};

export default Index;
