export function getFullYear() {
    /* Returns the current year */
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex){
    if(isIndex){
        return "Holberton School";
    }
    return 'Holberton School main dashboard';
}
