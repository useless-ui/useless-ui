import{V as p,_ as b,r as v,o as k,c as x,a as f,w as m,b as s,d as l,e as w}from"./app.ebd063c9.js";const{defineComponent:V}=p,S=V({name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:e,resolveComponent:E,createVNode:r,openBlock:d,createElementBlock:A}=p,F={style:{background:"#fff"}},y=e("p",null,"以星期日开头",-1),n=e("br",null,null,-1),i=e("br",null,null,-1),_=e("p",null,"以星期一开头",-1);function C(o,c){const h=E("k-calendar");return d(),A("div",F,[y,r(h,{modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=u=>o.value=u),"first-day":0,options:o.options,onOnChange:o.onChange},null,8,["modelValue","options","onOnChange"]),n,i,_,r(h,{modelValue:o.value2,"onUpdate:modelValue":c[1]||(c[1]=u=>o.value2=u),"first-day":1,options:o.options,onOnChange:o.onChange},null,8,["modelValue","options","onOnChange"])])}const{defineComponent:D}=p,{ref:a}=p;return{render:C,...D({setup(o,{expose:c}){c();const h=a(new Date),u=a(new Date),g={value:h,value2:u,options:{width:"100%",height:"680px"},onChange:B=>{console.log(B)},ref:a};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}})}}(),"render-demo-1":function(){const{toDisplayString:e,normalizeClass:E,createElementVNode:r,resolveComponent:d,withCtx:A,openBlock:F,createBlock:y}=p;function n(C,D){const a=d("k-calendar");return F(),y(a,{"first-day":0,options:C.options},{"date-cell":A(({data:t})=>[r("p",{class:E(t.isSelected?"is-selected":"")},e(t.day.split("-").slice(1).join("-"))+" "+e(t.isSelected?"😁":""),3)]),_:1},8,["options"])}const{defineComponent:i}=p;return{render:n,...i({setup(C,{expose:D}){D();const t={options:{height:"680px"}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}})}}()}}),G=JSON.parse('{"title":"Calendar 日历","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"插槽自定义日历数据","slug":"插槽自定义日历数据","link":"#插槽自定义日历数据","children":[]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":2,"title":"options 属性","slug":"options-属性","link":"#options-属性","children":[{"level":3,"title":"具名插槽","slug":"具名插槽","link":"#具名插槽","children":[]}]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]}],"relativePath":"components/calendar/index.md"}'),N=s("h1",{id:"calendar-日历",tabindex:"-1"},[l("Calendar 日历 "),s("a",{class:"header-anchor",href:"#calendar-日历","aria-hidden":"true"},"#")],-1),j=s("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),O=s("p",null,[l("使用"),s("code",null,"v-model"),l("双向绑定数据，firstDay 表示以星期几为开头，"),s("code",null,"onChange"),l("返回当前变化的日历数据。")],-1),P=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"div"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"style"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"background: #fff"'),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"p"),s("span",{style:{color:"#6E6A86"}},">"),s("span",{style:{color:"#E0DEF4"}},"以星期日开头"),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"p"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-calendar"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"v-model"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"value"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},":first-day"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"0"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},":options"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"options"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"@on-change"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"onChange"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#6E6A86"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"br"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#6E6A86"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"br"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#6E6A86"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"p"),s("span",{style:{color:"#6E6A86"}},">"),s("span",{style:{color:"#E0DEF4"}},"以星期一开头"),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"p"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-calendar"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"v-model"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"value2"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},":first-day"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"1"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},":options"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"options"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"@on-change"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"onChange"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#6E6A86"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"div"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"script"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"setup"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"lang"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"ts"'),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#3E8FB0"}},"import "),s("span",{style:{color:"#908CAA"}},"{"),s("span",{style:{color:"#3E8FB0"}}," "),s("span",{style:{color:"#E0DEF4","font-style":"italic"}},"ref"),s("span",{style:{color:"#3E8FB0"}}," "),s("span",{style:{color:"#908CAA"}},"}"),s("span",{style:{color:"#3E8FB0"}}," from "),s("span",{style:{color:"#F6C177"}},"'vue'"),s("span",{style:{color:"#908CAA"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#3E8FB0"}},"const"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#E0DEF4","font-style":"italic"}},"value"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#3E8FB0"}},"="),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#EA9A97"}},"ref"),s("span",{style:{color:"#E0DEF4"}},"("),s("span",{style:{color:"#3E8FB0"}},"new"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#EA9A97"}},"Date"),s("span",{style:{color:"#E0DEF4"}},"())"),s("span",{style:{color:"#908CAA"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#3E8FB0"}},"const"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#E0DEF4","font-style":"italic"}},"value2"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#3E8FB0"}},"="),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#EA9A97"}},"ref"),s("span",{style:{color:"#E0DEF4"}},"("),s("span",{style:{color:"#3E8FB0"}},"new"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#EA9A97"}},"Date"),s("span",{style:{color:"#E0DEF4"}},"())"),s("span",{style:{color:"#908CAA"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#3E8FB0"}},"const"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#E0DEF4","font-style":"italic"}},"options"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#3E8FB0"}},"="),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  width"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'100%'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  height"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'680px'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#908CAA"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#3E8FB0"}},"const"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#EA9A97","font-style":"italic"}},"onChange"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#3E8FB0"}},"="),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#908CAA"}},"("),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"val"),s("span",{style:{color:"#3E8FB0"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#908CAA"}},"{"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#EA9A97","font-style":"italic"}},"date"),s("span",{style:{color:"#3E8FB0"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#9CCFD8"}},"Date"),s("span",{style:{color:"#908CAA"}},";"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#EA9A97","font-style":"italic"}},"type"),s("span",{style:{color:"#3E8FB0"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#9CCFD8"}},"string"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#908CAA"}},"})"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#3E8FB0"}},"=>"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#E0DEF4","font-style":"italic"}},"console"),s("span",{style:{color:"#3E8FB0"}},"."),s("span",{style:{color:"#EA9A97"}},"log"),s("span",{style:{color:"#E0DEF4"}},"("),s("span",{style:{color:"#E0DEF4","font-style":"italic"}},"val"),s("span",{style:{color:"#E0DEF4"}},")"),s("span",{style:{color:"#908CAA"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#908CAA"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"script"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"div"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"style"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"background: #fff"'),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"p"),s("span",{style:{color:"#9893A5"}},">"),s("span",{style:{color:"#575279"}},"以星期日开头"),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"p"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-calendar"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"v-model"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"value"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},":first-day"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"0"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},":options"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"options"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"@on-change"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"onChange"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#9893A5"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"br"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#9893A5"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"br"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#9893A5"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"p"),s("span",{style:{color:"#9893A5"}},">"),s("span",{style:{color:"#575279"}},"以星期一开头"),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"p"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-calendar"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"v-model"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"value2"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},":first-day"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"1"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},":options"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"options"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"@on-change"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"onChange"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#9893A5"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"div"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"script"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"setup"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"lang"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"ts"'),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#286983"}},"import "),s("span",{style:{color:"#797593"}},"{"),s("span",{style:{color:"#286983"}}," "),s("span",{style:{color:"#575279","font-style":"italic"}},"ref"),s("span",{style:{color:"#286983"}}," "),s("span",{style:{color:"#797593"}},"}"),s("span",{style:{color:"#286983"}}," from "),s("span",{style:{color:"#EA9D34"}},"'vue'"),s("span",{style:{color:"#797593"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#286983"}},"const"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#575279","font-style":"italic"}},"value"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#286983"}},"="),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#D7827E"}},"ref"),s("span",{style:{color:"#575279"}},"("),s("span",{style:{color:"#286983"}},"new"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#D7827E"}},"Date"),s("span",{style:{color:"#575279"}},"())"),s("span",{style:{color:"#797593"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#286983"}},"const"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#575279","font-style":"italic"}},"value2"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#286983"}},"="),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#D7827E"}},"ref"),s("span",{style:{color:"#575279"}},"("),s("span",{style:{color:"#286983"}},"new"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#D7827E"}},"Date"),s("span",{style:{color:"#575279"}},"())"),s("span",{style:{color:"#797593"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#286983"}},"const"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#575279","font-style":"italic"}},"options"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#286983"}},"="),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  width"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'100%'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  height"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'680px'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#797593"}},"};")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#286983"}},"const"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#D7827E","font-style":"italic"}},"onChange"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#286983"}},"="),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#797593"}},"("),s("span",{style:{color:"#907AA9","font-style":"italic"}},"val"),s("span",{style:{color:"#286983"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#797593"}},"{"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#D7827E","font-style":"italic"}},"date"),s("span",{style:{color:"#286983"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#56949F"}},"Date"),s("span",{style:{color:"#797593"}},";"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#D7827E","font-style":"italic"}},"type"),s("span",{style:{color:"#286983"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#56949F"}},"string"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#797593"}},"})"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#286983"}},"=>"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#575279","font-style":"italic"}},"console"),s("span",{style:{color:"#286983"}},"."),s("span",{style:{color:"#D7827E"}},"log"),s("span",{style:{color:"#575279"}},"("),s("span",{style:{color:"#575279","font-style":"italic"}},"val"),s("span",{style:{color:"#575279"}},")"),s("span",{style:{color:"#797593"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#797593"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"script"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),$=s("h2",{id:"插槽自定义日历数据",tabindex:"-1"},[l("插槽自定义日历数据 "),s("a",{class:"header-anchor",href:"#插槽自定义日历数据","aria-hidden":"true"},"#")],-1),z=s("p",null,[l("具名插槽为"),s("code",null,"date-cell"),l(",可以获取每个日期的数据")],-1),M=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-calendar"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},":first-day"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"0"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},":options"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"options"'),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#908CAA"}},"#"),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"date-cell"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"'),s("span",{style:{color:"#908CAA"}},"{"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#E0DEF4","font-style":"italic"}},"data"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#908CAA"}},"}"),s("span",{style:{color:"#F6C177"}},'"'),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"p"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},":class"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},`"data.isSelected ? 'is-selected' : ''"`),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        {{ data.day.split('-').slice(1).join('-') }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        {{ data.isSelected ? '😁' : '' }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"p"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"k-calendar"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"script"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"setup"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"lang"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"ts"'),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#3E8FB0"}},"const"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#E0DEF4","font-style":"italic"}},"options"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#3E8FB0"}},"="),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  height"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'680px'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#908CAA"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"script"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-calendar"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},":first-day"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"0"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},":options"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"options"'),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#797593"}},"#"),s("span",{style:{color:"#907AA9","font-style":"italic"}},"date-cell"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"'),s("span",{style:{color:"#797593"}},"{"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#575279","font-style":"italic"}},"data"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#797593"}},"}"),s("span",{style:{color:"#EA9D34"}},'"'),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"p"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},":class"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},`"data.isSelected ? 'is-selected' : ''"`),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        {{ data.day.split('-').slice(1).join('-') }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        {{ data.isSelected ? '😁' : '' }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"p"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"k-calendar"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"script"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"setup"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"lang"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"ts"'),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#286983"}},"const"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#575279","font-style":"italic"}},"options"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#286983"}},"="),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  height"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'680px'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#797593"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"script"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),U=w('<hr><h1 id="calendar-api" tabindex="-1">Calendar API <a class="header-anchor" href="#calendar-api" aria-hidden="true">#</a></h1><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-hidden="true">#</a></h2><div class="vp-table_k"><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>选中项绑定值</td><td><code>Date</code></td><td>---</td><td>当前 Date</td></tr><tr><td>firstDay</td><td>以星期几开头，0~6 分别表示星期日、一、二、三、四、五、六</td><td><code>number</code></td><td>0,1,2,3,4,5,6</td><td>0</td></tr><tr><td>options</td><td>配置项(详细请看 options 属性)</td><td><code>object</code></td><td>-----------</td><td>---------</td></tr></tbody></table></div><h2 id="options-属性" tabindex="-1">options 属性 <a class="header-anchor" href="#options-属性" aria-hidden="true">#</a></h2><div class="vp-table_k"><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>日历的宽度</td><td><code>string</code></td><td>---</td><td>100%</td></tr><tr><td>height</td><td>日历的高度</td><td><code>string</code></td><td>---</td><td>100%</td></tr></tbody></table></div><h3 id="具名插槽" tabindex="-1">具名插槽 <a class="header-anchor" href="#具名插槽" aria-hidden="true">#</a></h3><div class="vp-table_k"><table><thead><tr><th>名称</th><th style="text-align:center;">说明</th><th>类型</th><th>默认</th></tr></thead><tbody><tr><td>date-cell</td><td style="text-align:center;"><code>type</code> 表示该日期的所属月份，可选值有 <code>prev-month</code>、<code>current-month</code> 和 <code>next-month</code>；<code>isSelected</code> 标明该日期是否被选中；<code>day</code> 是格式化的日期，格式为 <code>yyyy-MM-dd</code>；<code>date</code> 是单元格的日期</td><td><code>Object</code></td><td>当前 Date</td></tr></tbody></table></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><div class="vp-table_k"><table><thead><tr><th>方法名</th><th style="text-align:center;">说明</th><th>参数</th></tr></thead><tbody><tr><td>onChange</td><td style="text-align:center;"><code>type</code>表示动作类型，<code>selectDate</code>选中日期，<code>pre-month</code>、<code>next-month</code>分别为上个月和上个月;<code>date</code>为变化后返回的日期</td><td><code>Object</code></td></tr></tbody></table></div>',10);function I(e,E,r,d,A,F){const y=v("render-demo-0"),n=v("demo"),i=v("render-demo-1");return k(),x("div",null,[N,j,O,f(n,{customClass:"demoblock-custom",sourceCode:`<template>
  <div style="background: #fff">
    <p>以星期日开头</p>
    <k-calendar v-model="value" :first-day="0" :options="options" @on-change="onChange" />
    <br />
    <br />
    <p>以星期一开头</p>
    <k-calendar v-model="value2" :first-day="1" :options="options" @on-change="onChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(new Date());
const value2 = ref(new Date());

const options = {
  width: '100%',
  height: '680px',
};

const onChange = (val: { date: Date; type: string }) => {
  console.log(val);
};
<\/script>
`},{highlight:m(()=>[P]),default:m(()=>[f(y)]),_:1}),$,z,f(n,{customClass:"demoblock-custom",sourceCode:`<template>
  <k-calendar :first-day="0" :options="options">
    <template #date-cell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }}
        {{ data.isSelected ? '😁' : '' }}
      </p>
    </template>
  </k-calendar>
</template>
<script setup lang="ts">
const options = {
  height: '680px',
};
<\/script>
`},{highlight:m(()=>[M]),default:m(()=>[f(i)]),_:1}),U])}const H=b(S,[["render",I]]);export{G as __pageData,H as default};
