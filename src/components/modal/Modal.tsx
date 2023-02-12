import React = require("react");
type modalPosition = "modal-bottom" | "modal-middle";
type modalParameterType = {
    children?: any;
    className?: string;
    modalPosition?: modalPosition;
    modalId: string;
    clickOutside?: boolean;
};

export function ModalButton({
    children,
    className,
    modalId,
}: {
    children: any;
    className?: string;
    modalId: string;
}) {
    return (
        <label htmlFor={modalId} className={`${className} btn`}>
            {children}
        </label>
    );
}

export function ModalActionWrapper({
    children,
    className,
}: {
    children: any;
    className?: string;
}) {
    return <div className={`${className} modal-action`}>{children}</div>;
}

export function ModalBox({
    children,
    className,
    modalPosition,
    modalId,
    clickOutside,
}: modalParameterType) {
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id={modalId} className="modal-toggle" />
            {clickOutside == undefined || clickOutside == false ? (
                <div className={`modal backdrop-blur ${modalPosition ?? ""}`}>
                    <div className={`${className} modal-box relative`}>
                        {children}
                    </div>
                </div>
            ) : (
                <label
                    htmlFor={modalId}
                    className={`modal cursor-pointer backdrop-blur ${
                        modalPosition ?? ""
                    }`}
                >
                    <label
                        htmlFor=""
                        className={`${className} modal-box relative`}
                    >
                        {children}
                    </label>
                </label>
            )}
        </>
    );
}
