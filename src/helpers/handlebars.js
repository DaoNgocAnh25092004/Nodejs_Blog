const Handlebars = require('handlebars');
const moment = require('moment');

module.exports = {
    // Handlebars helper to compare two values
    sum: (a, b) => a + b,
    // Handlebars helper to format date
    formatDate: (date, format) => moment(date).format(format),
    // Handlebars helper to sort table
    sortTable: (field, sort) => {
        console.log('🚀 ~ sort:', sort);
        const sortType =
            field === sort.column && ['desc', 'asc'].includes(sort.type)
                ? sort.type
                : 'default';
        console.log('🚀 ~ sortType:', sortType);
        const icons = {
            default: 'fa-solid fa-arrows-up-down',
            asc: 'fa-solid fa-arrow-up-short-wide',
            desc: 'fa-solid fa-arrow-up-wide-short',
        };

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };

        console.log('🚀 ~ sortType:', sortType);
        const icon = icons[sortType];
        const type = types[sortType];

        // Use to prevent hacker from injecting malicious code by pass parameter <script>alert('Hacked')</script>
        const href = Handlebars.escapeExpression(
            `?_sort&column=${field}&type=${type}`,
        );

        const output = `<a href="${href}">
            <i class="${icon}"></i>
        </a>`;

        return new Handlebars.SafeString(output);
    },
};
