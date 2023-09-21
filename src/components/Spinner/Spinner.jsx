import { Vortex } from "react-loader-spinner"

const Spinner = () => {
    return (
        <div className="h-[80vh] flex items-center justify-center">
            <Vortex
                visible={true}
                height="280"
                width="280"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>
    )
}

export default Spinner