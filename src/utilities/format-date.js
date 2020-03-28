const monthDictionary = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
};

export const formatDate = (date) => {
    const month = monthDictionary[date.getMonth()];
    const year = date.getFullYear();
    const day = date.getDate();

    return `${month} ${day}, ${year}`;
};