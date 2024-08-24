import LeftSide from "../components/LeftSide"
import RightSide from "../components/RightSide"
import '../css/Blog.css'

function Blog() {
    return (
        <div className="blog">
            <div className="sides">
                <LeftSide />
                <RightSide />
            </div>
        </div >
    )
}

export default Blog