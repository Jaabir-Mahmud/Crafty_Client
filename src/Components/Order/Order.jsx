import "../Order/order.css"; // Import the CSS file

const Order = () => {
    return (
        <div className="centered-container flex flex-col items-center"> {/* Add centered-container and flex classes */}
            <div id="container" className="relative z-20">
                <div className="steam" id="steam1"> </div>
                <div className="steam" id="steam2"> </div>
                <div className="steam" id="steam3"> </div>
                <div className="steam" id="steam4"> </div>

                <div id="cup">
                    <div id="cup-body">
                        <div id="cup-shade"></div>
                    </div>
                    <div id="cup-handle"></div>
                    
                </div>

                <div id="saucer"></div>

                <div id="shadow"></div>
                
            </div>
            <div className="bg-pink-200 rounded p-8 mt-8 md:w-2/3 lg:w-1/2 text-center"> {/* Adjust width and margin */}
                <div className="font-bold hover:text-blue-500">
                    Surely You can Order, But right now, This page is under development. <br /> Back to you soon.....
                </div>
            </div>
        </div>
    );
};

export default Order;
