module.exports = {
  base: `
<template>
  {{temScope}}
</template>
<script>
{{scriptScope}}
</script>
`,
  layout: {
    level1: {
      blank:
  `<div>
    <div class="jc-page-header">
      <h1>
        <i class="el-icon-my-circle-bold"></i>页面一级标题
      </h1>
      <div class="jc-box-action">
        <a href="#">文字链接</a>
        <el-dropdown>
          <span class="el-dropdown-link">
            操作
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>操作一</el-dropdown-item>
            <el-dropdown-item>操作二</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="jc-page-content">
      <!--content-->
      {{temScope}}
      <!--content end-->
    </div>
  </div>`,
      tab:
  `<div>
    <div class="jc-page-header">
      <h1>
        <i class="el-icon-my-circle-bold"></i>页面一级标题
      </h1>
      <div class="jc-box-action">
        <a href="#">文字链接</a>
        <el-dropdown>
          <span class="el-dropdown-link">
            操作
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>操作一</el-dropdown-item>
            <el-dropdown-item>操作二</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="jc-page-content">
      <el-tabs type="border-card">
        <el-tab-pane label="Tab1 页面">
          <!--content-->
          {{temScope}}
          <!--content end-->
        </el-tab-pane>
        <el-tab-pane label="Tab2 页面">
          <!--content-->
          {{temScope}}
          <!--content end-->
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>`,
      section:
  `<div>
    <div class="jc-page-header">
      <h1>
        <i class="el-icon-my-circle-bold"></i>页面一级标题
      </h1>
      <div class="jc-box-action">
        <a href="#">文字链接</a>
        <el-dropdown>
          <span class="el-dropdown-link">
            操作
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>操作一</el-dropdown-item>
            <el-dropdown-item>操作二</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="jc-page-content">
      <div class="jc-section">
        <div class="jc-section-header">
          <h3 class="jc-section-title">section 标题</h3>
        </div>
        <div class="jc-section-content">
          <!--content-->
          {{temScope}}
          <!--content end-->
        </div>
      </div>
      <div class="jc-section">
        <div class="jc-section-header">
          <h3 class="jc-section-title">section 标题</h3>
        </div>
        <div class="jc-section-content">
          <!--content-->
          {{temScope}}
          <!--content end-->
        </div>
      </div>
    </div>
  </div>`,
      tabSection:
  `<div>
    <div class="jc-page-header">
      <h1>
        <i class="el-icon-my-circle-bold"></i>页面一级标题
      </h1>
      <div class="jc-box-action">
        <a href="#">文字链接</a>
        <el-dropdown>
          <span class="el-dropdown-link">
            操作
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>操作一</el-dropdown-item>
            <el-dropdown-item>操作二</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="jc-page-content">
      <el-tabs type="border-card">
        <el-tab-pane label="Tab1 页面">
          <div class="jc-section">
            <div class="jc-section-header">
              <h3 class="jc-section-title">section 标题</h3>
            </div>
            <div class="jc-section-content">
              <!--content-->
              {{temScope}}
              <!--content end-->
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Tab2 页面">
          <div class="jc-section">
            <div class="jc-section-header">
              <h3 class="jc-section-title">section 标题</h3>
            </div>
            <div class="jc-section-content">
              <!--content-->
              {{temScope}}
              <!--content end-->
            </div>
          </div>
          <div class="jc-section">
            <div class="jc-section-header">
              <h3 class="jc-section-title">section 标题</h3>
            </div>
            <div class="jc-section-content">
              <!--content-->
              {{temScope}}
              <!--content end-->
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>`
    },
    secondary: {
      blank:
  `<div>
    <div class="jc-page-header">
      <h1>
        <a href="#">
          <i class="el-icon-my-angle-left-bold"></i>
        </a>页面一级标题
        <small>页面二级标题</small>
      </h1>
      <div class="jc-status jc-status-success">状态显示</div>
      <el-popover ref="popover2" placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"></el-popover>
      <a href="#" v-popover:popover2 class="el-icon-my-help"></a>
      <div class="jc-box-action">
        <a href="#">文字链接</a>
        <el-dropdown>
          <span class="el-dropdown-link">
            操作
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>操作一</el-dropdown-item>
            <el-dropdown-item>操作二</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="jc-page-content">
      <!--content-->
      {{temScope}}
      <!--content end-->
    </div>
  </div>`,
      tab:
  `<div>
    <div class="jc-page-header">
      <h1>
        <a href="#">
          <i class="el-icon-my-angle-left-bold"></i>
        </a>页面一级标题
        <small>页面二级标题</small>
      </h1>
      <div class="jc-status jc-status-success">状态显示</div>
      <el-popover ref="popover2" placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"></el-popover>
      <a href="#" v-popover:popover2 class="el-icon-my-help"></a>
      <div class="jc-box-action">
        <a href="#">文字链接</a>
        <el-dropdown>
          <span class="el-dropdown-link">
            操作
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>操作一</el-dropdown-item>
            <el-dropdown-item>操作二</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="jc-page-content">
      <el-tabs type="border-card">
        <el-tab-pane label="Tab1 页面">
          <!--content-->
          {{temScope}}
          <!--content end-->
        </el-tab-pane>
        <el-tab-pane label="Tab2 页面">
          <!--content-->
          {{temScope}}
          <!--content end-->
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>`,
      section:
  `<div>
    <div class="jc-page-header">
      <h1>
        <a href="#">
          <i class="el-icon-my-angle-left-bold"></i>
        </a>页面一级标题
        <small>页面二级标题</small>
      </h1>
      <div class="jc-status jc-status-success">状态显示</div>
      <el-popover ref="popover2" placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"></el-popover>
      <a href="#" v-popover:popover2 class="el-icon-my-help"></a>
      <div class="jc-box-action">
        <a href="#">文字链接</a>
        <el-dropdown>
          <span class="el-dropdown-link">
            操作
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>操作一</el-dropdown-item>
            <el-dropdown-item>操作二</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="jc-page-content">
      <div class="jc-section">
        <div class="jc-section-header">
          <h3 class="jc-section-title">section 标题</h3>
        </div>
        <div class="jc-section-content">
          <!--content-->
          {{temScope}}
          <!--content end-->
        </div>
      </div>
      <div class="jc-section">
        <div class="jc-section-header">
          <h3 class="jc-section-title">section 标题</h3>
        </div>
        <div class="jc-section-content">
          <!--content-->
          {{temScope}}
          <!--content end-->
        </div>
      </div>
    </div>
  </div>`,
      tabSection:
  `<div>
    <div class="jc-page-header">
      <h1>
        <a href="#">
          <i class="el-icon-my-angle-left-bold"></i>
        </a>页面一级标题
        <small>页面二级标题</small>
      </h1>
      <div class="jc-status jc-status-success">状态显示</div>
      <el-popover ref="popover2" placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"></el-popover>
      <a href="#" v-popover:popover2 class="el-icon-my-help"></a>
      <div class="jc-box-action">
        <a href="#">文字链接</a>
        <el-dropdown>
          <span class="el-dropdown-link">
            操作
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>操作一</el-dropdown-item>
            <el-dropdown-item>操作二</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="jc-page-content">
      <el-tabs type="border-card">
        <el-tab-pane label="Tab1 页面">
          <div class="jc-section">
            <div class="jc-section-header">
              <h3 class="jc-section-title">section 标题</h3>
            </div>
            <div class="jc-section-content">
              <!--content-->
              {{temScope}}
              <!--content end-->
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Tab2 页面">
          <div class="jc-section">
            <div class="jc-section-header">
              <h3 class="jc-section-title">section 标题</h3>
            </div>
            <div class="jc-section-content">
              <!--content-->
              {{temScope}}
              <!--content end-->
            </div>
          </div>
          <div class="jc-section">
            <div class="jc-section-header">
              <h3 class="jc-section-title">section 标题</h3>
            </div>
            <div class="jc-section-content">
              <!--content-->
              {{temScope}}
              <!--content end-->
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>`
    }
  },
  content: {
    table:
      `<div class="jc-container-table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="JobID">
            <template>
              <a href="#">test-Job-0001</a>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="源文件名">
          </el-table-column>
          <el-table-column prop="bucket" label="目标 Bucket">
          </el-table-column>
          <el-table-column prop="commitDateTime" label="提交时间">
          </el-table-column>
          <el-table-column prop="doneDateTime" label="完成时间">
          </el-table-column>
          <el-table-column label="操作">
            <template>
              <a href="#">链接</a><el-button type="text">操作</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="jc-container-table-actionBar">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
          </el-pagination>
        </div>
      </div>`,
    advanceTable:
        `<div class="jc-container-table">
          <div class="jc-container-table-actionBar">
            <el-form class="jc-box-table-search" :inline="true">
              <el-form-item>
                <el-input placeholder="请输入内容" v-model="input5">
                  <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 100px;">
                    <el-option label="源文件名" value="1"></el-option>
                    <el-option label="订单号" value="2"></el-option>
                    <el-option label="用户电话" value="3"></el-option>
                  </el-select>
                  <el-button slot="append" icon="search"></el-button>
                </el-input>
              </el-form-item>
            </el-form>
            <el-form class="jc-table-actionBar-item" :inline="true">
              <el-form-item>
                <el-button icon="my-refresh" class="jc-button-icon"></el-button>
              </el-form-item>
              <el-form-item>
                <el-radio-group v-model="radio3">
                  <el-radio-button label="华北-北京"></el-radio-button>
                  <el-radio-button label="华南-广州"></el-radio-button>
                  <el-radio-button label="华东-宿迁"></el-radio-button>
                  <el-radio-button label="华东-上海"></el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">新建视频截图</el-button>
              </el-form-item>
            </el-form>
            <el-form class="jc-table-actionBar-item" :inline="true">
              <el-form-item>
                <el-date-picker v-model="value6" type="daterange" placeholder="选择日期范围">
                </el-date-picker>
              </el-form-item>
            </el-form>
          </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="JobID">
              <template>
                <a href="#">test-Job-0001</a>
              </template>
            </el-table-column>
            <el-table-column label="源 Bucket">
              <template>
                <a href="#">源 Bucket</a>
              </template>
            </el-table-column>
            <el-table-column label="源文件名">
              <template>
                <a href="#">源文件名</a>
              </template>
            </el-table-column>
            <el-table-column label="目标 Bucket">
              <template>
                <a href="#">目标 Bucket</a>
              </template>
            </el-table-column>
            <el-table-column prop="commitDateTime" label="提交时间">
            </el-table-column>
            <el-table-column prop="doneDateTime" label="完成时间">
            </el-table-column>
            <el-table-column prop="status" label="状态"
            :filters="[{ text: '驳回', value: '驳回' }, { text: '审批通过', value: '审批通过' }, { text: '待审批', value: '待审批' }, { text: '撤回', value: '撤回' }]"
            :filter-method="filterStatus" filter-placement="bottom-end">
              <template scope="scope">
                <span :class="statusMap[scope.row.status]">{{scope.row.status}}</span>
                <el-popover ref="popover1" placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"></el-popover>
                <a href="#" class="el-icon-my-help" v-popover:popover1></a>
              </template>
            </el-table-column>
          </el-table>
          <div class="jc-container-table-actionBar">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
          </div>
        </div>`,
    detail:
        `<el-form label-width="120px" class="jc-datashow-list">
          <el-form-item label="Job ID：">
            <p>test-Job-0001</p>
          </el-form-item>
          <el-form-item label="源 Bucket：">
            <p>
              <a href="#">京东云源</a>
            </p>
          </el-form-item>
          <el-form-item label="源文件名：">
            <p>
              <a href="#">京东云源</a>
            </p>
          </el-form-item>
          <el-form-item label="目标 Bucket：">
            <p>
              <a href="#">京东云源</a>
            </p>
          </el-form-item>
          <el-form-item label="目截图文件前缀：">
            <p>test</p>
          </el-form-item>
          <el-form-item label="任务提交时间：">
            <p>2017-12-13 09:23:34</p>
          </el-form-item>
          <el-form-item label="任务完成时间：">
            <p>2017-12-15 09:23:34</p>
          </el-form-item>
          </el-form>`,
    advanceDetail:
        `<el-form label-width="120px" class="jc-datashow-list jc-datashow-list-inline">
          <el-form-item label="名称：">
            <p>jclou-00<el-button type="text" icon="my-copy"></el-button></p>
          </el-form-item>
          <el-form-item label="ID：">
            <p>asg-fvckucqt<el-button type="text" icon="my-copy"></el-button></p>
          </el-form-item>
          <el-form-item label="消息生命周期：">
            <p>72h</p>
          </el-form-item>
          <el-form-item label="消息最大长度：">
            <p>64kb</p>
          </el-form-item>
          <el-form-item label="交付延迟：">
            <p>0S<el-tooltip content="Bottom center" placement="bottom" effect="light"><el-button type="text" icon="my-help"></el-button></el-tooltip></p>
          </el-form-item>
          <el-form-item label="堆积消息数：">
            <p>0条</p>
          </el-form-item>
          <el-form-item label="QPS：">
            <p>5000</p>
          </el-form-item>
          <el-form-item label="消息过滤类型：">
            <p>标签</p>
          </el-form-item>
          <el-form-item label="创建时间：">
            <p>2017-09-28 17:01:12</p>
          </el-form-item>
          <el-form-item label="修改时间：">
            <p>2017-09-28 17:01:12</p>
          </el-form-item>
        </el-form>`,
    form:
        `<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
          <el-form-item label="活动名称：" prop="name">
            <el-input></el-input>
            <el-tooltip class="item" effect="dark" content="提示帮助文字" placement="bottom-end">
              <i class="el-icon-warning jc-icon-tips"></i>
            </el-tooltip>
            <p class="jc-form-item-help">帮助提示帮助提示帮助提示帮助提示帮助提示帮助提示帮助提示帮助提示帮助提示帮助提示帮助提示帮助提示帮助提示帮助提示帮助提示帮助提示</p>
          </el-form-item>
          <el-form-item label="活动名称：" prop="name">
            <div class="jc-form-item-inline">
              <el-input></el-input>
              <i class="el-icon-warning"></i>
              <el-select v-model="ruleForm.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
              <span>文字</span>
              <el-switch v-model="ruleForm.value2" on-text="" off-text=""></el-switch>
              <el-checkbox-group v-model="ruleForm.type2">
                <el-checkbox label="是" name="type2"></el-checkbox>
              </el-checkbox-group>
            </div>
          </el-form-item>
          <el-form-item label="活动名称：">
            <div class="jc-form-item-inline">
              <el-input v-model="ruleForm.name" style="width: 50%;"></el-input>
              <el-input v-model="ruleForm.name" style="width: 50%;"></el-input>
            </div>
            <div class="jc-form-item-inline">
              <el-input v-model="ruleForm.name" style="width: 100%;"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="带单位：">
            <el-input>
              <template slot="append">秒</template>
            </el-input>
          </el-form-item>
          <el-form-item label="活动名称：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="活动区域：" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间：" required>
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"></el-date-picker>
          </el-form-item>
          <el-form-item label="即时配送：" prop="delivery">
            <el-switch on-text="" off-text v-model="ruleForm.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质：" prop="type">
            <el-checkbox-group v-model="ruleForm.type" class="jc-form-item-group">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源：" prop="resource">
            <el-radio-group v-model="ruleForm.resource" class="jc-form-item-group">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式：" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重 置</el-button>
            <el-button>取 消</el-button>
          </el-form-item>
        </el-form>`,
    advanceForm:
        `<el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="操作方式：">
            <el-radio-group v-model="radioOperationMode">
              <el-radio :label="1">备份所在的实例还存在</el-radio>
              <el-radio :label="2">备份所在的实例已删除</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="选择备份：" v-show="radioOperationMode == 1">
            <div class="jc-container-table">
              <div class="jc-container-table-actionBar">
                <el-form class="jc-table-actionBar-item" :inline="true">
                  <el-form-item label="备份时间：">
                    <el-date-picker v-model="valueDate" type="daterange" align="right" placeholder="选择日期范围" :picker-options="pickerOptions2">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item label="备份名称：">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary">查询</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <el-table ref="singleTable" :data="tableDataSelectBackup" highlight-current-row @current-change="handleCurrentChangeTableRow" style="width: 100%" height="250">
                <el-table-column label="" width="35">
                  <template scope="scope">
                    <el-radio :label="scope.row.id" v-model="radio" change.native="getCurrentRow(scope.row.id)">
                    </el-radio>
                  </template>
                </el-table-column>
                <el-table-column property="name" label="备份名称">
                </el-table-column>
                <el-table-column property="mode" label="备份方式">
                </el-table-column>
                <el-table-column property="granularity" label="备份粒度">
                </el-table-column>
                <el-table-column property="size" label="备份大小">
                </el-table-column>
                <el-table-column property="datetime" label="备份时间">
                </el-table-column>
              </el-table>
              <div class="jc-box-help">注：备份列表中只展示全量备份</div>
            </div>
          </el-form-item>
          <el-form-item label="选择文件：" required>
            <el-select v-model="value" placeholder="请选择备份中的文件">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button>取 消</el-button>
            <el-button type="primary">确 定</el-button>
          </el-form-item>
        </el-form>`,
    stepsForm:
        `<div>
          <el-steps :active="active" finish-status="success">
            <el-step title="第一步"></el-step>
            <el-step title="第二步"></el-step>
            <el-step title="完 成"></el-step>
          </el-steps>

          <el-form ref="form" :model="form" label-width="100px" class="jc-form-full">
            <el-form-item label="操作方式：" v-show="active == 0">
              <el-radio-group v-model="radioOperationMode">
                <el-radio :label="1">备份所在的实例还存在</el-radio>
                <el-radio :label="2">备份所在的实例已删除</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="选择实例：" v-show="radioOperationMode == 1 && active == 0">
              <div class="jc-container-table">
                <el-table ref="singleTable" :data="tableDataSelectCase" highlight-current-row @current-change="handleCurrentChangeTableRow" style="width: 100%" height="250">
                  <el-table-column label="" width="50">
                    <template scope="scope">
                      <el-radio :label="scope.row.id" v-model="radio" change.native="getCurrentRow(scope.row.id)">
                      </el-radio>
                    </template>
                  </el-table-column>
                  <el-table-column property="caseName" label="实例名称">
                  </el-table-column>
                  <el-table-column property="databaseVersion" label="数据库版本">
                  </el-table-column>
                </el-table>
                <div class="jc-box-help">注：实例列表中只展示数据库版本小于或等于目标数据库版本的实例</div>
              </div>
            </el-form-item>

            <el-form-item label="选择备份：" v-show="active == 1 && radioOperationMode == 1">
              <div class="jc-container-table">
                <el-table ref="singleTable" :data="tableDataSelectBackup" highlight-current-row @current-change="handleCurrentChangeTableRow" style="width: 100%" height="250">
                  <el-table-column label="" width="50">
                    <template scope="scope">
                      <el-radio :label="scope.row.id" v-model="radio" change.native="getCurrentRow(scope.row.id)">
                      </el-radio>
                    </template>
                  </el-table-column>
                  <el-table-column property="name" label="备份名称">
                  </el-table-column>
                  <el-table-column property="mode" label="备份方式">
                  </el-table-column>
                  <el-table-column property="granularity" label="备份粒度">
                  </el-table-column>
                  <el-table-column property="size" label="备份大小">
                  </el-table-column>
                  <el-table-column property="datetime" label="备份时间">
                  </el-table-column>
                </el-table>
                <div class="jc-box-help">注：备份列表中只展示全量备份</div>
              </div>
            </el-form-item>
            <el-form-item label="选择文件：" required v-show="active == 1 && radioOperationMode == 1">
              <el-select v-model="value" placeholder="请选择备份中的文件">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="选择备份：" v-show="active == 1 && radioOperationMode == 2">
              <div class="jc-container-table">
                <div class="jc-container-table-actionBar">
                  <el-form class="jc-table-actionBar-item" :inline="true">
                    <el-form-item label="备份时间：">
                      <el-date-picker v-model="valueDate" type="daterange" align="right" placeholder="选择日期范围" :picker-options="pickerOptions2">
                      </el-date-picker>
                    </el-form-item>
                    <el-form-item label="备份名称：">
                      <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary">查询</el-button>
                    </el-form-item>
                  </el-form>
                </div>
                <el-table ref="singleTable" :data="tableDataSelectBackup" highlight-current-row @current-change="handleCurrentChangeTableRow" style="width: 100%" height="250">
                  <el-table-column label="" width="50">
                    <template scope="scope">
                      <el-radio :label="scope.row.id" v-model="radio" change.native="getCurrentRow(scope.row.id)">
                      </el-radio>
                    </template>
                  </el-table-column>
                  <el-table-column property="name" label="备份名称">
                  </el-table-column>
                  <el-table-column property="mode" label="备份方式">
                  </el-table-column>
                  <el-table-column property="granularity" label="备份粒度">
                  </el-table-column>
                  <el-table-column property="size" label="备份大小">
                  </el-table-column>
                  <el-table-column property="datetime" label="备份时间">
                  </el-table-column>
                </el-table>
                <div class="jc-box-help">注：备份列表中只展示全量备份</div>
              </div>
            </el-form-item>
            <el-form-item label="选择文件：" required v-show="active == 1 && radioOperationMode == 2">
              <el-select v-model="value" placeholder="请选择备份中的文件">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

            <div v-show="active == 2">
              <el-alert
                title="将使用所选备份覆盖目标数据库，原有数据将全部丢失，请确认"
                type="error"
                :closable="false"
                show-icon>
              </el-alert>
              <div class="jc-section">
                <div class="jc-section-header">
                  <h3 class="jc-section-title">目标数据库</h3>
                </div>
                <div class="jc-section-content">
                  <el-form label-width="120px" class="jc-datashow-list">
                    <el-form-item label="数据库名称：">
                      <p>db1</p>
                    </el-form-item>
                    <el-form-item label="状态：">
                      <p class="cj-status-success">运行</p>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
              <div class="jc-section">
                <div class="jc-section-header">
                  <h3 class="jc-section-title">备份来源</h3>
                </div>
                <div class="jc-section-content">
                  <el-form label-width="120px" class="jc-datashow-list">
                    <el-form-item label="实例名称：">
                      <p>cluster11（已删除）</p>
                    </el-form-item>
                    <el-form-item label="数据库版本：">
                      <p>2012</p>
                    </el-form-item>
                    <el-form-item label="备份名称：">
                      <p>bak1</p>
                    </el-form-item>
                    <el-form-item label="创建时间：">
                      <p>2017-11-11 23:11:21</p>
                    </el-form-item>
                    <el-form-item label="备份文件：">
                      <p>我是文件名</p>
                    </el-form-item>
                    <el-form-item label="文件大小：">
                      <p>200MB</p>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>

            <el-form-item>
              <el-button>取 消</el-button>
              <el-button @click="pre" v-show="active == 1 || active == 2">上一步</el-button>
              <el-button type="primary" @click="next" v-show="active == 0">下一步</el-button>
              <el-button type="primary" @click="next" v-show="active == 1">下一步</el-button>
              <el-button type="primary" v-show="active == 2">确 定</el-button>
            </el-form-item>
          </el-form>
        </div>`
  }
}
