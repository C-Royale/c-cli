const path = require('path')
const exists = require('fs-extra').existsSync
const write = require('write')
const inquirer = require('inquirer')
const uppercamelcase = require('uppercamelcase')
const chalk = require('chalk')

const templateMap = require('../template/template')
const scriptMap = require('../template/script')

const cwd = process.cwd()

let componentName = ''
let absoluteTargetPath = ''
let template = ''

const defaultTemScopeRE = /\{\{temScope\}\}/g
const defaultScriptScopeRE = /\{\{scriptScope\}\}/g

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
    message: `选择布局`,
    choices: [{ name: '一级页面', value: 'level1' }, { name: '次级页面', value: 'secondary' }],
    name: 'selected'
  }])
}

async function selectLayout () {
  const { selected } = await selectBaseType()
  let prompt = {
    type: 'list',
    name: 'layout',
    message: '选择布局模板',
    choices: []
  }

  prompt.choices = [
    { name: '空白页', value: `${selected}-blank` },
    { name: 'tab 页', value: `${selected}-tab` },
    { name: 'section 页', value: `${selected}-section` },
    { name: 'tab + section 页', value: `${selected}-tabSection` }]
  return inquirer.prompt(prompt)
}

async function choiceContent () {
  let prompt = {
    type: 'list',
    name: 'content',
    message: '选择内容',
    choices: []
  }
  prompt.choices = [
    { name: '基础 Table', value: 'table' },
    { name: '高级 Table', value: 'advanceTable' },
    { name: '单列详情', value: 'detail' },
    { name: '多列详情', value: 'advanceDetail' },
    { name: '基本表单', value: 'form' },
    { name: '高级表单', value: 'advanceForm' },
    { name: '多步表单', value: 'stepsForm' }]

  return inquirer.prompt(prompt)
}

async function hanlderLayout () {
  const { layout } = await selectLayout()
  const layoutType = layout.split('-')[0]
  const layoutSelected = layout.split('-')[1]
  const LayoutTemplate = templateMap.layout[layoutType][layoutSelected]
  template = templateMap.base.replace(defaultTemScopeRE, LayoutTemplate)
}

async function hanlderContent () {
  const { content } = await choiceContent()
  const contentTemplate = templateMap.content[content]
  template = template.replace(defaultTemScopeRE, contentTemplate)
  hanlderScript(content)
}

async function hanlderScript (field) {
  const contentScript = scriptMap[field]
  template = template.replace(defaultScriptScopeRE, contentScript)
}

async function handleTemplate () {
  await hanlderLayout()
  await hanlderContent()
  write(absoluteTargetPath, template)
  console.log(chalk.green('模板已生成...'))
  console.log(chalk.green(`生成路径: ${absoluteTargetPath}`))
}

module.exports = init
