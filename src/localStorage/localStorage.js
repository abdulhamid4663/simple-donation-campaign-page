function getStoredFromLocalStorage() {
    const storedData = localStorage.getItem('donation');
    if(storedData) {
        return JSON.parse(storedData);
    }

    return [];
}

function setDataToLocalStorage(id) {
    const storedData = getStoredFromLocalStorage();
    const exist = storedData.find(data => data === id)
    
    if(!exist) {
        const newData = [...storedData, id];
        localStorage.setItem("donation", JSON.stringify(newData));
    }

}

export {getStoredFromLocalStorage, setDataToLocalStorage}