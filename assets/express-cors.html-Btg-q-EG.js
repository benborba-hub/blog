import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as e,o as n}from"./app-C2PRXgkW.js";const t={};function l(h,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="express解决跨域问题" tabindex="-1"><a class="header-anchor" href="#express解决跨域问题"><span>express解决跨域问题</span></a></h1><h2 id="_1-使用cors" tabindex="-1"><a class="header-anchor" href="#_1-使用cors"><span>1.使用cors</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cors</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --save-dev</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#Or</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cors</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --save-dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">const</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cors</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;cors&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">app.use(cors(</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-手动实现" tabindex="-1"><a class="header-anchor" href="#_2-手动实现"><span>2.手动实现</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">app.use((req,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> res,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">res.header(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;Access-Control-Allow-Origin&#39;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;*&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">res.header(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;Access-Control-Allow-Headers&#39;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> )</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">res.header(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;Access-Control-Allow-Methods&#39;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;GET, POST, OPTIONS, PATCH, PUT, DELETE&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">res.header(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;Allow&#39;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;GET, POST, PATCH, OPTIONS, PUT, DELETE&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">next</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const k=i(t,[["render",l],["__file","express-cors.html.vue"]]),d=JSON.parse(`{"path":"/nodejs/express-cors.html","title":"express解决跨域问题","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-02-10T00:00:00.000Z","category":["nodejs"],"tag":["nodejs","express"],"star":true,"sticky":true,"description":"express解决跨域问题 1.使用cors 2.手动实现","head":[["meta",{"property":"og:url","content":"https://vuejshub.github.io/blog/blog/nodejs/express-cors.html"}],["meta",{"property":"og:site_name","content":"前端进阶"}],["meta",{"property":"og:title","content":"express解决跨域问题"}],["meta",{"property":"og:description","content":"express解决跨域问题 1.使用cors 2.手动实现"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-19T13:08:48.000Z"}],["meta",{"property":"article:tag","content":"nodejs"}],["meta",{"property":"article:tag","content":"express"}],["meta",{"property":"article:published_time","content":"2022-02-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-19T13:08:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"express解决跨域问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-19T13:08:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Tim\\",\\"url\\":\\"https://vuejshub.github.io/blog/\\"}]}"]]},"headers":[{"level":2,"title":"1.使用cors","slug":"_1-使用cors","link":"#_1-使用cors","children":[]},{"level":2,"title":"2.手动实现","slug":"_2-手动实现","link":"#_2-手动实现","children":[]}],"git":{"createdTime":1732021728000,"updatedTime":1732021728000,"contributors":[{"name":"Tim","email":"qiaojiazhou@outlook.com","commits":1}]},"readingTime":{"minutes":0.34,"words":101},"filePathRelative":"nodejs/express-cors.md","localizedDate":"2022年2月10日","excerpt":"\\n<h2>1.使用cors</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">npm</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> cors</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --save-dev</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">#Or</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">pnpm</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> cors</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --save-dev</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">const</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> cors</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> =</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> require</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">'cors'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">app.use(cors(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">));</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{k as comp,d as data};