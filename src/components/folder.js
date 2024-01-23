import React, { useState } from "react";

export default function Folder({ explorer , handleInsertNode}) {
    const [expanded, setExpanded] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: false,
    });

    const addNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setExpanded(true);
        setShowInput({
            visible: true,
            isFolder,
        });
    };

    const onAddFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleInsertNode(e.target.value, explorer.id, showInput.isFolder);
            setShowInput({ ...showInput, visible: false });
        }
    }
    return (
        <div>
            {explorer.isFolder ? (
                <div
                    
                >
                    <div style={{ display: "flex", width: "300px" }} onClick={(e) => {
                        e.stopPropagation();
                        setExpanded((prevExp) => !prevExp);
                    }}>
                        <div style={{ marginRight: "50px" }}>
                            {expanded ? "📂" : "📁"} {explorer.name}
                        </div>
                        <button onClick={(e) => addNewFolder(e, true)}>
                            + Folder
                        </button>
                        <button onClick={(e) => addNewFolder(e, false)}>
                            + File
                        </button>
                    </div>
                    <div style={{ paddingLeft: "25px" }}>
                        {showInput.visible && (
                            <>
                                {" "}
                                <span>
                                    {showInput.isFolder ? "📁" : "📄"}
                                </span>{" "}
                                <input
                                    onKeyDown={onAddFolder}
                                    onBlur={() =>
                                        setShowInput({
                                            ...showInput,
                                            visible: false,
                                        })
                                    }
                                />
                            </>
                        )}
                        {expanded &&
                            explorer.items.map((exp) => {
                                return <Folder explorer={exp}handleInsertNode={handleInsertNode}/>;
                            })}
                    </div>
                </div>
            ) : (
                <div> 📄 {explorer.name}</div>
            )}
        </div>
    );
}
