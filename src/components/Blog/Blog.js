import classes from './Blog.module.css'

const Blog = () => {
    return (
        <div className={classes.Blog}>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <p>My Blogs</p>
                </div>
            </div>
        </div>

    );
}

export default Blog;