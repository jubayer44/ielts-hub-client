import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            this is blog content
        </div>
    );
};

export default Blog;