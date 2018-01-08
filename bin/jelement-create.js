#!/usr/bin/env node

const program = require('commander')

program
    .usage('<template-name> [project-name]')
    .option('-t --type <type>', 'Component type', /^(table|form|detail)$/i, 'table')
    .parse(process.argv)

if (!program.args[0]) {
    console.error('[组件名]必填 - Please enter new component name');
    process.exit(1);
}

const path = require('path');
const fs = require('fs');
const exists = require('fs').existsSync;
const inquirer = require('inquirer');
const uppercamelcase = require('uppercamelcase');

const type = program.type
const compontName = uppercamelcase(program.args[0]);
const to = path.resolve(`${compontName}.vue` || '.')

if (exists(to)) {
    inquirer.prompt([{
        type: 'confirm',
        message: `${compontName}.vue exists. Continue?`,
        name: 'ok'
    }]).then(answers => {
        if (answers.ok) {
            run(to)
        }
    }).catch()
} else {
    run(to)
}

function run(path) {
    const content = readTplContent(type)
    fs.writeFileSync(path, content, (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
    })
}

function readTplContent(type) {
    const templatePath = path.resolve(__dirname, `../template/${type}.tpl`);
    const content = fs.readFileSync(templatePath, 'utf8');
    return content
}


