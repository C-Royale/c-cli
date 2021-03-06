const path = require('path')
const chalk = require('chalk')
const shell = require('shelljs')
const inquirer = require('inquirer')
const ora = require('ora')
const download = require('download-git-repo')
const which = require('which')
const exists = require('fs').existsSync

const npms = ['cnpm', 'npm']

const cwd = process.cwd()
const origin = 'daasfe/console-template'
const branch = '#master'

function findNpm () {
  for (var i = 0; i < npms.length; i++) {
    try {
      which.sync(npms[i])
      console.log('use npm: ' + npms[i])
      return npms[i]
    } catch (e) {
      console.log(chalk.red(e))
    }
  }
  throw new Error('please install npm')
}

module.exports = async function (args) {
  const autoInstall = !(args[3] === '--no-auto-install')

  const questions = [{
    type: 'input',
    name: 'name',
    message: '输入项目名称:'
  }, {
    type: 'input',
    name: 'path',
    message: '初始化到哪个目录 ? (默认为当前目录):'
  }]

  const answers = await inquirer.prompt(questions)
  const projectName = answers.name || 'jelement-project-template'
  const targetPath = path.join(cwd, answers.path || './')

  if (exists(path.join(targetPath, projectName))) {
    console.log(chalk.red('exit: 目录已存在'))
    return
  }

  const spinner = ora('downloading template...')
  spinner.start()

  download(`gitlab:git.jd.com:${origin}${branch}`, path.join(targetPath, projectName), { clone: true }, function (err) {
    spinner.stop()
    if (err) {
      console.log(chalk.red(`Failed to download repo`, err))
    } else {
      console.log(chalk.green(`Success to download repo to ${targetPath}`))

      if (!autoInstall) {
        return
      }

      const spinnerInstall = ora('Auto installing...')
      spinnerInstall.start()

      const npm = findNpm()

      shell.exec(`cd ${path.join(targetPath, projectName)} && ${npm} install && ${npm} run install-all`, function () {
        console.log(chalk.green(npm + ' install end'))
        spinnerInstall.stop()
      })
    }
  })
}
