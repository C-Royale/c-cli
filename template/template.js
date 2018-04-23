module.exports = {
  base: `
  <template>
    {{temScope}}
  </template>

  <script>
  export default {
    <%scriptScope%>
  };
  </script>
  `,
  layout: {
    level1: {
      blank: `
      <div>
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
      {{temScope}}
    </div>
  </div>`,
      tab: `
      <div>
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
        <el-tab-pane label="Tab1 页面">Tab1 页面内容</el-tab-pane>
        <el-tab-pane label="Tab2 页面">Tab2 页面内容</el-tab-pane>
      </el-tabs>
    </div>
  </div>`,
      section: `
      <div>
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
          {{temScope}}
        </div>
      </div>
      <div class="jc-section">
        <div class="jc-section-header">
          <h3 class="jc-section-title">section 标题</h3>
        </div>
        <div class="jc-section-content">
          {{temScope}}
        </div>
      </div>
    </div>
  </div>`,
      tabSection: `
      <div>
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
              {{temScope}}
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Tab2 页面">
          <div class="jc-section">
            <div class="jc-section-header">
              <h3 class="jc-section-title">section 标题</h3>
            </div>
            <div class="jc-section-content">
              {{temScope}}
            </div>
          </div>
          <div class="jc-section">
            <div class="jc-section-header">
              <h3 class="jc-section-title">section 标题</h3>
            </div>
            <div class="jc-section-content">
              {{temScope}}
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>`
    },
    secondary: {
      blank: `<div>
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
        {{temScope}}
      </div>
    </div>`,
      tab: `
      <div>
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
        <el-tab-pane label="Tab1 页面">{{temScope}}</el-tab-pane>
        <el-tab-pane label="Tab2 页面">{{temScope}}</el-tab-pane>
      </el-tabs>
    </div>
  </div>`,
      section: `
      <div>
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
          {{temScope}}
        </div>
      </div>
      <div class="jc-section">
        <div class="jc-section-header">
          <h3 class="jc-section-title">section 标题</h3>
        </div>
        <div class="jc-section-content">
          {{temScope}}
        </div>
      </div>
    </div>
  </div>`,
      tabSection: `
      <div>
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
              {{temScope}}
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Tab2 页面">
          <div class="jc-section">
            <div class="jc-section-header">
              <h3 class="jc-section-title">section 标题</h3>
            </div>
            <div class="jc-section-content">
              {{temScope}}
            </div>
          </div>
          <div class="jc-section">
            <div class="jc-section-header">
              <h3 class="jc-section-title">section 标题</h3>
            </div>
            <div class="jc-section-content">
              {{temScope}}
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>`
    }
  },
  content: {
    table: {
      template: `
      <div class="jc-container-table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="JobID">
            <template scope="scope">
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
            <template scope="scope">
              <a href="#">链接</a><el-button type="text">操作</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="jc-container-table-actionBar">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
          </el-pagination>
        </div>
      </div>
      `
    },
    advanceTable: {
      template: `
      <div class="jc-container-table">
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
          <template scope="scope">
            <a href="#">test-Job-0001</a>
          </template>
        </el-table-column>
        <el-table-column label="源 Bucket">
          <template scope="scope">
            <a href="#">源 Bucket</a>
          </template>
        </el-table-column>
        <el-table-column label="源文件名">
          <template scope="scope">
            <a href="#">源文件名</a>
          </template>
        </el-table-column>
        <el-table-column label="目标 Bucket">
          <template scope="scope">
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
    </div>
      `
    }
  }
}
