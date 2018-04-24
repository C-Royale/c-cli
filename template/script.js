module.exports = {
  table:
`export default {
  data () {
    return {
      currentPage1: 1,
      tableData: [
        {
          name: '文件名称',
          bucket: 'BUCKET',
          commitDateTime: '2017-12-1 09:23:34',
          doneDateTime: '2017-12-3 09:23:34'
        },
        {
          name: '文件名称',
          bucket: 'BUCKET',
          commitDateTime: '2017-12-1 09:23:34',
          doneDateTime: '2017-12-13 09:23:34'
        },
        {
          name: '文件名称',
          bucket: 'BUCKET',
          commitDateTime: '2017-12-13 09:23:34',
          doneDateTime: '2018-2-13 09:23:34'
        },
        {
          name: '文件名称',
          bucket: 'BUCKET',
          commitDateTime: '2017-8-13 09:23:34',
          doneDateTime: '2017-12-13 09:23:34'
        }
      ]
    }
  },
  methods: {
    handleSizeChange (val) {},
    handleCurrentChange (val) {}
  }
}`,
  advanceTable:
`const statusMap = {
  '驳回': 'jc-status-danger',
  '审批通过': 'jc-status-success',
  '待审批': 'jc-status-warning',
  '撤回': ''
}
export default {
  data () {
    return {
      statusMap: statusMap,
      currentPage1: 1,
      form: {},
      value6: '',
      value7: '',
      input5: '',
      select: '',
      radio3: '华北-北京',
      tableData: [
        {
          commitDateTime: '2017-12-1 09:23:34',
          doneDateTime: '2017-12-3 09:23:34',
          status: '驳回'
        },
        {
          commitDateTime: '2017-12-1 09:23:34',
          doneDateTime: '2017-12-13 09:23:34',
          status: '审批通过'
        },
        {
          commitDateTime: '2017-12-13 09:23:34',
          doneDateTime: '2018-2-13 09:23:34',
          status: '待审批'
        },
        {
          commitDateTime: '2017-8-13 09:23:34',
          doneDateTime: '2017-12-13 09:23:34',
          status: '撤回'
        }
      ],
      ruleForm: {
        sourceBucket: '',
        sourceFile: '',
        objectiveBucket: '',
        rule: '',
        objectiveFile: ''
      },
      rules: {
        sourceBucket: [
          { required: true, message: '请输入源 Bucket', trigger: 'blur' }
        ],
        sourceFile: [
          { required: true, message: '请输入源文件', trigger: 'blur' }
        ],
        objectiveBucket: [
          { required: true, message: '请输入目标 Bucket', trigger: 'blur' }
        ],
        rule: [
          { required: true, message: '请选择处理规则', trigger: 'change' }
        ],
        objectiveFile: [
          { required: true, message: '请输入目标文件名', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSizeChange (val) {},
    handleCurrentChange (val) {},
    filterStatus (value, row) {
      return row.status === value
    }
  }
}`,
  detail: '',
  advanceDetail: '',
  form:
`export default {
  name: 'basicForm',
  data () {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        value2: false
      },
      rules: {
        name: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        region: [
          {required: true, message: '请选择活动区域', trigger: 'change'}
        ],
        date1: [
          {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
        ],
        date2: [
          {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
        ],
        type: [
          {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
        ],
        resource: [
          {required: true, message: '请选择活动资源', trigger: 'change'}
        ],
        desc: [
          {required: true, message: '请填写活动形式', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}`,
  advanceForm:
`export default {
  data () {
    return {
      form: {},
      input: '',
      pickerOptions2: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      valueDate: '',
      value: '',
      active: 0,
      radio: '',
      radioOperationMode: 1,
      options: [
        {
          value: '选项1',
          label: '备份文件名1'
        },
        {
          value: '选项2',
          label: '备份文件名2'
        }
      ],
      tableDataSelectBackup: [
        {
          id: 1,
          name: 'TradeCode15',
          mode: '自动备份',
          granularity: '实例',
          size: '200MB',
          datetime: '2016-09-21 08:50:08'
        },
        {
          id: 2,
          name: 'TradeCode15',
          mode: '自动备份',
          granularity: '实例',
          size: '200MB',
          datetime: '2016-09-21 08:50:08'
        },
        {
          id: 3,
          name: 'TradeCode15',
          mode: '手动备份',
          granularity: '多库',
          size: '200MB',
          datetime: '2016-09-21 08:50:08'
        },
        {
          id: 4,
          name: 'TradeCode15',
          mode: '手动备份',
          granularity: '实例',
          size: '200MB',
          datetime: '2016-09-21 08:50:08'
        },
        {
          id: 5,
          name: 'TradeCode15',
          mode: '自动备份',
          granularity: '多库',
          size: '200MB',
          datetime: '2016-09-21 08:50:08'
        },
        {
          id: 6,
          name: 'TradeCode15',
          mode: '自动备份',
          granularity: '实例',
          size: '200MB',
          datetime: '2016-09-21 08:50:08'
        },
        {
          id: 7,
          name: 'TradeCode15',
          mode: '自动备份',
          granularity: '实例',
          size: '200MB',
          datetime: '2016-09-21 08:50:08'
        }
      ],
      currentRow: null
    }
  },
  methods: {
    setCurrent (row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    handleCurrentChangeTableRow (val) {
      this.currentRow = val
      this.radio = val ? val.id : ''
    },
    getCurrentRow (id) {
      this.radio = id
    }
  }
}`,
  stepsForm:
`export default {
  data () {
    return {
      form: {},
      input: '',
      pickerOptions2: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      valueDate: '',
      value: '备份文件名1',
      active: 0,
      currentPage1: 1,
      radio: '',
      radioOperationMode: 1,
      options: [
        {
          value: '选项1',
          label: '备份文件名1'
        },
        {
          value: '选项2',
          label: '备份文件名2'
        }
      ],
      tableData: [
        {
          accout: 'dxf_test (读写)',
          createDateTime: '2018-01-01 10:10:10',
          name: 'casename1271',
          characters: 'utf8'
        },
        {
          accout: 'dxf_test (读写)',
          createDateTime: '2018-01-01 10:10:10',
          name: 'casename1271',
          characters: 'utf8'
        },
        {
          accout: 'dxf_test (读写)',
          createDateTime: '2018-01-01 10:10:10',
          name: 'casename1271',
          characters: 'utf8'
        },
        {
          accout: 'dxf_test (读写)',
          createDateTime: '2018-01-01 10:10:10',
          name: 'casename1271',
          characters: 'utf8'
        }
      ],
      tableDataSelectCase: [
        {
          id: 1,
          caseName: 'TradeCode15',
          databaseVersion: '2008R21'
        },
        {
          id: 2,
          caseName: 'TradeCode151',
          databaseVersion: '2008R22'
        },
        {
          id: 3,
          caseName: 'TradeCode152',
          databaseVersion: '2008R23'
        },
        {
          id: 4,
          caseName: 'TradeCode153',
          databaseVersion: '2008R24'
        },
        {
          id: 5,
          caseName: 'TradeCode151',
          databaseVersion: '2008R22'
        },
        {
          id: 6,
          caseName: 'TradeCode152',
          databaseVersion: '2008R23'
        },
        {
          id: 7,
          caseName: 'TradeCode153',
          databaseVersion: '2008R24'
        }
      ],
      tableDataSelectBackup: [
        {
          id: 1,
          name: 'TradeCode15',
          mode: '自动备份',
          granularity: '实例',
          size: '200MB',
          datetime: '2016-09-21 08:50:08'
        },
        {
          id: 2,
          name: 'TradeCode15',
          mode: '自动备份',
          granularity: '实例',
          size: '200MB',
          datetime: '2016-09-21 08:50:08'
        },
        {
          id: 3,
          name: 'TradeCode15',
          mode: '手动备份',
          granularity: '多库',
          size: '200MB',
          datetime: '2016-09-21 08:50:08'
        },
        {
          id: 4,
          name: 'TradeCode15',
          mode: '手动备份',
          granularity: '实例',
          size: '200MB',
          datetime: '2016-09-21 08:50:08'
        },
        {
          id: 5,
          name: 'TradeCode15',
          mode: '自动备份',
          granularity: '多库',
          size: '200MB',
          datetime: '2016-09-21 08:50:08'
        },
        {
          id: 6,
          name: 'TradeCode15',
          mode: '自动备份',
          granularity: '实例',
          size: '200MB',
          datetime: '2016-09-21 08:50:08'
        },
        {
          id: 7,
          name: 'TradeCode15',
          mode: '自动备份',
          granularity: '实例',
          size: '200MB',
          datetime: '2016-09-21 08:50:08'
        }
      ],
      currentRow: null,
      dialogFormVisible: false
    }
  },
  methods: {
    setCurrent (row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    handleCurrentChangeTableRow (val) {
      this.currentRow = val
      this.radio = val ? val.id : ''
    },
    getCurrentRow (id) {
      this.radio = id
    },
    next () {
      if (this.active++ > 2) this.active = 1
    },
    pre () {
      if (this.active-- > 2) this.active = 1
    }
  }
}`
}
