import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        className={"pizza-block"}
        speed={2}
        width={280}
        height={481}
        viewBox="0 0 280 481"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="135" cy="130" r="120" />
        <rect x="0" y="280" rx="10" ry="10" width="280" height="24" />
        <rect x="0" y="330" rx="9" ry="9" width="281" height="72" />
        <rect x="9" y="432" rx="11" ry="11" width="88" height="27" />
        <rect x="117" y="425" rx="29" ry="24" width="154" height="42" />
    </ContentLoader>
)

export default MyLoader


