const path = require('path')
const fs = require('fs-extra')
const exists = require('fs-extra').existsSync
const write = require('write')
const inquirer = require('inquirer')
const uppercamelcase = require('uppercamelcase')
const chalk = require('chalk')

const cwd = process.cwd()

let componentName = ''
let absoluteTargetPath = ''

async function init () {
  const { name } = await inputComponentName()
  if (name) {
    componentName = uppercamelcase(name)
    const pathAnswer = await inputComponentPath()
    const targetPath = path.join(cwd, pathAnswer.path || './')
    absoluteTargetPath = path.resolve(targetPath, `${componentName}.vue`)
    if (exists(absoluteTargetPath)) {
      const { ok } = await componentExistHandler(componentName)
      if (ok) handleTemplate()
    } else {
      handleTemplate()
    }
  } else {
    throw new Error(chalk.red('[组件名]必填 - Please enter the component file name'))
  }
}

function inputComponentName () {
  return inquirer.prompt([{
    type: 'input',
    message: `输入组件名称: `,
    name: 'name'
  }])
}

function inputComponentPath () {
  return inquirer.prompt([{
    type: 'input',
    message: `输入组件生成路径 ? (默认为 ./): `,
    name: 'path'
  }])
}

function componentExistHandler (component) {
  return inquirer.prompt([{
    type: 'confirm',
    message: `${component}.vue 文件已经存在. 是否覆盖当前文件?`,
    name: 'ok'
  }])
}

function selectBaseType () {
  return inquirer.prompt([{
    type: 'list',
    message: `选择基础模板类型`,
    choices: [{ name: 'Form (表单)', value: 'form' }, { name: 'Table ( 列表 )', value: 'table' }, { name: 'Detail ( 详情 )', value: 'detail' }],
    name: 'selected'
  }])
}

function accordingToSpecificTemplate (baseSelected) {
  let prompt = {
    type: 'list',
    name: 'path',
    message: '选择具体模板文件',
    choices: []
  }
  switch (baseSelected) {
    case 'form':
      prompt.choices = [{ name: '运营后台-基础表单', value: 'form/baseForm.tpl' }, { name: '运营后台-高级表单', value: 'form/advanceForm.tpl' }]
      break
    case 'table':
      prompt.choices = [{ name: '运营后台-基础列表', value: 'table/baseTable.tpl' }, { name: '运营后台-高级表单', value: 'table/advanceTable.tpl' }]
      break
    case 'detail':
      prompt.choices = [{ name: '运营后台-基础详情', value: 'detail/baseDetail.tpl' }, { name: '运营后台-高级详情', value: 'detail/advanceDetail.tpl' }]
      break
  }

  return inquirer.prompt(prompt)
}

async function selectTemplate () {
  const { selected } = await selectBaseType()
  return accordingToSpecificTemplate(selected)
}

async function handleTemplate () {
  const answer = await selectTemplate()
  const templatePath = path.resolve(__dirname, '../template', answer.path)
  const content = fs.readFileSync(templatePath, 'utf8')
  write(absoluteTargetPath, content)
  console.log(chalk.green('模板已生成...'))
  console.log(chalk.green(`生成路径: ${absoluteTargetPath}`))
}

module.exports = init
