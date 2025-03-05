"use client";
import { useEffect, useState } from "react";
import { usePostStore } from "@/store/usePostStore";
import { deletePostById, updatePostByUser } from "@/api/post/post";

const UserPosts = () => {
    const { userPosts, fetchUserPosts } = usePostStore();
    const [editPost, setEditPost] = useState<{ id: number; title: string; content: string } | null>(null);
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        fetchUserPosts();
    }, []);

    const handleEditClick = (post: { id: number; title: string; content: string }) => {
        setEditPost(post);
        setNewTitle(post.title);
        setNewContent(post.content);
    };

    const handleUpdate = async () => {
        if (!editPost) return;
        setLoading(true);
        setErrorMessage("");

        try {
            await updatePostByUser(editPost.id, newTitle, newContent);
            fetchUserPosts();
        } catch (error) {
            setErrorMessage("Post güncellenirken hata oluştu.");
            console.error("Post güncellenirken hata oluştu:", error);
        } finally {
            setLoading(false);
            setEditPost(null);
        }
    };

    const handleDeletePost = async (postId: number) => {
        if (!confirm("Bu gönderiyi silmek istediğinizden emin misiniz?")) return;

        setLoading(true);
        setErrorMessage("");

        try {
            const response = await deletePostById(postId);

            if (response.success) {
                fetchUserPosts(); // Silinen postu UI'dan kaldır
            } else {
                setErrorMessage("Post silinemedi: " + response.message);
            }
        } catch (error) {
            setErrorMessage("Bir hata oluştu, lütfen tekrar deneyin.");
            console.error("Post silinirken hata oluştu:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen text-white">
            <h2 className="text-xl font-bold mb-4">My Posts</h2>
            {userPosts.length > 0 ? (
                <ul>
                    {userPosts.map((post) => (
                        <li key={post.id} className="border p-4 mb-2 flex justify-between">
                            <div>
                                <p className="text-gray-400 text-sm">Post ID: {post.id}</p>
                                <h3 className="font-semibold">{post.title}</h3>
                                <p>{post.content}</p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-3">
                                <button
                                    onClick={() => handleEditClick(post)}
                                    className="bg-blue-500 dark:bg-darkerBG dark:hover:bg-darkBg transition-all duration-300 hover:bg-blue-700 w-24 text-white font-bold py-1 px-3 rounded"
                                >
                                    Düzenle
                                </button>
                                <button
                                    onClick={() => handleDeletePost(post.id)}
                                    className="bg-red-500 hover:bg-red-700 dark:bg-greenBg dark:hover:bg-green-900 transition-all duration-300 w-24 text-white font-bold py-1 px-3 rounded"
                                    disabled={loading}
                                >
                                    {loading ? "Siliniyor..." : "Sil"}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>You don't have any posts yet.</p>
            )}

            {errorMessage && (
                <div className="text-red-500 mt-4">
                    <p>{errorMessage}</p>
                </div>
            )}

            {/* Edit Modal */}
            {editPost && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-gray-800 p-6 rounded-lg w-96">
                        <h2 className="text-lg font-bold mb-2">Edit Post</h2>
                        <input
                            type="text"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="w-full p-2 mb-2 bg-gray-700 border border-gray-600 rounded"
                        />
                        <textarea
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                            className="w-full p-2 mb-2 bg-gray-700 border border-gray-600 rounded"
                        />
                        <div className="flex justify-end">
                            <button
                                onClick={() => setEditPost(null)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleUpdate}
                                className={`bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded ${
                                    loading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                                disabled={loading}
                            >
                                {loading ? "Updating..." : "Update"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserPosts;
