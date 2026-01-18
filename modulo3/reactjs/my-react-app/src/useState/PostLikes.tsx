
import { useState } from 'react';

export default function PostLikes() {
    const [likes, setLikes] = useState([0, 0, 0]);

    const likePost = (index: number) => {
        setLikes(prevLikes => {
            const newLikes = [...prevLikes];
            newLikes[index]++;
            return newLikes;
        });
    };

    return (
        <div>
            {likes.map((like, i) => (
                <div key={`post-${i}`}>
                    <p>Publicación {i + 1} - Likes: {like}</p>
                    <button onClick={() => likePost(i)}>Like</button>
                </div>
            ))}
        </div>
    );
}
