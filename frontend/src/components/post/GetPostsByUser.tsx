import { useEffect } from "react";
import { usePostStore } from "@/store/usePostStore";

const UserPosts = () => {
    const { userPosts, fetchUserPosts } = usePostStore();

    useEffect(() => {
        fetchUserPosts();
    }, []);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Benim Postlarım</h2>
            {userPosts.length > 0 ? (
                <ul>
                    {userPosts.map((post) => (
                        <li key={post.id} className="border p-4 mb-2">
                            <h3 className="font-semibold">{post.title}</h3>
                            <p>{post.content}</p>
                           
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Henüz postunuz yok.</p>
            )}
        </div>
    );
};

export default UserPosts;
