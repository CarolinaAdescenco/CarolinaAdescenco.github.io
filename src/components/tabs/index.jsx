import * as React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Aside, Button } from "./styles"

const Tabs = ({ data }) => {
    const { edges } = data
    const [element, setElement] = React.useState(0)

    return (
        <>
            {edges.map(({ node }, index) => (
                <Button
                    key={index}
                    type="button"
                    active={index === element}
                    onClick={() => setElement(index)}
                >
                    {node.title}
                </Button>
            ))}

            <Aside>{renderRichText(edges[element].node.description)}</Aside>
        </>
    )
}

export default Tabs
