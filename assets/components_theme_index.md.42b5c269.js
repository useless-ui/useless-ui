import{_ as s,o as l,c as a,e as n}from"./app.cc978a6c.js";const d=JSON.parse('{"title":"Theme 主题配置","description":"","frontmatter":{},"headers":[{"level":2,"title":"默认主题","slug":"默认主题","link":"#默认主题","children":[]},{"level":2,"title":"自定义主题","slug":"自定义主题","link":"#自定义主题","children":[]}],"relativePath":"components/theme/index.md"}'),o={name:"components/theme/index.md"},t=n(`<h1 id="theme-主题配置" tabindex="-1">Theme 主题配置 <a class="header-anchor" href="#theme-主题配置" aria-hidden="true">#</a></h1><h2 id="默认主题" tabindex="-1">默认主题 <a class="header-anchor" href="#默认主题" aria-hidden="true">#</a></h2><p>组件库提供默认主题与暗色主题,使用媒体查询 <strong>prefers-color-scheme</strong> 来跟随系统进行主题切换</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki rose-pine-moon vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#908CAA;font-style:italic;">/*</span><span style="color:#6E6A86;font-style:italic;"> 默认主题变量 </span><span style="color:#908CAA;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">:</span><span style="color:#C4A7E7;font-style:italic;">root</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#EA9A97;font-style:italic;">--border-color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">#</span><span style="color:#3E8FB0;">ebeef5</span><span style="color:#908CAA;">;</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;font-style:italic;">/*</span><span style="color:#6E6A86;font-style:italic;"> 边框色 </span><span style="color:#908CAA;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#EA9A97;font-style:italic;">--theme-color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">#</span><span style="color:#3E8FB0;">3bd3be</span><span style="color:#908CAA;">;</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;font-style:italic;">/*</span><span style="color:#6E6A86;font-style:italic;"> 主题色 </span><span style="color:#908CAA;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#EA9A97;font-style:italic;">--theme-hover-color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">#</span><span style="color:#3E8FB0;">40d9c4</span><span style="color:#908CAA;">;</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;font-style:italic;">/*</span><span style="color:#6E6A86;font-style:italic;"> hover主题色 </span><span style="color:#908CAA;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#EA9A97;font-style:italic;">--font-color</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">#</span><span style="color:#3E8FB0;">606266</span><span style="color:#908CAA;">;</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;font-style:italic;">/*</span><span style="color:#6E6A86;font-style:italic;"> 字体颜色 </span><span style="color:#908CAA;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#EA9A97;font-style:italic;">--zebra-bg</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">#</span><span style="color:#3E8FB0;">fafafa</span><span style="color:#908CAA;">;</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;font-style:italic;">/*</span><span style="color:#6E6A86;font-style:italic;"> 斑马纹背景色 </span><span style="color:#908CAA;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#EA9A97;font-style:italic;">--border-sm-radius</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">5</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;font-style:italic;">/*</span><span style="color:#6E6A86;font-style:italic;"> 小型组件圆角: button message-- </span><span style="color:#908CAA;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#EA9A97;font-style:italic;">--border-lg-radius</span><span style="color:#908CAA;">:</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">15</span><span style="color:#3E8FB0;">px</span><span style="color:#908CAA;">;</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;font-style:italic;">/*</span><span style="color:#6E6A86;font-style:italic;"> 大型组件圆角: dialog table-- </span><span style="color:#908CAA;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki rose-pine-dawn vp-code-light" tabindex="0"><code><span class="line"><span style="color:#797593;font-style:italic;">/*</span><span style="color:#9893A5;font-style:italic;"> 默认主题变量 </span><span style="color:#797593;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#797593;font-style:italic;">:</span><span style="color:#907AA9;font-style:italic;">root</span><span style="color:#575279;"> </span><span style="color:#797593;">{</span></span>
<span class="line"><span style="color:#575279;">  </span><span style="color:#D7827E;font-style:italic;">--border-color</span><span style="color:#797593;">:</span><span style="color:#575279;"> </span><span style="color:#797593;">#</span><span style="color:#286983;">ebeef5</span><span style="color:#797593;">;</span><span style="color:#575279;"> </span><span style="color:#797593;font-style:italic;">/*</span><span style="color:#9893A5;font-style:italic;"> 边框色 </span><span style="color:#797593;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#575279;">  </span><span style="color:#D7827E;font-style:italic;">--theme-color</span><span style="color:#797593;">:</span><span style="color:#575279;"> </span><span style="color:#797593;">#</span><span style="color:#286983;">3bd3be</span><span style="color:#797593;">;</span><span style="color:#575279;"> </span><span style="color:#797593;font-style:italic;">/*</span><span style="color:#9893A5;font-style:italic;"> 主题色 </span><span style="color:#797593;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#575279;">  </span><span style="color:#D7827E;font-style:italic;">--theme-hover-color</span><span style="color:#797593;">:</span><span style="color:#575279;"> </span><span style="color:#797593;">#</span><span style="color:#286983;">40d9c4</span><span style="color:#797593;">;</span><span style="color:#575279;"> </span><span style="color:#797593;font-style:italic;">/*</span><span style="color:#9893A5;font-style:italic;"> hover主题色 </span><span style="color:#797593;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#575279;">  </span><span style="color:#D7827E;font-style:italic;">--font-color</span><span style="color:#797593;">:</span><span style="color:#575279;"> </span><span style="color:#797593;">#</span><span style="color:#286983;">606266</span><span style="color:#797593;">;</span><span style="color:#575279;"> </span><span style="color:#797593;font-style:italic;">/*</span><span style="color:#9893A5;font-style:italic;"> 字体颜色 </span><span style="color:#797593;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#575279;">  </span><span style="color:#D7827E;font-style:italic;">--zebra-bg</span><span style="color:#797593;">:</span><span style="color:#575279;"> </span><span style="color:#797593;">#</span><span style="color:#286983;">fafafa</span><span style="color:#797593;">;</span><span style="color:#575279;"> </span><span style="color:#797593;font-style:italic;">/*</span><span style="color:#9893A5;font-style:italic;"> 斑马纹背景色 </span><span style="color:#797593;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#575279;">  </span><span style="color:#D7827E;font-style:italic;">--border-sm-radius</span><span style="color:#797593;">:</span><span style="color:#575279;"> </span><span style="color:#D7827E;">5</span><span style="color:#286983;">px</span><span style="color:#797593;">;</span><span style="color:#575279;"> </span><span style="color:#797593;font-style:italic;">/*</span><span style="color:#9893A5;font-style:italic;"> 小型组件圆角: button message-- </span><span style="color:#797593;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#575279;">  </span><span style="color:#D7827E;font-style:italic;">--border-lg-radius</span><span style="color:#797593;">:</span><span style="color:#575279;"> </span><span style="color:#D7827E;">15</span><span style="color:#286983;">px</span><span style="color:#797593;">;</span><span style="color:#575279;"> </span><span style="color:#797593;font-style:italic;">/*</span><span style="color:#9893A5;font-style:italic;"> 大型组件圆角: dialog table-- </span><span style="color:#797593;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#797593;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="自定义主题" tabindex="-1">自定义主题 <a class="header-anchor" href="#自定义主题" aria-hidden="true">#</a></h2><p>使用 css 对组件库提供的变量进行覆盖即可</p>`,6),p=[t];function e(c,r,y,i,A,f){return l(),a("div",null,p)}const h=s(o,[["render",e]]);export{d as __pageData,h as default};
