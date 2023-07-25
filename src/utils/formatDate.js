export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-Gb');
}

export function formatDateApi(date) {
    if (date) {
        const newDate = new Date(date);
        return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
    }
    return "";
};