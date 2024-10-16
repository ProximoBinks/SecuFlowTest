// pages/profile.js
import { useState } from 'react';
import Head from 'next/head';
import Layout from '@components/Layout';

export default function Profile() {
    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Security Analyst'
    });

    const handleUpdate = () => {
        // Example update functionality
        setUserData((prev) => ({
            ...prev,
            email: 'updated.email@example.com'
        }));
    };

    return (
        <Layout
            title="Profile — SecuFlow"
            description="Welcome to your profile.">
            <div>
                <Head>
                    <title>User Profile</title>
                </Head>
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">User Profile</h1>
                    <div className="bg-gray-100 p-4">
                        <div className="mb-4">
                            <h2 className="text-xl">Name: {userData.name}</h2>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl">Email: {userData.email}</h2>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl">Role: {userData.role}</h2>
                        </div>
                    </div>
                    <button onClick={handleUpdate} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                        Update Info
                    </button>
                </div>
            </div>
        </Layout>
    );
}
