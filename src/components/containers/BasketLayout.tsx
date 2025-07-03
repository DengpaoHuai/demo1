import { type ReactNode } from "react"

const BasketLayout = ({ children }: { children: ReactNode }) => {


    return (
        <div style={{

        }}>
            <p>nombre d'articles : </p>
            {children}
        </div>
    )

}

export default BasketLayout