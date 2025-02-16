'use client';
import React from 'react'
import { getProfile } from '@/api/profile/profile'
import { useEffect, useState } from 'react'

interface Profile {
    id : number;
    email : string;
}
const page = () => {
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const profileData = await getProfile();
            setProfile(profileData);
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1>profile page</h1>
            {profile ? (
                <div>
                    <p>id: {profile.id}</p>
                    <p>email: {profile.email}</p>
                </div>
            ) : (
                <p>loading...</p>
            )}
        </div>
    )
}

export default page
