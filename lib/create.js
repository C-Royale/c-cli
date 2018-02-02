#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const write = require('write')
const program = require('commander')
const inquirer = require('inquirer')
const uppercamelcase = require('uppercamelcase')
const chalk = require('chalk')

const cwd = process.cwd()

program
    .description('JElement 工具集')
    .on('--help', function () {
        console.log('  Examples:')
        console.log('');
        console.log('    $ jelement c / jelement create')
        console.log('');
    })
program.parse(process.argv)

async function init() {
    const { component } = await inputComponentName()
    if (component) {
        compontName = uppercamelcase(component)
        const pathAnswer = await inputComponentPath()
        const targetPath = path.join(cwd, pathAnswer.path || './')
        to = path.resolve(targetPath, `${compontName}.vue`)
        if (fs.existsSync(to)) {
            const { ok } = await componentExistHandler(compontName)
            if (ok) handleTemplate()
        } else {
            handleTemplate()
        }
    } else {
        console.log(chalk.bgRed('[组件名]必填 - Please enter the component file name'))
        process.exit(1);
    }
}

function inputComponentName() {
    return inquirer.prompt([{
        type: 'input',
        message: `输入组件名称: `,
        name: 'component'
    }])
}

function inputComponentPath() {
    return inquirer.prompt([{
        type: 'input',
        message: `输入组件生成路径 ? (默认为 ./): `,
        name: 'path'
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

async function selectTemplate() {
    const { selected } = await selectBaseType()
    return accordingToSpecificTemplate(selected)
}

async function handleTemplate() {
    const answer = await selectTemplate()
    const templatePath = path.resolve(__dirname, '../template', answer.path)
    const content = fs.readFileSync(templatePath, 'utf8')
    write(to, content)
    console.log(chalk.green('模板已生成...'))
    console.log(chalk.green(`生成路径: ${to}`))
}

module.exports = init