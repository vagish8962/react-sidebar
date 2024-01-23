const traverseTree = () => {
    const insertNode = (expData, inputVal, id, isFolder) => {
        if( expData?.items) {
            expData?.items.forEach((node, index) =>  {
                if (node.id === id) {
                    node.items.unshift({
                        id: new Date().getTime(),
                        name: inputVal,
                        isFolder,
                        ...(isFolder && {items:  [] }),
                    })
                } else {
                    return insertNode(node, inputVal, id, isFolder)
                }
            })
        }
       

        return expData;
    }

    return { insertNode };
}

export default traverseTree