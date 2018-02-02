#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const program = require('commander');
const inquirer = require('inquirer');
const uppercamelcase = require('uppercamelcase');
const chalk = require('chalk');

program
    .description('在当前目录创建模板')
    .on('--help', function () {
        console.log('  Examples:');
        console.log('');
        console.log('    $ jelement c / jelement create');
        console.log('    $ jelement c -h');
        console.log('');
    });
program.parse(process.argv)

function init() {
    inputComponentName()
        .then(nameAnswer => {
            if (nameAnswer.component) {
                compontName = uppercamelcase(nameAnswer.component)
                to = path.resolve(`${compontName}.vue`)
                if (fs.existsSync(to)) {
                    componentExistHandler(compontName)
                        .then(existAnswer => {
                            if (existAnswer.ok) {
                                handleTemplate()
                            }
                        })
                } else {
                    handleTemplate()
                }
            } else {
                console.log(chalk.bgRed('[组件名]必填 - Please enter the component file name'))
                process.exit(1);
            }
        })
}

function inputComponentName() {
    return inquirer.prompt([{
        type: 'input',
        message: `输入组件名称: `,
        name: 'component'
    }])
}

function componentExistHandler(component) {
    return inquirer.prompt([{
        type: 'confirm',
        message: `${component}.vue 文件已经存在. 是否覆盖当前文件?`,
        name: 'ok'
    }])
}

function selectBaseType() {
    return inquirer.prompt([{
        type: 'list',
        message: `选择基础模板类型`,
        choices: [{ name: 'Form (表单)', value: 'form' }, { name: 'Table ( 列表 )', value: 'table' }, { name: 'Detail ( 详情 )', value: 'detail' }],
        name: 'selected'
    }])
}

function accordingToSpecificTemplate(baseSelected) {
    let prompt = {
        type: 'list',
        name: 'path',
        message: '选择具体模板文件',
        choices: []
    }
    switch (baseSelected) {
        case 'form':
            prompt.choices = [{ name: '运营后台-基础表单', value: 'form/baseForm.tpl' }, { name: '运营后台-高级表单', value: 'form/advanceForm.tpl' }]
            break;
        case 'table':
            prompt.choices = [{ name: '运营后台-基础列表', value: 'table/baseTable.tpl' }, { name: '运营后台-高级表单', value: 'table/advanceTable.tpl' }]
            break;
        case 'detail':
            prompt.choices = [{ name: '运营后台-基础详情', value: 'detail/baseDetail.tpl' }, { name: '运营后台-高级详情', value: 'detail/advanceDetail.tpl' }]
            break;
    }

    return inquirer.prompt(prompt)
}

function selectTemplate() {
    return selectBaseType()
        .then(answer => {
            return accordingToSpecificTemplate(answer.selected)
        })
}

function handleTemplate() {
    selectTemplate()
        .then(answer => {
            const templatePath = path.resolve(__dirname, '../template', answer.path);
            const content = fs.readFileSync(templatePath, 'utf8');
            fs.writeFileSync(to, content, 'utf8')
            console.log(chalk.green('模板已生成...'))
        })
}

init();
