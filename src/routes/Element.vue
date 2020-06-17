<template>
      <el-row>
        <el-col span=12>
          <el-input :value='value' @input="handleChange" />
        <el-button type="primary" icon="el-icon-edit" :disabled="false" :loading='false'></el-button>
        <el-radio-group v-model="radio" @change="checkRadio">
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
        </el-col>
        <el-col span=12>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-radio-group v-model="radio" @change="checkRadio">
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
        </el-col>
      </el-row>
</template>
<script>
export default {
  data() {
    return {
      radio: "",
      value:'没内容'
    };
  },
  methods: {
    handleChange(val){
      console.log('val',val)
      this.value = '2323'
    },
    checkRadio(e) {
      console.log("e", e);
    }
  },
  
};
</script>