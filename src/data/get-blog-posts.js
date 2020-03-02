const fs = require('fs');
const path = require('path');

const META = /export\s+const\s+meta\s+=\s+(\{([\s\S])*?\n\})/;
const DIR = path.join(__dirname, './posts/');
const files = fs
    .readdirSync(DIR)
    .filter((file) => file.endsWith('.md'));

module.exports = files
    .map(file => {
        const name = path.join(DIR, file);
        const contents = fs.readFileSync(name, 'utf8');
        const match = META.exec(contents);

        if (!match || typeof match[1] !== 'string')
            throw new Error(`${name} needs to export const meta = {}`);

        const meta = eval('(' + match[1] + ')');

        return {
            ...meta,
            path: '/blog/' + file.replace(/\.mdx?$/, '')
        };
    })
    .filter((meta) => meta.published)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
