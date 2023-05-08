import{V as y,_ as B,r as f,o as b,c as k,a as D,w as C,b as l,d as s,e as x}from"./app.a48487a5.js";const{defineComponent:V}=y,S=V({name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:o,resolveComponent:u,createVNode:c,openBlock:E,createElementBlock:i}=y,d={style:{background:"#fff"}},r=o("p",null,"以星期日开头",-1),n=o("br",null,null,-1),A=o("br",null,null,-1),m=o("p",null,"以星期一开头",-1);function v(t,a){const F=u("k-calendar");return E(),i("div",d,[r,c(F,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=p=>t.value=p),"first-day":0,onOnChange:t.onChange},null,8,["modelValue","onOnChange"]),n,A,m,c(F,{modelValue:t.value2,"onUpdate:modelValue":a[1]||(a[1]=p=>t.value2=p),"first-day":1,onOnChange:t.onChange},null,8,["modelValue","onOnChange"])])}const{defineComponent:h}=y,{ref:e}=y;return{render:v,...h({setup(t,{expose:a}){a();const F=e(new Date),p=e(new Date),_={value:F,value2:p,onChange:g=>{console.log(g)},ref:e};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}})}}(),"render-demo-1":function(){const{toDisplayString:o,normalizeClass:u,createElementVNode:c,resolveComponent:E,withCtx:i,openBlock:d,createBlock:r}=y;function n(m,v){const h=E("k-calendar");return d(),r(h,{"first-day":0},{"date-cell":i(({data:e})=>[c("p",{class:u(e.isSelected?"is-selected":"")},o(e.day.split("-").slice(1).join("-"))+" "+o(e.isSelected?"😁":""),3)]),_:1})}return{render:n,...{}}}()}}),q=JSON.parse('{"title":"Calendar 日历","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"插槽自定义日历数据","slug":"插槽自定义日历数据","link":"#插槽自定义日历数据","children":[]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[{"level":3,"title":"具名插槽","slug":"具名插槽","link":"#具名插槽","children":[]}]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]}],"relativePath":"components/calendar/index.md"}'),w=l("h1",{id:"calendar-日历",tabindex:"-1"},[s("Calendar 日历 "),l("a",{class:"header-anchor",href:"#calendar-日历","aria-hidden":"true"},"#")],-1),N=l("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),O=l("p",null,[s("使用"),l("code",null,"v-model"),s("双向绑定数据，firstDay 表示以星期几为开头，"),l("code",null,"onChange"),s("返回当前变化的日历数据。")],-1),j=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"template"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"div"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"style"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"background: #fff"'),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"p"),l("span",{style:{color:"#6E6A86"}},">"),l("span",{style:{color:"#E0DEF4"}},"以星期日开头"),l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"p"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"k-calendar"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"v-model"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"value"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},":first-day"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"0"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"@on-change"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"onChange"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#6E6A86"}},"/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"br"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#6E6A86"}},"/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"br"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#6E6A86"}},"/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"p"),l("span",{style:{color:"#6E6A86"}},">"),l("span",{style:{color:"#E0DEF4"}},"以星期一开头"),l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"p"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"k-calendar"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"v-model"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"value2"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},":first-day"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"1"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"@on-change"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"onChange"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#6E6A86"}},"/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"div"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"template"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"script"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"setup"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"lang"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"ts"'),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"import "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"ref"),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#3E8FB0"}}," from "),l("span",{style:{color:"#F6C177"}},"'vue'"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"const"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"value"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"ref"),l("span",{style:{color:"#E0DEF4"}},"("),l("span",{style:{color:"#3E8FB0"}},"new"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"Date"),l("span",{style:{color:"#E0DEF4"}},"())"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"const"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"value2"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"ref"),l("span",{style:{color:"#E0DEF4"}},"("),l("span",{style:{color:"#3E8FB0"}},"new"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"Date"),l("span",{style:{color:"#E0DEF4"}},"())"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"const"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97","font-style":"italic"}},"onChange"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"("),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"val"),l("span",{style:{color:"#3E8FB0"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97","font-style":"italic"}},"date"),l("span",{style:{color:"#3E8FB0"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#9CCFD8"}},"Date"),l("span",{style:{color:"#908CAA"}},";"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97","font-style":"italic"}},"type"),l("span",{style:{color:"#3E8FB0"}},":"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#9CCFD8"}},"string"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"})"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"=>"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"console"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#EA9A97"}},"log"),l("span",{style:{color:"#E0DEF4"}},"("),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"val"),l("span",{style:{color:"#E0DEF4"}},")"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"script"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"})])]),l("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"template"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"div"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"style"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"background: #fff"'),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"p"),l("span",{style:{color:"#9893A5"}},">"),l("span",{style:{color:"#575279"}},"以星期日开头"),l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"p"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"k-calendar"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"v-model"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"value"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},":first-day"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"0"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"@on-change"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"onChange"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#9893A5"}},"/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"br"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#9893A5"}},"/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"br"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#9893A5"}},"/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"p"),l("span",{style:{color:"#9893A5"}},">"),l("span",{style:{color:"#575279"}},"以星期一开头"),l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"p"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"k-calendar"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"v-model"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"value2"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},":first-day"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"1"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"@on-change"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"onChange"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#9893A5"}},"/>")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"div"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"template"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"script"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"setup"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"lang"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"ts"'),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"import "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"ref"),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#286983"}}," from "),l("span",{style:{color:"#EA9D34"}},"'vue'"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"const"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"value"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"ref"),l("span",{style:{color:"#575279"}},"("),l("span",{style:{color:"#286983"}},"new"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"Date"),l("span",{style:{color:"#575279"}},"())"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"const"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"value2"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"ref"),l("span",{style:{color:"#575279"}},"("),l("span",{style:{color:"#286983"}},"new"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"Date"),l("span",{style:{color:"#575279"}},"())"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"const"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E","font-style":"italic"}},"onChange"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"("),l("span",{style:{color:"#907AA9","font-style":"italic"}},"val"),l("span",{style:{color:"#286983"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E","font-style":"italic"}},"date"),l("span",{style:{color:"#286983"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#56949F"}},"Date"),l("span",{style:{color:"#797593"}},";"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E","font-style":"italic"}},"type"),l("span",{style:{color:"#286983"}},":"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#56949F"}},"string"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"})"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"=>"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#575279","font-style":"italic"}},"console"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#D7827E"}},"log"),l("span",{style:{color:"#575279"}},"("),l("span",{style:{color:"#575279","font-style":"italic"}},"val"),l("span",{style:{color:"#575279"}},")"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"script"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),$=l("h2",{id:"插槽自定义日历数据",tabindex:"-1"},[s("插槽自定义日历数据 "),l("a",{class:"header-anchor",href:"#插槽自定义日历数据","aria-hidden":"true"},"#")],-1),P=l("p",null,[s("具名插槽为"),l("code",null,"date-cell"),s(",可以获取每个日期的数据")],-1),z=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"template"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"k-calendar"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},":first-day"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"0"'),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"template"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"#"),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"date-cell"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"'),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"data"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#F6C177"}},'"'),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"p"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},":class"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},`"data.isSelected ? 'is-selected' : ''"`),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        {{ data.day.split('-').slice(1).join('-') }}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"        {{ data.isSelected ? '😁' : '' }}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"      "),l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"p"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"template"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"k-calendar"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"template"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"})])]),l("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"template"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"k-calendar"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},":first-day"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"0"'),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"template"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"#"),l("span",{style:{color:"#907AA9","font-style":"italic"}},"date-cell"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"'),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"data"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#EA9D34"}},'"'),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"p"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},":class"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},`"data.isSelected ? 'is-selected' : ''"`),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        {{ data.day.split('-').slice(1).join('-') }}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"        {{ data.isSelected ? '😁' : '' }}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"      "),l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"p"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"template"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"k-calendar"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"template"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),M=x('<hr><h1 id="calendar-api" tabindex="-1">Calendar API <a class="header-anchor" href="#calendar-api" aria-hidden="true">#</a></h1><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-hidden="true">#</a></h2><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>选中项绑定值</td><td><code>Date</code></td><td>---</td><td>当前 Date</td></tr><tr><td>firstDay</td><td>以星期几开头，0~6 分别表示星期日、一、二、三、四、五、六</td><td><code>number</code></td><td>0,1,2,3,4,5,6</td><td>0</td></tr></tbody></table><h3 id="具名插槽" tabindex="-1">具名插槽 <a class="header-anchor" href="#具名插槽" aria-hidden="true">#</a></h3><table><thead><tr><th>名称</th><th style="text-align:center;">说明</th><th>类型</th><th>默认</th></tr></thead><tbody><tr><td>date-cell</td><td style="text-align:center;"><code>type</code> 表示该日期的所属月份，可选值有 <code>prev-month</code>、<code>current-month</code> 和 <code>next-month</code>；<code>isSelected</code> 标明该日期是否被选中；<code>day</code> 是格式化的日期，格式为 <code>yyyy-MM-dd</code>；<code>date</code> 是单元格的日期</td><td><code>Object</code></td><td>当前 Date</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>方法名</th><th style="text-align:center;">说明</th><th>参数</th></tr></thead><tbody><tr><td>onChange</td><td style="text-align:center;"><code>type</code>表示动作类型，<code>selectDate</code>选中日期，<code>pre-month</code>、<code>next-month</code>分别为上个月和上个月;<code>date</code>为变化后返回的日期</td><td><code>Object</code></td></tr></tbody></table>',8);function U(o,u,c,E,i,d){const r=f("render-demo-0"),n=f("demo"),A=f("render-demo-1");return b(),k("div",null,[w,N,O,D(n,{customClass:"undefined",sourceCode:`<template>
  <div style="background: #fff">
    <p>以星期日开头</p>
    <k-calendar v-model="value" :first-day="0" @on-change="onChange" />
    <br />
    <br />
    <p>以星期一开头</p>
    <k-calendar v-model="value2" :first-day="1" @on-change="onChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(new Date());
const value2 = ref(new Date());
const onChange = (val: { date: Date; type: string }) => {
  console.log(val);
};
<\/script>
`},{highlight:C(()=>[j]),default:C(()=>[D(r)]),_:1}),$,P,D(n,{customClass:"undefined",sourceCode:`<template>
  <k-calendar :first-day="0">
    <template #date-cell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }}
        {{ data.isSelected ? '😁' : '' }}
      </p>
    </template>
  </k-calendar>
</template>
`},{highlight:C(()=>[z]),default:C(()=>[D(A)]),_:1}),M])}const G=B(S,[["render",U]]);export{q as __pageData,G as default};
