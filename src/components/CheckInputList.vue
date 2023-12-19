<template>
        <div v-if="componentIsLoaded" >
            <div  v-for="i  in Math.ceil(listOptions.length / dividedby ) " class="columns list_check_box" :key="i" >
                        <!-- col -->
                        <template  v-for="(feature , index ) in listOptions.slice((i - 1) * dividedby , i * dividedby )"  :key="index" >
                            <div :class="CheckStyle" >
                                <input class="inp-cbx"  type="checkbox" :value="feature.id" :id="name + '_' + feature.id"   v-model="setListValue" />
                                    <label class="cbx columns" :for="name + '_' + feature.id"><span>
                                      <font-awesome-icon icon="check" v-if=" Array.isArray(listValue) ? listValue.includes(feature.id) : false"/>
                                  </span><div class="column textinput"><p>{{ feature.title }}</p></div></label>
                            </div>
                            <template v-if="listOptions.length % dividedby != 0 && Object.keys(listOptions).length-1 == (( i * dividedby ) + index ) - dividedby  ">
                              <div class="column empty" :key="j + index + 1"  v-for="j  in makeEmptyCols(index)"></div>
                            </template>
                        </template>
                        <!-- end col -->
                </div>
            </div>
  </template>
<script setup>
import { computed, onMounted, ref } from 'vue'
const emit = defineEmits(['update:value'])
const props = defineProps({
  dividedby: { type: Number },
  list: { type: Array },
  value: { type: Array },
  name: { type: String },
  size: { type: String, default: null },
  selectall: { type: Boolean, default: false },
  selectalltext: { type: String, default: 'Selecionar Todos' }
})

const listOptions = ref([])
const componentIsLoaded = ref(false)
const listValue = ref([])

const setFormOptions = () => {
  if (props.selectall) {
    listOptions.value = [...[{
      id: 'select-all',
      title: props.selectalltext
    }], ...props.list]
    return
  }
  listOptions.value = props.list
}
const makeEmptyCols = (index) => {
  switch (index) {
    case 0:
      return props.dividedby - 1
    case 1:
      return props.dividedby - 2
    case 2:
      return props.dividedby - 3
    default:
      return props.dividedby - 4
  }
}

const CheckStyle = computed(() => {
  if (props.size === 'small') {
    return 'column list_col_small'
  }
  return 'column list_col'
})

const setListValue = computed({
  get () {
    return listValue.value
  },
  set (value) {
    listValue.value = value
    emit('update:value', value)
  }
})

onMounted(() => {
  setFormOptions()
  listValue.value = props.value
  // COMPONENT IS LOADED
  componentIsLoaded.value = true
})
</script>
<style scoped>
/* ----------------------- divs */
div.list_check_box {
  padding:0 0 0 0;
}
div.list_col {
  margin-left:10px;
}
div.list_col .cbx {
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  padding: 6px 8px 6px 16px;
  margin-right:14px;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s ease;
}
div.list_col .cbx:not(:last-child) {
  margin-right: 6px;
}
/* .cbx:hover {
     background: rgba(0,119,255,0.06);
 }*/
.cbx span ,  .cbx p {
  float: left;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);

}
div.list_col .cbx span  {
  position: relative;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  transform: scale(1);
  border: 1px solid #cccfdb;
  transition: all 0.2s ease;
  box-shadow: 0 1px 1px rgba(0,16,75,0.05);
  background: #FFF;
  margin-top:12px;
}
.cpx .textinput {
  padding:0px;
  margin:0px;
  border:1px solid;
}
.cbx p {
  padding-left: 8px;
  line-height:21px;
}
.cbx:hover span {
  border-color: #07f;
}
.inp-cbx {
  position: absolute;
  visibility: hidden;
}
.inp-cbx:checked + .cbx span , .inp-cbx.checked + .cbx span{
  background: #07f;
  border-color: #07f;
  animation: wave 0.4s ease;
}
.inp-cbx:checked + .cbx span  svg ,  .inp-cbx.checked + .cbx span  svg  {
  stroke-dashoffset: 0;
}
.cbx span  svg {
  position: absolute;
  top: 3px;
  left: 2px;
  color:#FFF;
  font-size:14px;
}

/* SMALL */
div.list_col_small .cbx {
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  padding: 1px 4px 3px 13px;
  margin-right:14px;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s ease;
}
div.list_col_small .cbx:not(:last-child) {
  margin-right: 4px;
}
div.list_col_small .cbx span  {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  transform: scale(1);
  border: 1px solid #cccfdb;
  transition: all 0.2s ease;
  box-shadow: 0 1px 1px rgba(0,16,75,0.05);
  margin-top:12px;
}
div.list_col_small .cbx span  svg {
  position: absolute;
  top: 2px;
  left: 2px;
  color:#FFF;
  font-size:11px !important;
}

</style>
